//Матрица смежности
var matrix = [];
for (var i = 0; i < numberOfNodes; i++){
	matrix[i] = [];
	for (var j = 0; j < numberOfNodes; j++){
		for (var k = 0; k < numberOfPaths; k++){
			if (toStringPath(COORD_X[i], COORD_Y[i], COORD_X[j], COORD_Y[j]) == ways[k]){
				if ((i == 0) && (j == 1))
					matrix[i][j] = 70;
				//break;
				if ((i == 0) && (j == 2))
					matrix[i][j] = 30;
				//break;
				if ((i == 0) && (j == 4))
					matrix[i][j] = 10;
				//break;
				if ((i == 0) && (j == 6))
					matrix[i][j] = 20;
				//break;
				if ((i == 1) && (j == 3))
					matrix[i][j] = 30;
				//break;
				if ((i == 1) && (j == 4))
					matrix[i][j] = 20;
				//break;
				if ((i == 1) && (j == 5))
					matrix[i][j] = 20;
				//break;
				if ((i == 2) && (j == 5))
					matrix[i][j] = 30;
				//break;
				if ((i == 6) && (j == 3))
					matrix[i][j] = 40;
				//break;
				if ((i == 6) && (j == 5))
					matrix[i][j] = 20;
				//break;
				if ((i == 6) && (j == 7))
					matrix[i][j] = 20;
				//break;	
				if ((i == 4) && (j == 6))
					matrix[i][j] = 10;
				break;
				
				
			}
			else if (toStringPath(COORD_X[j], COORD_Y[j], COORD_X[i], COORD_Y[i]) == ways[k]){
				if ((i == 1) && (j == 0))
					matrix[i][j] = 70;
				//break;
				if ((i == 2) && (j == 0))
					matrix[i][j] = 30;
				//break;
				if ((i == 4) && (j == 0))
					matrix[i][j] = 10;
				//break;
				if ((i == 6) && (j == 0))
					matrix[i][j] = 20;
				//break;
				if ((i == 3) && (j == 1))
					matrix[i][j] = 30;
				//break;
				if ((i == 4) && (j == 1))
					matrix[i][j] = 20;
				//break;
				if ((i == 5) && (j == 2))
					matrix[i][j] = 30;
				//break;
				if ((i == 3) && (j == 6))
					matrix[i][j] = 40;
				//break;
				if ((i == 5) && (j == 6))
					matrix[i][j] = 20;
				//break;
				if ((i == 7) && (j == 6))
					matrix[i][j] = 20;
				//break;
				if ((i == 6) && (j == 4))
					matrix[i][j] = 10;
				//break;
				if ((i == 5) && (j == 1))
					matrix[i][j] = 20;
				break;
			}				
			else {
				matrix[i][j] = 0;
			}			
		}
	}
}