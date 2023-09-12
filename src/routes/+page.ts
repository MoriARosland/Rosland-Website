import { writable } from 'svelte/store';
import type { PageLoad } from './$types';

export const load = (async () => {

    let showcaseState = 'projects';

    return { showcaseState };
}) satisfies PageLoad;