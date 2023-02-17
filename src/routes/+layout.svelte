<script>
  import { fade } from 'svelte/transition';
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles/global.css';

  export let data;
</script>

<Header />

{#key data.currentRoute}
  <main in:fade={{ duration: 99, delay: 99 }} out:fade={{ duration: 99 }}>
    <slot />
  </main>
{/key}
