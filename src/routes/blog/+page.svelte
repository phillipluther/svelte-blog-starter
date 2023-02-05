<script>
	export let data;
</script>

<h1>Blog!</h1>

<section>
	<h2>Tags</h2>
	<ul>
		{#each data.tags as tag}
			<li>
				<a href={`/blog/tags/${tag}`}>{tag}</a>
			</li>
		{/each}
	</ul>
</section>

<section>
	<h2>Posts</h2>
	<ul>
		{#each data.posts as post}
			<li>
				<article>
					<header>
						<h2><a href={post.path}>{post.metadata.title}</a></h2>
						<p>{post.metadata.published}</p>
					</header>
					<p>{post.metadata.description}</p>
				</article>
			</li>
		{/each}
	</ul>
</section>
