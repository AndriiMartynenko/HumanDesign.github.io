/* beautify ignore:start */
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


window.addEventListener("load", function () {
	if (document.querySelector('.wrapper')) {
		setTimeout(function () {
			document.querySelector('.wrapper').classList.add('_loaded');
		}, 0);
	}
});

let unlock = true;
//=================


/* Бургер меню */
let iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {
	let delay = 500;
	iconMenu.addEventListener("click", function (e) {
		const wrapper = document.querySelector('.wrapper');
		const menuBody = document.querySelector(".menu__body");
		const headerMenu = document.querySelector(".header__menu");

		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
			wrapper.classList.toggle('_blackout')
			headerMenu.classList.toggle('_active')

		}
	});
};
/* Бургер меню */

/*  Закрытие меню на нажание вне области меню */
$(document).on('mouseup', function (e) {
	const iconMenu = $(".icon-menu");
	const wrapper = $('.wrapper');
	const container = $(".header__menu");
	const menuBody = $(".menu__body");

	if (container.has(e.target).length === 0) {
		container.removeClass('_active')
		if (iconMenu.hasClass('_active')) {
			iconMenu.removeClass('_active')
		}
		if (menuBody.hasClass('_active')) {
			menuBody.removeClass('_active')
		}
		if (wrapper.hasClass('_blackout')) {
			wrapper.removeClass('_blackout')
		}
		if ($('body').hasClass('_lock')) {
			$('body').removeClass('_lock')
		}

	}
});
/*  Закрытие меню на нажание вне области меню */
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock() {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove();
	} else {
		body_lock_add();
	}
}

function body_lock_remove() {
	let body = document.querySelector("body");
	body.classList.remove("_lock");
}

function body_lock_add() {
	let body = document.querySelector("body");
	body.classList.add("_lock");
}

/* OWL слайдер секции offer */
const owlCarouselOffer = $(".owl-carousel-offer")
owlCarouselOffer.owlCarousel({
	dots: true,
	dotsEach: true,
	responsiveClass: true,
	nav: true,
	navText: ["", ""],
	responsive: {
		320: {
			items: 1,
		},
		576: {
			items: 1,
		},
		768: {
			items: 2,
			nav: false
		},
		992: {
			items: 3,
			nav: false


		},
		1250: {
			items: 4,
			nav: false

		}
	}
})
/* OWL слайдер секции offer */

/* OWL слайдер секции training */
const owlCarouselTraining = $('.owl-carousel-training')
$(window).on('load resize', function () {
	if ($(window).width() > 991) {
		owlCarouselTraining.trigger('destroy.owl.carousel');
		owlCarouselTraining.removeClass('owl-carousel owl-theme')
	} else {
		owlCarouselTraining.addClass('owl-carousel owl-theme')
		owlCarouselTraining.owlCarousel({
			nav: true,
			navText: ["", ""],
			margin: 25,
			dots: true,
			responsiveClass: true,
			responsive: {
				320: {
					items: 1,
				},
				576: {
					items: 2,
				}
			}
		})
	}
})
/* OWL слайдер секции training */

/* Функция добавления класса к массиву из входящих в функцию элементов */
const openItem = (items, className) => {
	items.forEach(item => {
		item.classList.add(className)
	})
};
/* Функция добавления класса к массиву из входящих в функцию элементов */

/* Функция удаления класса к массиву из входящих в функцию элементов */
const closeItem = (items, className) => {
	items.forEach(item => {
		item.classList.remove(className)
	})
};
/* Функция удаления класса к массиву из входящих в функцию элементов */

/* Табы */
const tabsScroll = document.querySelector('.tabs__scroll');
const tabs = document.querySelectorAll('.tab')
tabs.forEach(tab =>
	tab.addEventListener('click', (e) => {
		e.preventDefault();
		closeItem(tabs, 'after-none')

		// Плавная прокрутка
		tabsScroll.style.height = tab.offsetHeight + 'px'
		tabsScroll.style.top = tab.offsetTop + 'px'
		// Плавная прокрутка


		const id = e.target.getAttribute('href').replace('#', '')

		document.querySelectorAll('.tab').forEach(
			child => child.classList.remove('tab__active')
		)
		document.querySelectorAll('.content').forEach(
			child => child.classList.remove('content__active')
		)

		tab.classList.add('tab__active')
		document.getElementById(id).classList.add('content__active')

		if (tab.previousElementSibling) {
			closeItem(tabs, 'after-none')
			tab.previousElementSibling.classList.add('after-none')
		}
	})
)
document.querySelector('.tab').click()
/* Табы */

/* Плавная прокрутка на разные экраны */
window.addEventListener('resize', () => {
	tabs.forEach(tab => {
		tabsScroll.style.height = tab.offsetHeight + 'px'
		tabsScroll.style.top = tab.offsetTop + 'px'
		document.querySelector('.tab').click()

	})
})
/* Плавная прокрутка на разные экраны */


/* Breadcrumb */
const menuLink = document.querySelectorAll('.menu__link')
const menuSubList = document.querySelectorAll('.menu__sub-list')
const menuList = document.querySelectorAll('.menu__list>li')
const breadcrumb = document.querySelector('.menu__breadcrumb')
const breadcrumbLink = document.querySelector('.menu__breadcrumb-link')
menuLink.forEach(item => {
	item.addEventListener('click', () => {
		openItem(menuLink, 'menu__link-close')
		openItem(menuList, 'border-none')
		breadcrumb.classList.add('_active')
		if (item.nextElementSibling) {
			item.nextElementSibling.classList.add('_active')
		}
	})
})

breadcrumbLink.addEventListener('click', () => {
	closeItem(menuLink, 'menu__link-close');
	closeItem(menuList, 'border-none')
	closeItem(menuSubList, '_active')
	breadcrumb.classList.remove('_active')
})
/* Breadcrumb */

/* Реализация переворота карточек для секции training */

const moreButtons = document.querySelectorAll('button[data-more]')
const boxItems = document.querySelectorAll('.box-items')
boxItems.forEach(
	item => {
		const childrenFront = item.querySelector('.box__item-front');
		const childrenBack = item.querySelector('.box__item-back');
		const closeButton = item.querySelector('.box__item-close')
		const button = item.querySelector('button[data-more]');
		button.addEventListener('click', () => {
			childrenFront.classList.add('rotate-front');
			childrenBack.classList.add('rotate-back');
		});
		closeButton.addEventListener('click', () => {
			childrenFront.classList.remove('rotate-front');
			childrenBack.classList.remove('rotate-back');
		})
	}
)
/* Реализация переворота карточек для секции training */

/* Реализация переноса элемента кнопки на разных экранах */
const deshiftParent = $('.deshift__parent')
const deshiftNewButton = $('.deshift__button-new')
$(window).on('load resize', function () {
	if ($(window).width() <= 991) {
		if (deshiftParent) {
			const deshiftBtn = deshiftParent.children('.deshift__button').detach()
			deshiftNewButton.append(deshiftBtn);
		}
	} else {
		const deshiftBtn = deshiftNewButton.children('.deshift__button').detach()
		deshiftParent.append(deshiftBtn)
	}
})
/* Реализация переноса элемента кнопки на разных экранах */

/* beautify ignore:end */