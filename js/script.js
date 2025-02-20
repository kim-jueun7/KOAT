// const gnb_swiper = new Swiper("#gnb",{
// 	wrapperClass:"menu",
// 	slideClass:"btn",
// 	slidesPerView:"auto", //버튼의 갯수만큼 설정
// });

const main_swiper = new Swiper("main", {
	wrapperClass: "container",
	slideClass: "area",
	direction: "vertical",
	speed: 800,
	mousewheel: {
		enabled: true,
	},
	// thumbs:{
	// 	swiper:gnb_swiper,
	// 	slideThumbActiveClass:"active",
	// },
	pagination: {
		el: ".pager",
		bulletActiveClass: 'active',
		clickable: true,
	},
	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
		disabledClass: 'hidden',
	},
});


var main_visual = new Swiper(".main_visual", {
	wrapperClass: "visual",
	slideClass: "visual_img",
	effect: "fade",
	speed:800,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


var main_slidCard_imgs = new Swiper(".slidCard_imgs .cards_i", {
	wrapperClass: "Card_imgs",
	slideClass: "Card_img",
	speed:400,
	pagination: {
        el: ".pages",
        type: "fraction",
	},
	navigation: {
        nextEl: ".cards_next",
        prevEl: ".cards_prev",
	},
});

// 검색 섹션
var search_icon = document.querySelector("#search_icon");
var search_input = document.querySelector("#search_input");
search_icon.addEventListener("click", function(){
	search_input.classList.add("active");
});