<script>
  import PrimaryNavLinks from '$lib/components/PrimaryNavLinks.svelte';
  import FollowLinks from '$lib/components/FollowLinks.svelte';
</script>

<nav class="nav">
  <PrimaryNavLinks />
  <FollowLinks />
</nav>

<style>
  .nav {
    display: flex;
    height: 100%;
    align-items: center;
  }
</style>
