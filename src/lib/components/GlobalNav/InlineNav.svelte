<script>
  import PrimaryNavLinks from '$lib/components/PrimaryNavLinks.svelte';
  import SocialNavLinks from '$lib/components/SocialNavLinks.svelte';
</script>

<nav>
  <PrimaryNavLinks />
  <SocialNavLinks />

  <ul>
    <li class="item">
      <a data-sveltekit-reload href="/rss" class="link">RSS Feed</a>
    </li>
  </ul>
</nav>
