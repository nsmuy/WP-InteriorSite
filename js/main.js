'use strict'

{
  const hamburger =  document.querySelector('.hamburger_menu');
  const mask = document.querySelector('.mask');
  const nav = document.querySelector('.header_nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mask.classList.toggle('hidden');
    nav.classList.toggle('hidden');
  });
}
