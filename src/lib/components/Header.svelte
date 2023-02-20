<script>
  import PrimaryNav from './PrimaryNav.svelte';
  import VisuallyHidden from './VisuallyHidden.svelte';

  import Drawer, { Content, Header, Title, Subtitle, Scrim } from '@smui/drawer';

  let open = false;

  function toggleMenu() {
    open = !open;
  }
</script>

<header class="wrapper container main-content">
  <button class="toggle" class:toggled={open} on:click={toggleMenu}>
    <VisuallyHidden>{open ? 'Close' : 'Open'} Navigation Menu</VisuallyHidden>
    <span class="hamburger" />
  </button>
</header>

<Drawer variant="modal" bind:open bottom>
  <!-- <Header>
    <Title>My Blog Name</Title>
    <Subtitle>My blog's pithy tagline</Subtitle>
  </Header>
 -->
  <Content>
    <PrimaryNav />
  </Content>
</Drawer>

<Scrim />

<style>
  .toggle {
    border: 0;
    border-radius: 50%;
    background: lightgreen;
    width: 64px;
    height: 64px;
    padding: 0;
    position: absolute;
    bottom: 24px;
    right: 24px;
    z-index: 20;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .hamburger,
  .hamburger::before,
  .hamburger::after {
    display: block;
    border-top: 3px solid black;
    transition: transform 180ms;
  }

  .hamburger {
    position: relative;
    width: 40%;
    margin: 0 auto;
  }

  .hamburger::before,
  .hamburger::after {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .hamburger::before {
    transform: translate3d(0, -6px, 0);
  }

  .hamburger::after {
    transform: translate3d(0, 6px, 0);
  }

  .toggled .hamburger {
    transform: rotateZ(-45deg);
  }

  .toggled .hamburger::before {
    transform: translate3d(0, 0, 0);
  }

  .toggled .hamburger::after {
    transform: rotateZ(90deg) translate3d(0, 0, 0);
  }

  @media (min-width: 390px) {
  }

  @media (min-width: 620px) {
    .toggle {
      display: none;
    }
  }
</style>
