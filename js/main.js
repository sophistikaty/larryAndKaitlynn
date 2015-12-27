
$(document).ready(function(){

  // 1. Write a function that loops through numbers 1 - 100;

	 function hundred ()	{
	 	var i;
		for (i=0; i<=100; i++) {
		console.log (i);
		document.write(i + ' ');
		}
	 }

 hundred ();


  //    If the number is divisible by 3, print 'fizz'

   function hundred3fizz ()	{
	 	var k;
		for (k=1; k<=100; k++) {
			if (k%3==0) {
				document.write(k + ' fizz ');
			}	
		}
	 }

 hundred3fizz ();

  //    If the number is divisible by 5, print 'buzz'

    function hundred5buzz ()	{
	 	var l;
		for (l=1; l<=100; l++) {
			if (l%5==0) {
				document.write(l + ' buzz ');
			}	
		}
	 }

 hundred5buzz ();

  //    If the number is divisible by 3 AND 5 print 'fizz buzz';

     function hundred35fizzbuzz ()	{
	 	var m;
		for (m=1; m<=100; m++) {
			if (m%5==0 && m%3==0) {
				document.write(m + ' fizzbuzz ');
			}	
		}
	 }

 hundred35fizzbuzz ();
  //


});