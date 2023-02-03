<script>
	export let data;
</script>

<h1>Blog!</h1>

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
