(function () {
	const burgerItem = document.querySelector ('.burger');
	const menu = document.querySelector ('.header__nav');
	const closeMenu = document.querySelector ('.header__nav-close');
	const menuItem = document.querySelectorAll ('.header__nav-link')
	burgerItem.addEventListener ('click', () => {
		menu.classList.add('header__menu-active');
	});
	closeMenu.addEventListener ('click', () => {
		menu.classList.remove('header__menu-active');
	});
	if (window.innerWidth <= 1000) {
		for (let i = 0; i < menuItem.length; i ++) {
			menuItem[i].addEventListener ('click', () => {
				menu.classList.remove('header__menu-active');
			});
		}
	}
}());