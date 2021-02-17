$(document).ready(function() {

	let slideText = ["it costs you nothing", "make the world brighter", "it makes people happier",
	 "cause you're free", "cause they love you"];

	var slideInterval = 10000;


	let changeSlide = setInterval(() => nextSlide(), slideInterval);

	function nextSlide() {

		var activeText = $('.header__subtitle');
		var activeDot = $('.header__dot.active-dot');
		var indexActiveDot = $('.header__dot.active-dot').index();
		var nextIndexDot = indexActiveDot + 1;
		var nextDot = $('.header__dot').eq(nextIndexDot);

		var activeImage = $('.header__slider-img').eq(indexActiveDot);
		var nextImage = $('.header__slider-img').eq(nextIndexDot);

		if (indexActiveDot != 4){
			changeSlide();
		}
		else {
			nextIndexDot = 0;
			var nextDot = $('.header__dot').eq(nextIndexDot);
			var nextImage = $('.header__slider-img').eq(nextIndexDot);
			changeSlide();
		}


		function changeSlide() {

			activeText.fadeOut(1000);

			activeImage.removeClass('active-image');
			nextImage.addClass('active-image');

			setTimeout(function () {
			      	activeText.text(slideText[nextIndexDot]);
			   }, 1000);

			activeText.fadeIn(1000);
			activeDot.removeClass('active-dot');
			nextDot.addClass('active-dot');
		}
	}

});