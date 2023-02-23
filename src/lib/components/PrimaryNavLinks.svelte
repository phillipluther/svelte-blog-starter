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
    // {
    //   href: '/contact',
    //   label: 'Contact',
    // },
  ];
</script>

<ul class="list">
  {#each primaryNavItems as item}
    <li class="item">
      <a href={item.href} class="link">{item.label}</a>
    </li>
  {/each}
</ul>

<style>
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

  @media (min-width: 620px) {
    .item {
      width: auto;
    }
  }
</style>
