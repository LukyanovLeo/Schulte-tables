function calculateMines(hei, len){
var numb = 0;
  for (var i = 0; i < hei; i++){
    for (var j = 0; j < len; j++){
		if ($('td').eq(numb).hasClass('mined')){
		  if ((i > 0) && (i < (hei-1))){
			if ((j > 0) && (j < (len-1))){
			  matrix[i-1][j-1]++;
			  matrix[i-1][j]++;
			  matrix[i-1][j+1]++;
			
			  matrix[i][j-1]++;
			  matrix[i][j+1]++;
		  
			  matrix[i+1][j-1]++;
			  matrix[i+1][j]++;
			  matrix[i+1][j+1]++;
			}
			if (j === 0){	  
			  matrix[i-1][j]++;
			  matrix[i-1][j+1]++;
			  matrix[i][j+1]++;

			  matrix[i+1][j]++;
			  matrix[i+1][j+1]++;
			}
			if (j === (len-1)){
			  matrix[i-1][j-1]++;
			  matrix[i-1][j]++;
			
			  matrix[i][j-1]++;
		  
			  matrix[i+1][j-1]++;
			  matrix[i+1][j]++;
			}
		  }
		  if (i === 0){
			if ((j > 0) && (j < (len-1))){
			  matrix[i][j-1]++;
			  matrix[i][j+1]++;
		  
			  matrix[i+1][j-1]++;
			  matrix[i+1][j]++;
			  matrix[i+1][j+1]++;
			}
			if (j === 0){
			  matrix[i][j+1]++;
			  
			  matrix[i+1][j]++;
			  matrix[i+1][j+1]++;
			}
			if (j === (len-1)){
			  matrix[i][j-1]++;
		  
			  matrix[i+1][j-1]++;
			  matrix[i+1][j]++;
			}
		  }
		  if (i === (hei-1)){
			if ((j > 0) && (j < (len-1))){
			  matrix[i-1][j-1]++;
			  matrix[i-1][j]++;
			  matrix[i-1][j+1]++;
			
			  matrix[i][j-1]++;
			  matrix[i][j+1]++;
			}
			if (j === 0){
			  matrix[i-1][j]++;
			  matrix[i-1][j+1]++;
			
			  matrix[i][j+1]++;
			}
			if (j === (len-1)){
			  matrix[i-1][j-1]++;
			  matrix[i-1][j]++;
			
			  matrix[i][j-1]++;
			}
		  }
		}
		numb++;
    }
  }
  numb = 0;
  for (var i = 0; i < hei; i++){
    for (var j = 0; j < len; j++){
	  if (matrix[i][j] != 0){
	    $('td').eq(numb).val(matrix[i][j]).css({color: 'white'});
		if (!$('td').eq(numb).hasClass('mined')){
		   $('td').eq(numb).text(matrix[i][j]).addClass('somemines');
		}
	  }
      numb++;
	}
  }
}




