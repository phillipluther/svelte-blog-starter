<script>
	/**
	 * another Svelte newb reminder; props and params coming in from the corresponding
	 * +page.js file show up here in a `data` object
	 */
	export let data;
</script>

<article>
	<header>
		<h1>{data.title}</h1>
		<p>Published: {data.published}</p>
	</header>
	<section>
		<svelte:component this={data.content} />
	</section>
</article>
