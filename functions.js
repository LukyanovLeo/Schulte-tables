Raphael.el.green = function () {
    this.attr({
		fill: "white",
		stroke: "green"
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













	