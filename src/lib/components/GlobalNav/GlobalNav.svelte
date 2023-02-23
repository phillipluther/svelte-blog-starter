<script>
  import ModalNav from './ModalNav.svelte';
  import InlineNav from './InlineNav.svelte';

  let w;
</script>

<div bind:clientWidth={w} />
<svelte:component this={w < 620 ? ModalNav : InlineNav} />
