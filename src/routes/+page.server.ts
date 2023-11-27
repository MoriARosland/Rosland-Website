import type { PageServerLoad } from './$types';
import { getProjectsData } from '$lib/firebase';
import { error } from '@sveltejs/kit';

export const load = (async () => {

    try {
        const projects = await getProjectsData();
        return { projects };
    } catch (err) {
        console.error(err);
        return undefined;
    }

}) satisfies PageServerLoad;