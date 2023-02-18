export async function load({ params }) {
  try {
    const post = await import(`../../../lib/posts/${params.slug}.md`);
    const { title, description, published } = post.metadata;

    return {
      title,
      description,
      published,
      content: post.default,
    };
  } catch (err) {
    console.error('Caught dynamic route error:');
    throw err;
  }
}
