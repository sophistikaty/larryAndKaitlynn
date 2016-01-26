
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

  	let showItem = function(event){

  		console.log('event.target.dataset.link is ',event.target.dataset.link);
  		if (event.target.dataset.link != 'travelBtns'){
  			
	  		let travelItems = document.querySelectorAll('.travelItem');
	  		for ( let i = 0 ; i < travelItems.length ; i++ ){ 

	  			travelItems[i].style.display = 'none';
	  		}

	  		let showTravelItem = document.querySelector('#'+event.target.dataset.link);
	  		showTravelItem.style.display = "block";
  		}

  	}

  	document.querySelector('#austin').style.display = 'block';
  	document.querySelector("#travelBtns").addEventListener('click', showItem);

});