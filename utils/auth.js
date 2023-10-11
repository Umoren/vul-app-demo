import { getSession } from '@auth0/nextjs-auth0';

export async function getUser(req) {
    const session = await getSession(req);
    return session?.user || null;
}