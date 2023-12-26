import { error, json } from '@sveltejs/kit';
import { GOOGLE_ID } from '$env/static/private'
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    let requestData;

    try {
        requestData = await request.json();
    } catch (err) {
        throw error(400, 'Invalid request.');
    }

    const { googleID } = requestData;

    if (googleID == GOOGLE_ID) {
        return json({ isAdmin: true })
    } else {
        throw json({ isAdmin: false })
    }
};