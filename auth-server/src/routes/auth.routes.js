import { Router } from 'express';
import bcrypt from 'bcryptjs';
import pool from '../db.js';
import { signToken, verifyToken, cookieOptions } from '../utils/jwt.js';
import { requireAuth } from '../middleware/requireAuth.js';

const router = Router();

const PHONE_RE = /^\+998\d{9}$/;
const WEEK = 7 * 24 * 60 * 60 * 1000;
const ACTION_TOKEN_TTL = 15 * 60 * 1000;

function issueSession(res, userId) {
    const token = signToken({ userId });
    res.cookie('token', token, cookieOptions(WEEK));
}

function issueActionToken(res, userId, purpose) {
    const actionToken = signToken({ userId, purpose }, '15m');
    res.cookie('actionToken', actionToken, cookieOptions(ACTION_TOKEN_TTL));
}

// ---------- ШАГ 1: РЕГИСТРАЦИЯ (без пароля) ----------
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, phone } = req.body || {};

        if (!phone || !PHONE_RE.test(phone)) {
            return res.status(400).json({ error: 'Неверный формат номера. Пример: +998901234567' });
        }

        const existingRes = await pool.query('SELECT id, password_hash FROM users WHERE phone = $1', [phone]);
        const existing = existingRes.rows[0];

        if (existing && existing.password_hash) {
            return res.status(409).json({ error: 'Пользователь с таким номером уже зарегистрирован' });
        }

        let userId;
        if (existing) {
            userId = existing.id;
            await pool.query('UPDATE users SET first_name = $1, last_name = $2 WHERE id = $3', [
                firstName || null,
                lastName || null,
                userId,
            ]);
        } else {
            const insertRes = await pool.query(
                'INSERT INTO users (first_name, last_name, phone) VALUES ($1, $2, $3) RETURNING id',
                [firstName || null, lastName || null, phone]
            );
            userId = insertRes.rows[0].id;
        }

        issueActionToken(res, userId, 'setup');
        res.status(201).json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// ---------- ВХОД ----------
router.post('/login', async (req, res) => {
    try {
        const { phone, password } = req.body || {};

        const userRes = await pool.query('SELECT * FROM users WHERE phone = $1', [phone]);
        const user = userRes.rows[0];

        if (!user || !user.password_hash || !bcrypt.compareSync(password || '', user.password_hash)) {
            return res.status(401).json({ error: 'Неверный номер телефона или пароль' });
        }

        issueSession(res, user.id);

        res.json({
            user: { id: user.id, firstName: user.first_name, lastName: user.last_name, phone: user.phone },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// ---------- ВЫХОД ----------
router.post('/logout', (req, res) => {
    res.clearCookie('token', { ...cookieOptions(0), maxAge: undefined });
    res.json({ ok: true });
});

// ---------- ТЕКУЩИЙ ПОЛЬЗОВАТЕЛЬ ----------
router.get('/me', requireAuth, async (req, res) => {
    try {
        const userRes = await pool.query('SELECT id, first_name, last_name, phone FROM users WHERE id = $1', [
            req.userId,
        ]);
        const user = userRes.rows[0];
        if (!user) return res.status(404).json({ error: 'Пользователь не найден' });
        res.json({
            user: { id: user.id, firstName: user.first_name, lastName: user.last_name, phone: user.phone },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// ---------- ЗАБЫЛИ ПАРОЛЬ: шаг 1 - отправить код ----------
router.post('/forgot-password', async (req, res) => {
    try {
        const { phone } = req.body || {};
        if (!phone || !PHONE_RE.test(phone)) {
            return res.status(400).json({ error: 'Неверный формат номера' });
        }

        const userRes = await pool.query('SELECT id FROM users WHERE phone = $1', [phone]);
        if (!userRes.rows[0]) {
            return res.json({ ok: true }); // не палим существование номера
        }

        const code = String(Math.floor(100000 + Math.random() * 900000));
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

        await pool.query('INSERT INTO reset_codes (phone, code, expires_at) VALUES ($1, $2, $3)', [
            phone,
            code,
            expiresAt,
        ]);

        // TODO: подключить реальную SMS-отправку (eskiz.uz, playmobile.uz)
        console.log(`[SMS] Код для ${phone}: ${code}`);

        res.json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// ---------- ЗАБЫЛИ ПАРОЛЬ: шаг 2 - подтвердить код ----------
router.post('/confirm-reset-code', async (req, res) => {
    try {
        const { phone, code } = req.body || {};

        const recordRes = await pool.query(
            'SELECT * FROM reset_codes WHERE phone = $1 AND code = $2 AND used = false ORDER BY id DESC LIMIT 1',
            [phone, code]
        );
        const record = recordRes.rows[0];

        if (!record || new Date(record.expires_at).getTime() < Date.now()) {
            return res.status(400).json({ error: 'Код неверный или просрочен' });
        }

        const userRes = await pool.query('SELECT id FROM users WHERE phone = $1', [phone]);
        const user = userRes.rows[0];
        if (!user) {
            return res.status(404).json({ error: 'Пользователь не найден' });
        }

        await pool.query('UPDATE reset_codes SET used = true WHERE id = $1', [record.id]);

        issueActionToken(res, user.id, 'reset');
        res.json({ ok: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// ---------- SECURITY.TSX: ПОСТАВИТЬ / СМЕНИТЬ ПАРОЛЬ ----------
router.post('/set-password', async (req, res) => {
    try {
        const { password } = req.body || {};
        const token = req.cookies?.actionToken;

        if (!token) {
            return res.status(401).json({ error: 'Сессия истекла, начните заново (регистрацию или сброс пароля)' });
        }
        if (!password || password.length < 6) {
            return res.status(400).json({ error: 'Пароль должен быть не короче 6 символов' });
        }

        const payload = verifyToken(token);
        if (!payload || (payload.purpose !== 'setup' && payload.purpose !== 'reset')) {
            return res.status(401).json({ error: 'Ссылка устарела, начните заново' });
        }

        const passwordHash = bcrypt.hashSync(password, 10);
        await pool.query('UPDATE users SET password_hash = $1 WHERE id = $2', [passwordHash, payload.userId]);

        res.clearCookie('actionToken', { ...cookieOptions(0), maxAge: undefined });
        issueSession(res, payload.userId);

        const userRes = await pool.query('SELECT id, first_name, last_name, phone FROM users WHERE id = $1', [
            payload.userId,
        ]);
        const user = userRes.rows[0];

        res.json({
            user: { id: user.id, firstName: user.first_name, lastName: user.last_name, phone: user.phone },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

export default router;