<script>
  import { fade } from 'svelte/transition';
  import Header from '$lib/components/Header.svelte';
  import '$lib/styles/global.scss';

  export let data;
</script>

<Header isHome={data.currentRoute == '/'} />

{#key data.currentRoute}
  <main in:fade={{ duration: 99, delay: 99 }} out:fade={{ duration: 99 }} id="main">
    <slot />
  </main>
{/key}
