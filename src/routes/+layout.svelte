<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/global.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>Global Footer</footer>
