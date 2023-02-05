export async function load({ fetch }) {
	try {
		const tagsResponse = await fetch('/api/tags');
		const tags = await tagsResponse.json();

		return { tags };
	} catch (err) {
		console.error('Error getting tags');
		throw err;
	}
}
