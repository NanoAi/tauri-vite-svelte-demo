<script lang="ts">
  import '$lib/app.js';
  import '?/assets/app.pcss';
  import favicon from '?/assets/favicon.svg';
  import MainMenu from '$lib/components/MainMenu.svelte';
  import PageAnimator from '$lib/components/PageAnimator.svelte';
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div id="main">
  <MainMenu />
  <div id="menu-break"></div>
  <div class="page">
    <slot />
  </div>
</div>

<PageAnimator />
