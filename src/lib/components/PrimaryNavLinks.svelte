<script>
  export const primaryNavItems = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/blog',
      label: 'Blog',
    },
    {
      href: '/about',
      label: 'About',
    },
  ];

  export let clickHandler = () => undefined;
</script>

<ul class="list">
  {#each primaryNavItems as item}
    <li class="item">
      <a href={item.href} class="link" on:click={clickHandler}>{item.label}</a>
    </li>
  {/each}
</ul>

<style lang="scss">
  @use '$lib/styles/partials/screen-size';

  .list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .item {
    width: 100%;
  }

  .link {
    display: block;
    line-height: 48px;
    padding: 0 8px;
  }

  @include screen-size.md {
    .item {
      width: auto;
    }
  }
</style>
