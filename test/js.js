//Матрица смежности
var rows = 8, cols = 8;
var matrix = [];
for (var i = 0; i < rows; i++){
	matrix[i] = [];
	for (var j = 0; j < cols; j++){
		for (var k = 0; k < 11; k++){
			if (toStringPath(COORD_X[i], COORD_Y[i], COORD_X[j], COORD_Y[j]) != ways[k])
				matrix[i][j] = 0;
			else 
				matrix[i][j] = 1;
		}
		matrix[i][cols] = '\n';
	}	
}
alert(matrix);
