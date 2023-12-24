const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');
const link = document.querySelector('.menu__link');
const pageUpElement = document.querySelector('.pageup');

//-- function
// menu
function toggleMenu() {
	menu.classList.toggle('active');
}
// UP page
function pageUp() {
	if (window.scrollY > 300) {
		pageUpElement.style.display = 'block';
	} else {
		pageUpElement.style.display = 'none';
	}
}

//-- launch
hamburger.addEventListener('click', toggleMenu);
close.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
link.addEventListener('click', toggleMenu);
window.onscroll = pageUp;
