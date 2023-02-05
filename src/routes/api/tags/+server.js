import { json } from '@sveltejs/kit';
import { getMarkdownPosts } from '$lib/utils';

export async function GET() {
	try {
		const posts = await getMarkdownPosts();

		const tags = posts.reduce(function (acc, post) {
			return acc.concat(post.metadata.tags);
		}, []);

		return json([...new Set(tags)]);
	} catch (err) {
		console.error('Could not GET tags');
		throw err;
	}
}
