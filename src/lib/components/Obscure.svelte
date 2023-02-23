<script>
  export let show = false;
</script>

<div class="obscure" class:show aria-hidden />

<style>
  .obscure {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    height: 1px;
    width: 1px;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 120ms ease-out, height 0ms ease 120ms, width 0ms ease 120ms;
    opacity: 0;
  }

  .obscure.show {
    width: 100vw;
    height: 100vh;
    opacity: 1;
    transition: opacity 120ms ease-in;
  }
</style>
