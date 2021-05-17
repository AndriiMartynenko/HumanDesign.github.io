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
	// const wrapper = document.querySelector('.wrapper')
	// const scrollWidth = window.innerWidth - document.documentElement.clientWidth
	// wrapper.style.paddingRight = scrollWidth + 'px'
	// console.log(wrapper.style.paddingRight);
}

$(".owl-carousel").owlCarousel({
	dots: true,
	items: 4,
	loop: true,
	autoWidth: true,
	autoHeight: true,
	margin: 25,
	dotsEach: true,
})

document.querySelectorAll('.tab').forEach(item =>
	item.addEventListener('click', (e) => {
		e.preventDefault();

		// Плавная прокрутка
		const tabsScroll = document.querySelector('.tabs__scroll');
		tabsScroll.style.height = item.offsetHeight + 'px'
		tabsScroll.style.top = item.offsetTop + 'px'
		// Плавная прокрутка


		const id = e.target.getAttribute('href').replace('#', '')

		document.querySelectorAll('.tab').forEach(
			child => child.classList.remove('tab__active')
		)
		document.querySelectorAll('.content').forEach(
			child => child.classList.remove('content__active')
		)

		item.classList.add('tab__active')
		document.getElementById(id).classList.add('content__active')
	})
)

document.querySelector('.tab').click()

// const breadcrumb = document.querySelector('.menu__breadcrumb')
// const list = document.querySelectorAll('.menu__list>li>a.menu__link')
// const hiddenLink = () => {
// 	list.forEach(item => {
// 		item.classList.add('menu__link-close')
// 	})
// }
// list.forEach(link =>
// 	link.addEventListener('click', (e) => {
// 		const target = e.target
// 		target.preventDefault;
// 		hiddenLink()
// 		breadcrumb.classList.remove('menu__breadcrumb-disable')
// 		target.classList.remove('menu__link-close')
// 		const text = target.textContent
// 		console.log(text);
// 	})
// )

/* beautify ignore:end */