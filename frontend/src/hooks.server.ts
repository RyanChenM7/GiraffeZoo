import type { Handle } from '@sveltejs/kit';

const unProtectedRoutes: string[] = [
    '/',
    '/login',
    '/register',
    '/__data.js',
    '/login/__data.js',
    '/register/__data.js'
];

export const handle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');
    if (!session && !unProtectedRoutes.includes(event.url.pathname)) {
        event.locals = {
            isAuth: false
        }
    }
    if (session) {
        event.locals = {
            isAuth: true,
            userId: session
        }
    } else {
        event.locals = {
            isAuth: false
        }
    }
    return resolve(event);
};