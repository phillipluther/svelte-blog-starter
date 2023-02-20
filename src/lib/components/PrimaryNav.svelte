<nav class="wrapper">
  <ul class="list">
    <li class="item">
      <a href="/" class="link">Home</a>
    </li>
    <li class="item">
      <a href="/blog" class="link">Blog</a>
    </li>
    <li class="item">
      <a href="/about" class="link">About</a>
    </li>
    <li class="item">
      <a data-sveltekit-reload href="/rss" class="link">RSS Feed</a>
    </li>
  </ul>
</nav>

<style>
  .wrapper {
    width: 100%;
  }

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
