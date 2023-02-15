<script>
	import PageMeta from '$lib/components/PageMeta.svelte';

	export let data;
</script>

<PageMeta title={`Posts Tagged as "${data.tag}"`} />
<h1>{data.tag}</h1>
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
