// slider===========================================================
$("#our-pride").owlCarousel({
	loop: true,
	responsiveClass: true,
	nav: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
	items: 1,
	responsive: {
		0: {
			items: 1,
			margin: 0,
		},
		600: {
			items: 2,
			margin: 10,
		},
		991: {
			items: 1,
			margin: 0,
		},
	},
	navText: ["<img src='assets/img/icons/prev.png'>", "<img src='assets/img/icons/next.png'>"],
});
$("#certificates").owlCarousel({
	loop: true,
	responsiveClass: true,
	nav: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3300,
	items: 1,
	navText: ["<img src='assets/img/icons/prev.png'>", "<img src='assets/img/icons/next.png'>"],
});
$("#company-slider").owlCarousel({
	loop: true,
	dots: false,
	responsive: {
		0: {
			nav: false,
			items: 2,
			margin: 20,
		},
		768: {
			items: 4,
			nav: true,
			margin: 25,
		},
		992: {
			items: 5,
			nav: true,
			margin: 40,
		},
	},
	navText: ["<img src='assets/img/icons/prev.png'>", "<img src='assets/img/icons/next.png'>"],
});
