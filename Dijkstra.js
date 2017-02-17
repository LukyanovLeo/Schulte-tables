var isVisited = [],
	way = [],
	marks = [],
	vector = [];
	
var startingNode, endingNode, currentNode,
	wayLength = 0,
	minMark, index, isFound = false;

startingNode = prompt("Input starting node", 0);
endingNode = prompt("Input ending node", 3);

for (var i = 0; i < numberOfNodes; i++){
	marks[i] = infinity;
	isVisited[i] = 0;
	way[i] = startingNode;
}
marks[startingNode] = 0;
currentNode = startingNode;
isVisited[currentNode] = 1;

setTimeout(toDrawNodes(), 1000);

while ((!isFullBin(isVisited)) && (!isFound)){
	for (var i = 0; i < numberOfNodes; i++){
		if ((isVisited[i]) && (i == endingNode)){
			isFound = true;
			break;
		}
		if ((matrix[currentNode][i] != 0) && (!isVisited[i])){
			if (marks[i] > (marks[currentNode] + matrix[currentNode][i])){
				marks[i] = marks[currentNode] + matrix[currentNode][i];
				way[i] = currentNode;				
			}
		}
	}
	alert("calculating...");
	
	minMark = infinity;
	if (!isFound){
		for(var i = 0; i < numberOfNodes; i++){
			if ((marks[i] < minMark) && (marks[i] != 0) && (!isVisited[i])){
				minMark = marks[i];
				index = i;
			}
		}
		currentNode = index;
		isVisited[currentNode] = 1;
	}
	setTimeout(toDrawNodes(), 1000);
}
vector.push(currentNode);
while (currentNode != startingNode){
	vector.push(way[currentNode]);
	currentNode = way[currentNode];
}
setTimeout(toDrawNodes(), 1000);
setTimeout(document.write("The way is: " + vector.reverse()), 2000);

















