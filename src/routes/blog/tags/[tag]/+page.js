export async function load({ params, fetch }) {
	try {
		const { tag } = params;
		const allPosts = await (await fetch('/api/posts')).json();

		const posts = allPosts.filter(function (post) {
			return post.metadata.tags.includes(tag);
		});

		return {
			tag,
			posts
		};
	} catch (err) {
		console.error('Caught tag error:');
		throw err;
	}
}
