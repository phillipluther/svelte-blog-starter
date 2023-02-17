import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess({
      postcss: {
        plugins: [autoprefixer],
      },
    }),
    mdsvex({
      extensions: ['.md'],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
  ],
};

export default config;
