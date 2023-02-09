import { invoke } from '@tauri-apps/api';

const scripts = [
  { src: "../scripts/pond-effect.ts", once: false }
];

const loadScripts = async () => {
  const limit = scripts.length;
  const script = scripts.pop();
  for (let i = 0; i < limit; i++) {
    await import(script.src);
    console.log(`Script Loaded: ${script.src}.`);
    if ( !script.once ) {
      scripts.push(script);
    }
  }
}

const contentLoader = () => {
  const init = document.querySelectorAll('.init');

  if (document.readyState !== 'complete') {
    setTimeout(() => {
      contentLoader();
    }, 1);
    return;
  }

  if (init) {
    init.forEach((el) => {
      el.remove();
    });
  }

  loadScripts();

  if (!window.wasInit) {
    invoke('window_ready');
    window.wasInit = true;
  }
};

contentLoader();

export {};
