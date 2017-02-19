function createRandomArray(lim){
	var randArray = [];
	for (var i = 0; i < lim; i++){
		randArray[i] = i+1;
	}
	//shaking table values in random manner
	for (var i = 0; i < lim*10; i++){
		var randNumber1 = Math.floor(Math.random() * lim);
		var randNumber2 = Math.floor(Math.random() * lim);
		var temp = randArray[randNumber1];
		randArray[randNumber1] = randArray[randNumber2];
		randArray[randNumber2] = temp;
	}
	return randArray;
}

var isEnded = false;

$(document).ready(function(){
	
	var coloredBackground = [];
	var coloredText = [];
	
	switch(difficult){
		case 0: for (var i = 0; i < identifier; i++){
					$('#field').append('<tr></tr>');
					for (var j = 0; j < identifier; j++){
						$('tr').eq(i).append('<td></td>');
					}
				}
				$('#field').css({'border-collapse': 'collapse'});
				$('td').css({border: '1px solid black', height: '29px', width: '29px', 
						 'cursor': 'pointer', "background-color": "white"});
						 
				var numberOfFields = $('td').length;
				var randomArray = [];
	
				randomArray = createRandomArray(identifier * identifier);
				for (var i = 0; i < numberOfFields; i++){
					$('td').eq(i).text(randomArray[i]).attr("value", randomArray[i]);
				}
				break;
				
		case 1: for (var i = 0; i < identifier; i++){
					$('#field').append('<tr></tr>');
					for (var j = 0; j < identifier; j++){
						var is = Math.floor(Math.random() * 2);			
						coloredText.push(is);
						$('tr').eq(i).append('<td></td>');
					}
				}
				$('#field').css({'border-collapse': 'collapse'});
				$('td').css({border: '1px solid black', height: '29px', width: '29px', 
						 'cursor': 'pointer', "background-color": "white"})
				var numberOfFields = $('td').length;
				var randomArray = [];
	
				randomArray = createRandomArray(identifier * identifier);
				for (var i = 0; i < numberOfFields; i++){
					$('td').eq(i).text(randomArray[i]).attr("value", randomArray[i]);
					if (coloredText[i] === 1){
						$('td').eq(i).css("color", "red");
					}
				}
				break;
		case 2: for (var i = 0; i < identifier; i++){
					$('#field').append('<tr></tr>');
					for (var j = 0; j < identifier; j++){
						var is = Math.floor(Math.random() * 2);			
						coloredBackground.push(is);
						is = Math.floor(Math.random() * 2);			
						coloredText.push(is);
						$('tr').eq(i).append('<td></td>');
					}
				}
				$('#field').css({'border-collapse': 'collapse'});
				$('td').css({border: '1px solid black', height: '29px', width: '29px', 
						 'cursor': 'pointer', "background-color": "white"})
				var numberOfFields = $('td').length;
				var randomArray = [];
				
				randomArray = createRandomArray(identifier * identifier);
				for (var i = 0; i < numberOfFields; i++){
					$('td').eq(i).text(randomArray[i]).attr("value", randomArray[i]);
					if (coloredBackground[i] === 1){
						$('td').eq(i).css('background-color', "#FFDAB9");
					}
					if (coloredText[i] === 1){
						$('td').eq(i).css("color", "red");
					}
				}
				break;
		case 3: for (var i = 0; i < identifier; i++){
					$('#field').append('<tr></tr>');
					for (var j = 0; j < identifier; j++){
						var is = Math.floor(Math.random() * 3);			
						coloredBackground.push(is);
						is = Math.floor(Math.random() * 3);			
						coloredText.push(is);
						$('tr').eq(i).append('<td></td>');
					}
				}
				$('#field').css({'border-collapse': 'collapse'});
				$('td').css({border: '1px solid black', height: '29px', width: '29px', 
						 'cursor': 'pointer', "background-color": "white"})
				var numberOfFields = $('td').length;
				var randomArray = [];
				
				randomArray = createRandomArray(identifier * identifier);
				for (var i = 0; i < numberOfFields; i++){
					$('td').eq(i).text(randomArray[i]).attr("value", randomArray[i]);
					if (coloredBackground[i] === 1){
						$('td').eq(i).css('background-color', "#FFDAB9");
					}
					if (coloredBackground[i] === 2){
						$('td').eq(i).css('background-color', "#C0C0C0");
					}
					if (coloredText[i] === 1){
						$('td').eq(i).css("color", "red");
					}
					if (coloredText[i] === 2){
						$('td').eq(i).css("color", "blue");
					}
				}
				break;
	}
	$('td').attr('unselectable','on').css('MozUserSelect','none');
	var currentNumber = 1;
	var start = new Date();
	$('#tryagain').text(" ");
	$('td').click(function(){
		if ($(this).attr("value") == currentNumber){
			currentNumber++;	
			$('#tryagain').text("Now you should find " + currentNumber);
			if (currentNumber === numberOfFields+1){			
				var end = new Date();
				var myResult = Math.floor((end - start)*0.001);
				var isEnded = true;
				$('#again').text("Congradulations! Your result: " + myResult + " seconds Would you like to save it?");
				$('#tryagain').text("");
				$('#yes').text("Yes!").css({cursor: 'pointer'});
				$('#no').text("No.").css({cursor: 'pointer'});
				$('#yes').on('click', function(){
					$.ajax({
						type: 'POST',
						url: 'save.php',
						data: {
							secs: myResult,
							detect: identifier
						},
						success: function(data){
							$('#tryagain').text("Your result is successfully saved.");		
							$('#again').text("");
							$('#yes').text("");
							$('#no').text("");
							$('#andagain').text("Play again?");
						}
					});	
				})
				}
			}
		
	})
})






