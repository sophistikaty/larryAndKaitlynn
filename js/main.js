
$(document).ready(function(){

	'use strict';

  console.log('ready');

 //  let moreButtons = document.querySelectorAll('button.more');

 //  console.log('moreButtons is ', moreButtons);

	// for ( let b = 0 ; b < moreButtons.length ; b++ ){

	// 	console.log('moreButtons[b] is', moreButtons[b].dataset.section); 

	// 	let currentSection = moreButtons[b].dataset.section; 

	// 	console.log('currentSection is ',currentSection);
	// }

	var slider = document.querySelector('#carousel');
		// previous = document.getElementsByClassName('icon-right-open-big');
		// next = document.getElementsByClassName('icon-left-open-big');

	$('#carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,
	  pauseOnHover: false,
	  infinite: true,
	  centerMode: true,
	  variableWidth: true,
	  speed: 1000,
	  // fade: true,
	  cssEase: "linear",
	  respondTo: slider,
	  prevArrow: "<div class='icon icon-left-open-big slick-prev'></div>",
	  nextArrow: "<div class='icon icon-right-open-big slick-next'></div>",
	  centerMode: true

  	});

  	// infinite: true,
			// 		centerMode: true,
  	// 				variableWidth: true,
			// 	  // slidesToShow: 1,
			// 	  slidesToScroll: 1,
			// 	  autoplay: true,
			// 	  autoplaySpeed: 4000,
			// 	  respondTo: cardSlider.firstChild,
			// 	  prevArrow: "<div class='icon-left-open-big slick-prev'></div>",
			// 	  nextArrow: "<div class='icon-right-open-big slick-next'></div>"

});