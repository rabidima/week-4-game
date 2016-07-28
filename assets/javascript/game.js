window.onload = reset();

var wins = 0;
var losses = 0;

function reset(){
	price1 = 0;
	price2 = 0;
	price3 = 0;
	price4 = 0;
	total = 0;
	$('#priceDiv').html(total);
	randomNum = Math.floor(Math.random() * 101 + 1) + 19;
	$('#numberDiv').html(randomNum);
	$('.who').html('');
}

if ( randomNum >= total) {

	$('#first').on('click', function() {
		if (price1 == 0) {
			price1 = Math.floor(Math.random() * 11 + 1) + 1;
			total = total + price1;
		} else {
		total = total + price1;
		};
		$('#priceDiv').html(total); 
		checkresults(); 
	});

	$('#second').on('click', function() {
		if (price2 == 0) {
			price2 = Math.floor(Math.random() * 11 + 1) + 1;
			total = total + price2;
		} else {
		total = total + price2;
		};
		$('#priceDiv').html(total);
		checkresults();  
	});	

	$('#third').on('click', function() {
		if (price3 == 0) {
			price3 = Math.floor(Math.random() * 11 + 1) + 1;
			total = total + price3;
		} else {
		total = total + price3;
		};
		$('#priceDiv').html(total); 
		checkresults(); 
	});

	$('#fourth').on('click', function() {
		if (price4 == 0) {
			price4 = Math.floor(Math.random() * 11 + 1)+1;
			total = total + price4;
		} else {
		total = total + price4;
		};
		$('#priceDiv').html(total); 
		checkresults(); 
	});

}	
 
 function checkresults(){

 	if ( randomNum < total ) {
 		losses ++;
 		$('.who').html('You lost !');
 		$('.losses').html('Losses :' + losses);

 		var a = confirm("Lets play one more time !");
 			if ( a == true) {
 				reset();
 			} else {
 				alert('Thank you for playing!');

 			}
 	} 

 	if ( randomNum == total ) {
 		wins ++;
 		$('.who').html('Winner!!!');
 		$('.wins').html('Wins :' + wins);
		var a = confirm("Lets play one more time !");
 			if ( a == true) {
 				reset();
 			} else {
 				alert('Thank you for playing!');
 			} 	
 	}

 	console.log('price1: ' , price1);
	console.log('price2: ' , price2);
	console.log('total: ' , total);
	console.log('randomNum: ' , randomNum);

 }



	
 // } else 	





// console.log('price1: ' , price1);
// 
// var price2 = Math.floor(Math.random() * 10)+1;
// var price3 = Math.floor(Math.random() * 10)+1;
// var price4 = Math.floor(Math.random() * 10)+1;
