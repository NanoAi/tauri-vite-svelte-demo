<script lang="ts">
  import { page } from '$app/stores';
  function clearSearch() {
    const lq = document.getElementById('location-query') as HTMLInputElement;
    lq.value = '';
  }
  async function goSearch(x: { code: string }) {
    const lq = document.getElementById('location-query') as HTMLInputElement;
    if (x.code === 'Enter') {
      if (lq.value[0] !== '/') {
        lq.value = '/' + lq.value;
      }
      if ( window.location.pathname !== lq.value ) {
        window.location.href = lq.value;
      }
      lq.value = '';
      lq.blur();
    }
  }
  function callQuery(e: { code: string; }) {
    if ( e.code === "Slash" ) {
      const lq = document.getElementById('location-query') as HTMLInputElement;
      lq.focus();
    }
  }
  const options = [
    {
      title: 'Recieving',
      desc: "Connect with third-party tools that you're already using.",
    },
    {
      title: 'Purchasing',
      desc: "Connect with third-party tools that you're already using.",
    },
    {
      title: 'Planning',
      desc: "Connect with third-party tools that you're already using.",
    },
    {
      title: 'Reporting',
      desc: "Connect with third-party tools that you're already using.",
    },
    {
      title: 'Part Manager',
      desc: "Connect with third-party tools that you're already using.",
    },
    {
      title: 'Blue Prints',
      desc: "Connect with third-party tools that you're already using.",
    },
  ];
</script>

<svelte:body on:keyup={callQuery}></svelte:body>

<nav>
  <div id="menu" class="shadow-sm m-0">
    <div class="flex menu-items float-left">
      <ul class="flex z-10 clearfix">
        <li><a href="./#">File</a></li>
        <li><a href="./#">Edit</a></li>
        <li><a href="./#">View</a></li>
        <li><a href="./#">Terminal</a></li>
      </ul>
    </div>
    <div id="screen-indicator" class="absolute float-right">
      <div class="clearfix">
        <p>SCREEN 1</p>
      </div>
    </div>
    <div class="screen-grid">
      {#each options as option}
        <a href="./#" class="rounded-lg m-2 p-3 block">
          <div class="font-semibold">{option.title}</div>
          <span class="font-light text-sm">{option.desc}</span>
        </a>
      {/each}
    </div>
    <div class="flex flex-grow justify-center">
      <input
        on:blur={clearSearch}
        on:keydown={goSearch}
        type="text"
        name="goPath"
        id="location-query"
        placeholder={$page.url.pathname}
      />
    </div>
  </div>
</nav>
