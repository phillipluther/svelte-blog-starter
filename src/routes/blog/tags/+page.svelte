<script>
	import PageMeta from '$lib/components/PageMeta.svelte';
	export let data;
</script>

<PageMeta title="All Tags" />
<h1>Tags</h1>
<ul>
	{#each data.tags as tag}
		<li>
			<a href={`/blog/tags/${tag}`}>{tag}</a>
		</li>
	{/each}
</ul>
