<script lang="ts">
  import '../../assets/app.pcss';
  import { beforeNavigate, goto } from '$app/navigation';

  let haltNav = true;

  beforeNavigate((navi) => {
    if (haltNav && navi.to) {
      navi.cancel();
      haltNav = false;
      document.body.classList.add('transit', 'out');
      setTimeout(async () => {
        document.body.classList.remove('transit', 'out');
        await goto(navi.to.url);
        document.body.classList.add('transit', 'in');
        setTimeout(() => {
          haltNav = true;
          document.body.classList.remove('transit', 'in');
        }, 110);
      }, 110);
    }
  });
</script>
