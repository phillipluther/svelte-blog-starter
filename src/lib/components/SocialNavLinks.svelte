<script>
  export const socialNavItems = [
    {
      href: 'https://github.com/phillipluther',
      label: '@phillipluther on GitHub',
    },
    {
      href: 'https://twitter.com/phillipluther',
      label: '@phillipluther on Twitter',
    },
    {
      href: 'https://sfba.social/@pluther',
      label: '@pluther@sfba.social on Mastodon',
    },
  ];
</script>

<ul class="list">
  {#each socialNavItems as item}
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
</style>
