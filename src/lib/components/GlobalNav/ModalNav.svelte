<script>
  import { onMount } from 'svelte';
  import { portal } from 'svelte-portal';
  import PrimaryNavLinks from '$lib/components/PrimaryNavLinks.svelte';
  import FollowLinks from '$lib/components/FollowLinks.svelte';
  import VisuallyHidden from '$lib/components/VisuallyHidden.svelte';
  import Obscure from '$lib/components/Obscure.svelte';

  let showMenu = false;
  let showControls = false;

  function toggleMenu() {
    showMenu = !showMenu;
  }

  function toggleControls() {
    showControls = !showControls;
  }

  onMount(toggleControls);
</script>

<div class="controls" class:showing={showControls}>
  <button class="toggle" class:toggled={showMenu} on:click={toggleMenu}>
    <VisuallyHidden>{showMenu ? 'Close' : 'Open'} Navigation Menu</VisuallyHidden>
    <span class="hamburger" />
  </button>
</div>

<Obscure show={showMenu} />

<div use:portal={'body'} class="menu" class:showing={showMenu} hidden>
  <nav class="nav">
    <PrimaryNavLinks />
    <FollowLinks />
  </nav>
</div>

<style>
  .menu {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    background: lightgray;
    transition: transform 240ms, opacity 210ms;
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  .menu.showing {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .toggle {
    border: 0;
    border-radius: 50%;
    background: lightgreen;
    width: 64px;
    height: 64px;
    padding: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .controls {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 20;
    transition: transform 180ms ease-in;
    transform: translate3d(0, 200%, 0);
  }

  .controls.showing {
    transform: translate3d(0, 0, 0);
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
</style>
