import { apiUrl } from '$lib/host.js';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const latestRes = await fetch(`${apiUrl}/latest`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const popularRes = await fetch(`${apiUrl}/popular`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (latestRes.ok && popularRes.ok) {
			const latestPosts = await latestRes.json();
			const popularPosts = await popularRes.json();
			return { props: { latestPosts, popularPosts } };
		}

		throw error(404, 'Not found');
	} catch (err) {
		throw error(500, 'Internal server error');
	}
};
