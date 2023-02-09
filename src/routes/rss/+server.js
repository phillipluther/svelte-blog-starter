import { Feed } from 'feed';
import { getFullPosts } from '$lib/utils';

export const prerender = true;

export async function GET() {
	try {
		const feed = new Feed({
			title: 'Look -- RSS!',
			description: 'Example RSS feed using the `feed` package',
			id: 'https://phillipluther.com/',
			link: 'https://phillipluther.com/',
			language: 'en',
			image: 'http://phillipluther.com/image.png',
			favicon: 'http://phillipluther.com/favicon.ico',
			copyright:
				'All blog content and images are Copyright © 2023 by Phillip Luther unless otherwise specified',
			feedLinks: {
				json: 'https://example.com/json',
				atom: 'https://example.com/atom'
			},
			author: {
				name: 'Phillip Luther',
				email: 'dev@phillipluther.com',
				link: 'https://phillipluther.com'
			}
		});

		const posts = (await getFullPosts()).sort(
			(a, b) => new Date(a.published) - new Date(b.published)
		);

		posts.forEach((post) => {
			const { title, description, coverImage, published } = post.metadata;

			feed.addItem({
				title,
				id: post.path,
				link: `https://someblogurl.com/${post.path}`,
				description,
				content: post.content,
				author: {
					name: 'Phillip Luther',
					email: 'dev@phillipluther.com',
					link: 'https://phillipluther.com'
				},
				date: new Date(published),
				image: coverImage
			});
		});

		return new Response(feed.rss2(), {
			headers: {
				'Cache-Control': 'max-age=0, s-maxage=3600',
				'Content-Type': 'application/xml'
			}
		});
	} catch (err) {
		console.error('Error generating RSS feed');
		throw err;
	}
}
