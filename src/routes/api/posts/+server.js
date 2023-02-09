import { json } from '@sveltejs/kit';
import { getPostSummaries } from '$lib/utils';

export async function GET() {
	try {
		const posts = await getPostSummaries();
		// TODO … sorting? filtering?
		return json(posts);
	} catch (err) {
		console.error('Caught error (add error handling)');
		throw err;
	}
}
