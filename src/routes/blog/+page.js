export async function load({ fetch }) {
  const postsRes = await fetch('/api/posts');
  const tagsRes = await fetch('/api/tags');

  const posts = await postsRes.json();
  const tags = await tagsRes.json();

  return { posts, tags };
}
