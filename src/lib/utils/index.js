import { titleCase } from 'title-case';

export async function getFullPosts() {
  try {
    const postFiles = Object.entries(import.meta.glob('/src/lib/posts/*.md'));
    const allPosts = await Promise.all(
      postFiles.map(async function ([path, resolver]) {
        const {
          metadata,
          default: { render },
        } = await resolver();

        return {
          content: render().html,
          metadata,
          path: `/blog/${getSlugFromPath(path)}`,
        };
      }),
    );

    return allPosts;
  } catch (err) {
    console.error('Failed to get all posts');
    throw err;
  }
}

export async function getPostSummaries() {
  try {
    const allPosts = await getFullPosts();

    return allPosts.map(function ({ metadata, path }) {
      return {
        metadata,
        path,
      };
    });
  } catch (err) {
    console.error('Failed to get post summaries');
    throw err;
  }
}

export function getPageNameFromRoute(route) {
  const cleanedHyphenRoute = route.replace(/-/g, ' ');
  return titleCase(getSlugFromPath(cleanedHyphenRoute));
}

export function getSlugFromPath(filePath) {
  const maybeSlug = filePath.split('/').pop();
  return /\.md$/.test(maybeSlug) ? maybeSlug.slice(0, -3) : maybeSlug;
}
