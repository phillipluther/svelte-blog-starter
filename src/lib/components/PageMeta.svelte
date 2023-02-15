<script>
	const blogName = 'Some Blog Name';
	export let title;
</script>

<svelte:head>
	<title>{title && title != '' ? `${title} | ${blogName}` : blogName}</title>
</svelte:head>
