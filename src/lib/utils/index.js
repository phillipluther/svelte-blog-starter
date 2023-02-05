export async function getMarkdownPosts() {
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

		return allPosts;
	} catch (err) {
		console.error('Failed to get posts');
		throw err;
	}
}
