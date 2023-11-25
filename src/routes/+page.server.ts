import type { PageServerLoad } from './$types';
import { getProjectsData } from '$lib/firebase';

export const load = (async () => {

    const projects = await getProjectsData();

    return { projects };
}) satisfies PageServerLoad;