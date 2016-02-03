
$(document).ready(function(){

	'use strict';

  	console.log('ready');
	
	var headerLinkNav = function(event){

		console.log('event.target.dataset.hash is ',event.target.dataset.hash);
		if (event.target.dataset.hash != undefined){
			
			location.hash = "#"+event.target.dataset.hash;
		}

	}

  	document.querySelector("#topNav").addEventListener('click', headerLinkNav);

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

  	var showItem = function(event){

  		console.log('event.target.dataset.link is ',event.target.dataset.link);
  		if (event.target.dataset.link != 'travelBtns'){

	  		var travelItems = document.querySelectorAll('.travelItem');
	  		for ( var i = 0 ; i < travelItems.length ; i++ ){ 

	  			travelItems[i].style.display = 'none';
	  		}

	  		var showTravelItem = document.querySelector('#'+event.target.dataset.link);
	  		showTravelItem.style.display = "block";
  		}

  	}

  	document.querySelector('#austin').style.display = 'block';
  	document.querySelector("#travelBtns").addEventListener('click', showItem);
  	// document.querySelector("#rsvpBtns").addEventListener('click', showItem);

  	var initiateCall = function(event){
  		console.log('event.target.id is ',event.target.id);
  		var phoneNumber = document.querySelector('#phoneNumber').value;
  		console.log(phoneNumber);
  		var pattern = /^[0-9]{10}$/;
  		if (! pattern.test(phoneNumber)){
  			alert('Please type in your number without spaces, hyphens, or slashes.');
  		}else{
  			var dataObj = {
				data: {
					phoneNumber: "+1"+phoneNumber
				},
				options: {
					hostname: 'gckwbgo7j7.execute-api.us-east-1.amazonaws.com',
					path: '/prod/makeCall',
					port: '443',
					method: 'POST'
				}
			};
			
			console.log(dataObj);

			$.ajax({
				type: 'POST',
				url: 'https://gckwbgo7j7.execute-api.us-east-1.amazonaws.com/prod/initiateCall',
				data: JSON.stringify(dataObj),
				success: function(newNumber){
					console.log('Call to initiateText succeeded');
					document.querySelector('#phoneNumber').value = "";
				},
				error: function(j, s, e){
					console.log('Error calling initiateText');
					console.log(j,s,e);
					document.querySelector('#phoneNumber').value = "";
				}
			});
  		}

		
	}
  	
  	document.querySelector("#initiateCall").addEventListener('click', initiateCall);

  	var initiateText = function(event){
  		console.log('event.target.id is ',event.target.id);
  		var phoneNumber = document.querySelector('#textPhoneNumber').value;
  		console.log(phoneNumber);
  		var pattern = /^[0-9]{10}$/;
  		if (! pattern.test(phoneNumber)){
  			alert('Please type in your number without spaces, hyphens, or slashes.');
  		}else{
  			var dataObj = {
				data: {
					phoneNumber: "+1"+phoneNumber
				},
				options: {
					hostname: 'gckwbgo7j7.execute-api.us-east-1.amazonaws.com',
					path: '/prod/makeSms',
					port: '443',
					method: 'POST'
				}
			};
			
			console.log(dataObj);

			$.ajax({
				type: 'POST',
				url: 'https://gckwbgo7j7.execute-api.us-east-1.amazonaws.com/prod/initiateCall',
				data: JSON.stringify(dataObj),
				success: function(newNumber){
					console.log('Call to initiateText succeeded');
					document.querySelector('#textPhoneNumber').value = "";
				},
				error: function(j, s, e){
					console.log('Error calling initiateText');
					console.log(j,s,e);
					document.querySelector('#textPhoneNumber').value = "";
				}
			});
  		}

		
	}
	document.querySelector("#initiateText").addEventListener('click', initiateText);
});