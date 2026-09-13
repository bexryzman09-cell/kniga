import { Router } from 'express';
import bcrypt from 'bcryptjs';
import db from '../db.js';
import { signToken, verifyToken, cookieOptions } from '../utils/jwt.js';
import { requireAuth } from '../middleware/requireAuth.js';

const router = Router();

const PHONE_RE = /^\+998\d{9}$/;
const WEEK = 7 * 24 * 60 * 60 * 1000;
const ACTION_TOKEN_TTL = 15 * 60 * 1000; // 15 минут на то, чтобы дойти до Security и задать пароль

function issueSession(res, userId) {
    const token = signToken({ userId });
    res.cookie('token', token, cookieOptions(WEEK));
}

function issueActionToken(res, userId, purpose) {
    // purpose: 'setup' (после регистрации) или 'reset' (после подтверждения кода)
    const actionToken = signToken({ userId, purpose }, '15m');
    res.cookie('actionToken', actionToken, cookieOptions(ACTION_TOKEN_TTL));
}

// ---------- ШАГ 1: РЕГИСТРАЦИЯ (без пароля) ----------
router.post('/register', (req, res) => {
    const { firstName, lastName, phone } = req.body || {};

    if (!phone || !PHONE_RE.test(phone)) {
        return res.status(400).json({ error: 'Неверный формат номера. Пример: +998901234567' });
    }

    const existing = db.prepare('SELECT id, password_hash FROM users WHERE phone = ?').get(phone);
    if (existing && existing.password_hash) {
        return res.status(409).json({ error: 'Пользователь с таким номером уже зарегистрирован' });
    }

    let userId;
    if (existing) {
        // уже начинал регистрацию, но пароль не поставил - используем ту же запись
        userId = existing.id;
        db.prepare('UPDATE users SET first_name = ?, last_name = ? WHERE id = ?').run(firstName || null, lastName || null, userId);
    } else {
        const info = db
            .prepare('INSERT INTO users (first_name, last_name, phone) VALUES (?, ?, ?)')
            .run(firstName || null, lastName || null, phone);
        userId = info.lastInsertRowid;
    }

    // выдаём временный токен - именно по нему Security.tsx поймёт, какому юзеру ставить пароль
    issueActionToken(res, userId, 'setup');

    res.status(201).json({ ok: true });
});

// ---------- ВХОД ----------
router.post('/login', (req, res) => {
    const { phone, password } = req.body || {};

    const user = db.prepare('SELECT * FROM users WHERE phone = ?').get(phone);
    if (!user || !user.password_hash || !bcrypt.compareSync(password || '', user.password_hash)) {
        return res.status(401).json({ error: 'Неверный номер телефона или пароль' });
    }

    issueSession(res, user.id);

    res.json({
        user: { id: user.id, firstName: user.first_name, lastName: user.last_name, phone: user.phone },
    });
});

// ---------- ВЫХОД ----------
router.post('/logout', (req, res) => {
    res.clearCookie('token', { ...cookieOptions(0), maxAge: undefined });
    res.json({ ok: true });
});

// ---------- ТЕКУЩИЙ ПОЛЬЗОВАТЕЛЬ ----------
router.get('/me', requireAuth, (req, res) => {
    const user = db.prepare('SELECT id, first_name, last_name, phone FROM users WHERE id = ?').get(req.userId);
    if (!user) return res.status(404).json({ error: 'Пользователь не найден' });
    res.json({
        user: { id: user.id, firstName: user.first_name, lastName: user.last_name, phone: user.phone },
    });
});

// ---------- ЗАБЫЛИ ПАРОЛЬ: шаг 1 - отправить код ----------
router.post('/forgot-password', (req, res) => {
    const { phone } = req.body || {};
    if (!phone || !PHONE_RE.test(phone)) {
        return res.status(400).json({ error: 'Неверный формат номера' });
    }

    const user = db.prepare('SELECT id FROM users WHERE phone = ?').get(phone);
    if (!user) {
        // не палим, есть ли такой номер в базе
        return res.json({ ok: true });
    }

    const code = String(Math.floor(100000 + Math.random() * 900000)); // 6 цифр
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString();

    db.prepare('INSERT INTO reset_codes (phone, code, expires_at) VALUES (?, ?, ?)').run(phone, code, expiresAt);

    // TODO: подключить реальную SMS-отправку (eskiz.uz, playmobile.uz)
    console.log(`[SMS] Код для ${phone}: ${code}`);

    res.json({ ok: true });
});

// ---------- ЗАБЫЛИ ПАРОЛЬ: шаг 2 - подтвердить код ----------
router.post('/confirm-reset-code', (req, res) => {
    const { phone, code } = req.body || {};

    const record = db
        .prepare('SELECT * FROM reset_codes WHERE phone = ? AND code = ? AND used = 0 ORDER BY id DESC LIMIT 1')
        .get(phone, code);

    if (!record || new Date(record.expires_at).getTime() < Date.now()) {
        return res.status(400).json({ error: 'Код неверный или просрочен' });
    }

    const user = db.prepare('SELECT id FROM users WHERE phone = ?').get(phone);
    if (!user) {
        return res.status(404).json({ error: 'Пользователь не найден' });
    }

    db.prepare('UPDATE reset_codes SET used = 1 WHERE id = ?').run(record.id);

    // тот же механизм, что и после регистрации - Security.tsx общий для обоих случаев
    issueActionToken(res, user.id, 'reset');

    res.json({ ok: true });
});

// ---------- SECURITY.TSX: ПОСТАВИТЬ / СМЕНИТЬ ПАРОЛЬ ----------
router.post('/set-password', (req, res) => {
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
    db.prepare('UPDATE users SET password_hash = ? WHERE id = ?').run(passwordHash, payload.userId);

    res.clearCookie('actionToken', { ...cookieOptions(0), maxAge: undefined });

    // сразу логиним пользователя - удобно и после регистрации, и после сброса
    issueSession(res, payload.userId);

    const user = db.prepare('SELECT id, first_name, last_name, phone FROM users WHERE id = ?').get(payload.userId);
    res.json({
        user: { id: user.id, firstName: user.first_name, lastName: user.last_name, phone: user.phone },
    });
});

export default router;