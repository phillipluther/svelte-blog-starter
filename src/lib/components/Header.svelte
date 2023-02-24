<script>
  import GlobalNav from './GlobalNav';
  import Logo from './Logo.svelte';

  export let isHome = false;
</script>

<header class="wrapper container">
  <svelte:element this={isHome ? 'h1' : 'p'} class="logo">
    <a href="/">
      <Logo />
    </a>
  </svelte:element>

  <GlobalNav />
</header>

<style>
  .logo {
    /* garbage styles just for boilerplating */
    display: inline-block;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
</style>
