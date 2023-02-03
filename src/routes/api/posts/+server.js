import { json } from '@sveltejs/kit';

export async function GET() {
	try {
		const postFiles = Object.entries(import.meta.glob('/src/routes/blog/*.md'));
		const allPosts = await Promise.all(
			postFiles.map(async function ([path, resolver]) {
				const { metadata } = await resolver();

				return {
					metadata,
					path: path.slice(11, -3)
				};
			})
		);

		// TODO … sorting? filtering?
		return json(allPosts);
	} catch (err) {
		console.log('Caught error (add error handling)');
		throw err;
	}
}
