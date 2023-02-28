const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	simulateTouch: false,
	slidesPerView: 'auto',
	spaceBetween: 30
});

// Получить элемент input
const input = document.querySelector('.email-form__input');

// Скрыть placeholder при фокусировке на input
input.addEventListener('focus', () => {
	input.setAttribute('placeholder', '');
});

// Вернуть placeholder при потере фокуса на input
input.addEventListener('blur', () => {
	input.setAttribute('placeholder', 'Enter email...');
});
const dropdownLinks = document.querySelectorAll('.menu-dropdown');
const dropdownNav = document.querySelector('.dropdown-nav');

// Проходимо по всім знайденим елементам та додаємо обробник події 'click'
dropdownLinks.forEach(link => {
	let isDropdownVisible = false;

	link.addEventListener('click', (event) => {
		if (!isDropdownVisible) {
			dropdownNav.style.display = 'block';
			isDropdownVisible = true;
		} else {
			dropdownNav.style.display = 'none';
			isDropdownVisible = false;
		}
		// Виконуємо дійсно перехід за посиланням
		event.preventDefault();
	});
});
const burger = document.querySelector('.header-burger');

// отримуємо елемент з класом "menu"
const menu = document.querySelector('.menu');

// створюємо функцію-обробник події кліку на елементі з класом "burger"
function toggleMenu() {
	// додаємо або видаляємо клас "open" з елемента з класом "menu"
	menu.classList.toggle('open');
}

// додаємо обробник події кліку на елемент з класом "burger"
burger.addEventListener('click', toggleMenu);