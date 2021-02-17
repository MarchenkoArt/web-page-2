$(document).ready(function() {

	let slideText = ["I love people who make me laugh. I honestly think it’s the thing I like most, to laugh. It cures a multitude of ills. It's probably the most important thing in a person.",
					"Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Maiores consequuntur ad, vitae ipsam asperiores nihil quisquam, alias blanditiis aspernatur.",
					"Blanditiis ipsum adipisicing maiores amet, consectetur adipisicing, sit.  consequuntur ad, aspernatur vitae ipsam asperiores nihil quisquam, alias   recusandae nesciunt.",
					"Adipisicing  consequuntur adipisicing ipsam , quisquam consectetur , ipsam.  consequuntur ad, amet nesciunt ipsum nihil recusandae quisquam, alias  aspernatur."];

	let slideName = ["Audrey Hepburn", "Steven West", "Beatrice Randall","Abigayle Baldwin"];

	var slideInterval = 10000;


	let changeSlide = setInterval(() => nextSlide(), slideInterval);

	function nextSlide() {

		var activeText = $('.third-block__text');
		var activeName = $('.third-block__name');
		var activeDot = $('.third-block__dot');
		var indexActiveDot = $('.third-block__dot.active-dot').index();
		var nextIndexDot = indexActiveDot + 1;
		var nextDot = $('.third-block__dot').eq(nextIndexDot);

		var activeImage = $('.third-block__image').eq(indexActiveDot);
		var nextImage = $('.third-block__image').eq(nextIndexDot);

		if (indexActiveDot != 3){
			changeSlide();
		}
		else {
			nextIndexDot = 0;
			var nextDot = $('.third-block__dot').eq(nextIndexDot);
			var nextImage = $('.third-block__image').eq(nextIndexDot);
			changeSlide();
		}


		function changeSlide() {

			activeText.fadeOut(1000);
			activeName.fadeOut(1000);

			activeImage.removeClass('active-image');
			nextImage.addClass('active-image');

			setTimeout(function () {
			      	activeText.text(slideText[nextIndexDot]);
			      	activeName.text(slideName[nextIndexDot]);
			   }, 1000);

			activeText.fadeIn(1000);
			activeName.fadeIn(1000);

			activeDot.removeClass('active-dot');
			nextDot.addClass('active-dot');
		}
	}

});