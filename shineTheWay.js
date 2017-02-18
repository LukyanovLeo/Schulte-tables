var previousNodes = [],//массив предыдущих вершин
	currentNodes = [],//массив потомков preCurrentNodes
	matrixOfIndexes = [];
	
function openEveryEmptySlots(hei, len, sel){
	previousNodes[0] = sel;
	var numb = 0, I, J;
	var allVisited = true;
	$('td').eq(sel).addClass('.selected');
	
	for (var i = 0; i < hei; i++){
		matrixOfIndexes[i] = [];
		for (var j = 0; j < len; j++){
			matrixOfIndexes[i][j] = numb;
			if (numb === sel){
				I = i;
				J = j;
			}
			numb++;
		}
	}
	while (allVisited){
		numb = 0;
		for (var i = 0; i < previousNodes.length; i++){
			for (var ii = 0; ii < hei; ii++){
				for (var j = 0; j < len; j++){
					if (matrixOfIndexes[ii][j] === previousNodes[numb]){
						I = ii;
						J = j;
					}
				}
			}
			for (var j = 0; j < 4; j++){
				if ((typeof matrixOfIndexes[I-1][J] === "number") && 
					($('td').eq(matrixOfIndexes[I-1][J]).not('.selected'))){
					$('td').eq(matrixOfIndexes[I-1][J]).addClass('selected');
					if ($('td').eq(matrixOfIndexes[I-1][J]).hasClass('dummy')){
						currentNodes.push(matrixOfIndexes[I-1][J]);
					}
				}
				if ((typeof matrixOfIndexes[I][J+1] === "number") && 
					($('td').eq(matrixOfIndexes[I][J+1]).not('.selected'))){
					$('td').eq(matrixOfIndexes[I][J+1]).addClass('selected');
					if ($('td').eq(matrixOfIndexes[I][J+1]).hasClass('dummy')){
						currentNodes.push(matrixOfIndexes[I][J+1]);
					}
				}
				if ((typeof matrixOfIndexes[I][J-1] === "number") && 
					($('td').eq(matrixOfIndexes[I][J-1]).not('.selected'))){
					$('td').eq(matrixOfIndexes[I][J-1]).addClass('selected');
					if ($('td').eq(matrixOfIndexes[I][J-1]).hasClass('dummy')){
						currentNodes.push(matrixOfIndexes[I][J-1]);
					}
				}
				if ((typeof matrixOfIndexes[I+1][J] === "number") && 
					($('td').eq(matrixOfIndexes[I+1][J]).not('.selected'))){
					$('td').eq(matrixOfIndexes[I+1][J]).addClass('selected');
					if ($('td').eq(matrixOfIndexes[I+1][J]).hasClass('dummy')){
						currentNodes.push(matrixOfIndexes[I+1][J]);
					}
				}				
			}
			if (currentNodes.length === 0){
				allVisited = false;
				break;
			}
			numb++;
		}
		toRewrite(previousNodes, currentNodes);			
	}
	alert("it ends!");
}

function toRewrite(preArr, arr){
	for (var i = 0; i < arr.length; i++){	
		preArr[i] = arr[i];				
		if (preArr.length > arr.length){
			preArr.splice(arr.length, preArr.length);
		}							
	}
	arr.splice(0, arr.length);	
}











