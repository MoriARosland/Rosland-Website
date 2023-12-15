import type { PageServerLoad } from './$types';
import { getProjectsData } from '$lib/firebase';

export const load = (async () => {

    try {
        const projects = await getProjectsData();
        return { projects };
    } catch (err) {
        console.error(err);
        return undefined;
    }

}) satisfies PageServerLoad;