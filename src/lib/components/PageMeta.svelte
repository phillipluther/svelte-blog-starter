<script>
  const blogName = 'Some Blog Name';
  export let title = blogName;
</script>

<svelte:head>
  <title>{title === blogName ? title : `${title} :: ${blogName}`}</title>
</svelte:head>
