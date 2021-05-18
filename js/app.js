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
//Menu

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

$(".owl-carousel").owlCarousel({
	dots: true,
	items: 4,
	autoWidth: true,
	autoHeight: true,
	margin: 25,
	dotsEach: true,
})


const openItem = (items, className) => {
	items.forEach(item => {
		item.classList.add(className)
	})
};
const closeItem = (items, className) => {
	items.forEach(item => {
		item.classList.remove(className)
	})
};


const tabs = document.querySelectorAll('.tab')

tabs.forEach(tab =>
	tab.addEventListener('click', (e) => {
		e.preventDefault();
		closeItem(tabs, 'after-none')

		// Плавная прокрутка
		const tabsScroll = document.querySelector('.tabs__scroll');
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


const boxItems = document.querySelectorAll('.box-items')

boxItems.forEach(
	item => {
		const children = item.children
		item.addEventListener('mouseenter', () => {
			children[0].classList.add('rotate-front', 'flag')
			children[1].classList.add('rotate-back', 'flag')
			boxItems.forEach(parent => {
				const childrens = parent.children;
				if (!childrens[0].classList.contains('flag')) {
					childrens[0].classList.add('reduction')
				}
				if (!childrens[1].classList.contains('flag')) {
					childrens[1].classList.add('reduction-back')
				}
			})
		})
		item.addEventListener('mouseleave', () => {
			children[0].classList.remove('rotate-front', 'flag')
			children[1].classList.remove('rotate-back', 'flag')
			boxItems.forEach(parent => {
				const childrens = parent.children;
				if (!childrens[0].classList.contains('flag')) {
					childrens[0].classList.remove('reduction')
				}
				if (!childrens[1].classList.contains('flag')) {
					childrens[1].classList.remove('reduction-back')
				}
			})
		})
	}
)

/* beautify ignore:end */