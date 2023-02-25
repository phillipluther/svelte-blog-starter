<script>
  import ModalNav from './ModalNav.svelte';
  import InlineNav from './InlineNav.svelte';

  export let isSmallScreen = true;
</script>

<svelte:component this={isSmallScreen ? ModalNav : InlineNav} />
