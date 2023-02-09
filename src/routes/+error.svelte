<script lang="ts">
  import { invalidateAll } from '$app/navigation';
  import { page } from '$app/stores';
  const linkStyle =
    'border-solid border-red-500 border-2 p-4 text-3xl text-red-500 \
     hover:border-red-900 hover:text-red-900';
  function go() {
    invalidateAll().then(() => {
      window.location.href = '/';
    });
  }
  function onKeyUp(e: KeyboardEvent) {
    if (e.code == 'Enter') {
      go();
    }
  }
</script>

<svelte:body on:keyup={onKeyUp} />

<div id="error">
  <h1>Oops... something went wrong!</h1>
  <hr class="m-4" />
  <div class="opacity-25 float-right">
    {$page.status} - {$page.error.message}
  </div>
  <br />
  <div class="flex flex-shrink w-full items-center justify-center">
    <a href="/" class={linkStyle} on:click={go}>Reset</a>
  </div>
</div>
