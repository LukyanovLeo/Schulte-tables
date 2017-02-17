Raphael.el.green = function () {
    this.attr({
		fill: "white",
		stroke: "green"
	});
};
Raphael.el.red = function () {
    this.attr({
		fill: "white",
		stroke: "red"
	});
};

function toStringPath(a, b, c, d){
	var str = "M" + a + "," + b + "L" + c + "," + d;
	return str;
}
function isEmpty(arr){
for (var i = 0; i < arr.length; i++){
	if(arr[i] != undefined){
		return false;
	}
}
return true;
}

function toRewrite(preArr, arr){
	for (var i = 0; i < arr.length; i++){	
		preArr[i] = arr[i];				
		if (preArr.length > arr.length){
			preArr.splice(arr.length, preArr.length);
		}							
	}
	currentNodes.splice(0, currentNodes.length);	
}
function isFullBin(arr){
	for (var i = 0; i < arr.length; i++){
		if(arr[i] == 1){
			continue;
		}
		else {
			return false;
		}
	}
	return true;
}
var paper = Raphael(100, 200, 1000, 1000);
function toDrawNodes(){
	paper.clear();
	paper.setStart();
	for (var i = 0; i < numberOfPaths; i++){
			paper.path(ways[i]).green();
		}
		for (var i = 0; i < numberOfNodes; i++){
			paper.circle(COORD_X[i], COORD_Y[i], CIRCLE_RADIUS).green();
			paper.text(COORD_X[i], COORD_Y[i], VALUE[i]).green();
		}	
		for (var i = 0; i < numberOfPaths; i++){
			switch(i){
				case 0: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]);
						paper.text(COORD_X[i], COORD_Y[i]-25, marks[i]).red();break;
				case 1: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]); 
						paper.text(COORD_X[i]-20, COORD_Y[i]-20, marks[i]).red();break;
				case 2: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]);
						paper.text(COORD_X[i], COORD_Y[i]-25, marks[i]).red();break;
				case 3: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]); 
						paper.text(COORD_X[i]+25, COORD_Y[i], marks[i]).red();break;
				case 4: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]); 
						paper.text(COORD_X[i], COORD_Y[i]+25, marks[i]).red();break;
				case 5: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]); 
						paper.text(COORD_X[i]+20, COORD_Y[i]+20, marks[i]).red();break;
				case 6: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]);
						paper.text(COORD_X[i], COORD_Y[i]-25, marks[i]).red();break;
				case 7: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]); 
						paper.text(COORD_X[i]+25, COORD_Y[i], marks[i]).red();break;
				case 8: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]); break;
						
				case 9: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]); break;
						
				case 10: paper.text(COORD_EDGE_X[i], COORD_EDGE_Y[i], WEIGHT_OF_EDGE[i]); break;
						
			}
		}
	var st = paper.setFinish();
}












	