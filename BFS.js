var previousNodes = [],//массив предыдущих вершин
	currentNodes = [],//массив потомков preCurrentNodes
	isVisited = [],
	way = [],
	numberOfLevels = [];
var is = false, levels = 0;
	
previousNodes[0] = prompt("Input starting node", 0);

var finish = prompt("Input ending node", 5);
	while (finish == previousNodes[0]){
		finish = prompt("Wrong number\nInput ending node");
	}
	for (var i = 0; i < numberOfNodes; i++){
		isVisited[i] = 0;
		numberOfLevels[i] = 0;
	}
	isVisited[previousNodes[0]] = 1;
	
while (!isFullBin(isVisited)){
	//проходим по вершинам
	levels++;
	for (var i = 0; i < previousNodes.length; i++){
		for (var j = 0; j < numberOfNodes; j++){
			if ((matrix[previousNodes[i]][j] == 1) && (!isVisited[j])){
				if (j == finish){	
					way.push(finish);
					is = true;
					numberOfLevels[j] = levels;
					break;
				}
				currentNodes.push(VALUE[j]);
				isVisited[j] = 1;
				numberOfLevels[j] = levels;
			}
		}
		if (is)	break;	//завершаем цикл
	}
	toRewrite(previousNodes, currentNodes);	//записываем в массив предыдущего уровня текущий
	if (is)	break;
}
//восстанавливаем путь от конца до начала
for (var i = levels; i > 0; i--){
	for (var j = 0; j < numberOfNodes; j++){
		if ( (matrix[finish][j] == 1) && (numberOfLevels[j] == (i-1)) && (isVisited[j]) ){
			way.push(j);
			finish = j;
			break;
		}
	} 
}
document.write("Путь от начальной вершины до конечной: " + way.reverse());



























