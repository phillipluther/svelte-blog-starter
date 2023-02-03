/**
 * Svelte newb note to self here that `params.slug` maps back to the `[slug]` dynamic route;
 * could be called anything, but params[anything] will reference [anything] folder
 */
export async function load({ params }) {
	try {
		const post = await import(`../${params.slug}.md`);
		const { title, description, published } = post.metadata;

		return {
			title,
			description,
			published,
			content: post.default
		};
	} catch (err) {
		console.log('Caught dynamic route error:');
		// console.error(err);
		throw err;
	}
}
