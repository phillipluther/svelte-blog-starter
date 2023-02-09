import { json } from '@sveltejs/kit';
import { getPostSummaries } from '$lib/utils';

export async function GET() {
	try {
		const posts = await getPostSummaries();

		const tags = posts.reduce(function (acc, post) {
			return acc.concat(post.metadata.tags);
		}, []);

		return json([...new Set(tags)]);
	} catch (err) {
		console.error('Could not GET tags');
		throw err;
	}
}
