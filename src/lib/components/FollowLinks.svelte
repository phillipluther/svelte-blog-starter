<script>
  import GithubIcon from 'svelte-icons/fa/FaGithub.svelte';
  import TwitterIcon from 'svelte-icons/fa/FaTwitter.svelte';
  import MastodonIcon from 'svelte-icons/fa/FaMastodon.svelte';
  import RssIcon from 'svelte-icons/fa/FaRss.svelte';
  import VisuallyHidden from './VisuallyHidden.svelte';

  export const followItems = [
    {
      href: 'https://github.com/phillipluther',
      label: '@phillipluther on GitHub',
      icon: GithubIcon,
    },
    {
      href: 'https://twitter.com/phillipluther',
      label: '@phillipluther on Twitter',
      icon: TwitterIcon,
    },
    {
      href: 'https://sfba.social/@pluther',
      label: '@pluther@sfba.social on Mastodon',
      icon: MastodonIcon,
    },
    {
      href: '/rss',
      label: 'Follow this blog by RSS feed',
      icon: RssIcon,
      props: {
        'data-sveltekit-reload': 'off',
      },
    },
  ];
</script>

<ul class="list">
  {#each followItems as item}
    <li class="item">
      <a href={item.href} class="link" {...item.props}>
        <svelte:component this={item.icon} />
        <VisuallyHidden>
          {item.label}
        </VisuallyHidden>
      </a>
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

  .link {
    display: block;
    padding: 8px;
    width: 48px;
    height: 48px;
  }
</style>
