<script>
  import GlobalNav from './GlobalNav/GlobalNav.svelte';
  import Logo from './Logo.svelte';

  let clientWidth = 0;
  export let isHome = false;
</script>

<header class="wrapper container" bind:clientWidth>
  <svelte:element this={isHome ? 'h1' : 'p'} class="logo">
    <a href="/">
      <Logo />
    </a>
  </svelte:element>

  <div class="nav-wrapper">
    <GlobalNav isSmallScreen={clientWidth < 620} />
  </div>
</header>

<style>
  .wrapper {
    display: flex;
  }

  .nav-wrapper {
    width: 100%;
  }

  .logo {
    /* garbage styles just for boilerplating */
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 24px 0 0;
    padding: 0;
  }
</style>
