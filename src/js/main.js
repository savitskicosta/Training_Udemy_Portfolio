const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');

function toggleMenu() {
	menu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
