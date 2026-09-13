import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET;

export function signToken(payload, expiresIn = '7d') {
    return jwt.sign(payload, SECRET, { expiresIn });
}

export function verifyToken(token) {
    try {
        return jwt.verify(token, SECRET);
    } catch {
        return null;
    }
}

// общие настройки cookie, чтобы не дублировать в роутах
export function cookieOptions(maxAgeMs) {
    const isProd = process.env.NODE_ENV === 'production';
    return {
        httpOnly: true,
        secure: isProd, // на Railway/HTTPS обязательно true
        sameSite: isProd ? 'none' : 'lax', // 'none' нужен если фронт и бэк на разных доменах
        maxAge: maxAgeMs,
        path: '/',
    };
}