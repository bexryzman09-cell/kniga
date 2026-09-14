import { verifyToken } from '../utils/jwt.js';

export function requireAuth(req, res, next) {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ error: 'Не авторизован' });
    }

    const payload = verifyToken(token);
    if (!payload) {
        return res.status(401).json({ error: 'Сессия истекла, войдите заново' });
    }

    req.userId = payload.userId;
    next();
}