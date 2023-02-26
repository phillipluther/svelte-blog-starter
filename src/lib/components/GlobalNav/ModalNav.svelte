<script>
  import { onMount } from 'svelte';
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    Transition,
    TransitionChild,
  } from '@rgossiaux/svelte-headlessui';
  import PrimaryNavLinks from '$lib/components/PrimaryNavLinks.svelte';
  import FollowLinks from '$lib/components/FollowLinks.svelte';
  import VisuallyHidden from '$lib/components/VisuallyHidden.svelte';

  import '$lib/styles/obscure-animations.css';
  import '$lib/styles/modal-nav-animations.css';

  // set this on mount to avoid FOUC with the menu controls while determining
  // screen size on desktop; had to add the conditional in the Headless UI
  // dialog so it wouldn't whine
  let open;

  function handleSelection(e) {
    open = false;
  }

  onMount(() => {
    open = false;
  });
</script>

<div class="controls" class:showing={open == false}>
  <button class="toggle" on:click={() => (open = true)}>
    <VisuallyHidden>{open ? 'Close' : 'Open'} Navigation Menu</VisuallyHidden>
    <span class="hamburger" />
  </button>
</div>

<Transition show={open || false}>
  <Dialog {open} on:close={() => (open = false)} class="primary-nav-menu">
    <TransitionChild
      enter="obscure--enter"
      enterFrom="obscure--enterFrom"
      enterTo="obscure--enterTo"
      leave="obscure--leave"
      leaveFrom="obscure--leaveFrom"
      leaveTo="obscure--leaveTo"
    >
      <DialogOverlay class="obscure" />
    </TransitionChild>

    <TransitionChild
      enter="modal-nav--enter"
      enterFrom="modal-nav--enterFrom"
      enterTo="modal-nav--enterTo"
      leave="modal-nav--leave"
      leaveFrom="modal-nav--leaveFrom"
      leaveTo="modal-nav--leaveTo"
      class="modal-nav"
    >
      <DialogTitle>Blog Primary Navigation</DialogTitle>

      <nav class="nav">
        <PrimaryNavLinks clickHandler={handleSelection} />
        <FollowLinks />
      </nav>
    </TransitionChild>
  </Dialog>
</Transition>

<style>
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
</style>
