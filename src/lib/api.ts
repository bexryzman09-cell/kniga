const API_URL = import.meta.env.VITE_API_URL as string;

console.log('API_URL:', API_URL);

async function request(path: string, body?: unknown) {
    const res = await fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // обязательно - иначе cookie с сессией не будет отправляться/приниматься
        body: body ? JSON.stringify(body) : undefined,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
        throw new Error(data.error || 'Что-то пошло не так, попробуйте ещё раз');
    }

    return data;
}

async function get(path: string) {
    const res = await fetch(`${API_URL}${path}`, { credentials: 'include' });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Ошибка запроса');
    return data;
}

export const api = {
    register: (firstName: string, lastName: string, phone: string) =>
        request('/api/auth/register', { firstName, lastName, phone }),

    setPassword: (password: string) => request('/api/auth/set-password', { password }),

    login: (phone: string, password: string) => request('/api/auth/login', { phone, password }),

    logout: () => request('/api/auth/logout'),

    me: () => get('/api/auth/me'),

    forgotPassword: (phone: string) => request('/api/auth/forgot-password', { phone }),

    confirmResetCode: (phone: string, code: string) =>
        request('/api/auth/confirm-reset-code', { phone, code }),
};