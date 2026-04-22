import './style.css'

const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#mobile-menu');

let open = false;

btn.addEventListener('click', () => {
  open = !open;

  if (open) {
    menu.classList.remove('max-h-0', 'opacity-0');
    menu.classList.add('max-h-96', 'opacity-100');
  } else {
    menu.classList.add('max-h-0', 'opacity-0');
    menu.classList.remove('max-h-96', 'opacity-100');
  }
});