//Матрица смежности
var matrix = [];
for (var i = 0; i < numberOfNodes; i++){
	matrix[i] = [];
	for (var j = 0; j < numberOfNodes; j++){
		for (var k = 0; k < numberOfEdges; k++){
			if (toStringPath(COORD_X[i], COORD_Y[i], COORD_X[j], COORD_Y[j]) == ways[k]){
				matrix[i][j] = 1;	break;
			}
			else if (toStringPath(COORD_X[j], COORD_Y[j], COORD_X[i], COORD_Y[i]) == ways[k]){
				matrix[i][j] = 1;	break;
			}				
			else {
				matrix[i][j] = 0;
			}			
		}
	}	
}