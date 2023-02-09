// { target: img.opacity-50.w-full.fx-pond, buttons: 0, clientX: 721, clientY: 139, layerX: 713, layerY: 131 }
interface IClickEvent extends Event {
  target: Node;
  buttons: number;
  clientX: number;
  clientY: number;
  layerX: number;
  layerY: number;
}

function remToPx(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

const elems = document.querySelectorAll('.fx-pond');
elems.forEach((el) => {
  el.addEventListener('click', (e) => {
    const ce = e as IClickEvent;
    const div = document.createElement('div');
    div.style.left = `${ce.layerX - remToPx(25) / 2}px`;
    div.style.top = `${ce.layerY - remToPx(25) / 2}px`;
    div.classList.add('anim-ripple');
    ce.target.parentElement.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 710);
  });
});

export {};
