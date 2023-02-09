import '$lib/scripts/loader.js';
import { listen, TauriEvent } from '@tauri-apps/api/event';

// Derefrence stylesheets to fix resizing issues.
let holdTimeout: NodeJS.Timeout;
listen(TauriEvent.WINDOW_RESIZED, () => {
  clearTimeout(holdTimeout);
  holdTimeout = setTimeout(() => {
    document
      .querySelectorAll('link[type="stylesheet"], style[type="text/css"]')
      .forEach((me: HTMLLinkElement | HTMLStyleElement) => {
        const inner = me.innerText;
        me.innerText = inner;
        if (me instanceof HTMLLinkElement) {
          const href = me.href;
          me.href = href;
        }
      });
  }, 300);
});
