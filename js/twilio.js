
$(function(){
	console.log('In Twilio Function');

	var $phoneNumber = $('#phoneNumber');
	console.log($phoneNumber);
	// var pattern = /^[0-9]{10}$/;
	// if (!pattern.test($phoneNumber)){
	// 	alert("Please type in your number using only numbers; no hyphens, spaces, or slashes.")
	// }
	// else{

		$('#initiateCall').on('click', function(){
			var number = {
				data: {
					phoneNumber: "+1"+$phoneNumber.val()
				},
				options: {
					hostname: 'https://gckwbgo7j7.execute-api.us-east-1.amazonaws.com/prod/makeCall',
					port: 443,
					path: '/',
					method: 'POST'
				}
			}
			console.log(number);

			$.ajax({
				type: 'POST',
				url: 'https://gckwbgo7j7.execute-api.us-east-1.amazonaws.com/prod/initiateCall',
				data: number,
				success: function(newNumber){
					console.log('Call to initiateCall succeeded');
				},
				error: function(){
					console.log('Error calling initiateCall');
				}
			});
		});
	}
	

});