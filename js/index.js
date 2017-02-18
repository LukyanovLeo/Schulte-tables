	var stacks = '{ "elem0": 0, "elem1": 0}'; //JSON данные для стека и 
	var lines = '{ "elem0": 0, "elem1": 0}';// для очереди
	var stack = JSON.parse(stacks); //переводим JSON в массив объектов 
	var line = JSON.parse(lines);
	//////// для Дракулы
	var width = 685; 
    var height = 520;
	//////////
	var stackEls=0; // количество элементов в стеке
	var lineEls = 0; // количество элементов в очереди
	var check=0; // проверка первого удаления
	var checkLine=0
	var str;
	function stackAddElem(){ // функция добавления элемента в стек
		var g = new Graph();
		g.edgeFactory.template.style.directed = false; 
		var layouter = new Graph.Layout.Spring(g); 
		var renderer = new Graph.Renderer.Raphael('canvasStack', g, width, height); 	
		
		if(stackEls==0){ 
			s=document.getElementById("fors").value; 
			stack['elem'+stackEls] = parseInt(s);
			g.addNode(stack['elem'+stackEls]); 
			layouter.layout();
			renderer.draw();
			s=document.getElementById("fors"); 
			s.value=''; 
			str = JSON.stringify(stack); 
			stackEls++;
	}
		else if(check!=0){  //если происходило удаление элемента
			s=document.getElementById("fors").value; 
			stack['elem'+(stackEls)] = parseInt(s); 
			for(var i=0;i<(stackEls);i++){
				g.addEdge(stack['elem'+i],stack['elem'+(i+1)]); 
			}	
			str = JSON.stringify(stack); 
			layouter.layout();
			renderer.draw();
			s=document.getElementById("fors"); 
			s.value=''; 
			console.log(stack);
			stackEls++;
			check=0;
		}
		else{
			if(stackEls>1){
				s=document.getElementById("fors").value;
				stack['elem'+stackEls] = parseInt(s); 
				for(var ii=0;ii<stackEls;ii++){
					g.addEdge(stack['elem'+ii], stack['elem'+(ii+1)]); 
				}	
				layouter.layout();
				renderer.draw();
				s=document.getElementById("fors"); 
				s.value=''; 
				str = JSON.stringify(stack); 
				stackEls++; 
			} else{
				s=document.getElementById("fors").value;
				stack['elem'+stackEls] = parseInt(s); 
				g.addEdge(stack['elem'+(stackEls-1)], stack['elem'+stackEls]); 
				layouter.layout();
				renderer.draw();
				s=document.getElementById("fors"); 
				s.value=''; 
				str = JSON.stringify(stack); 
				stackEls++;
			}
			console.log(stack);
	
		}
	}
	function stackRemoveElem(){// стек удаление элемента ("первый пришел - последний ушел")
		var g = new Graph();
		g.edgeFactory.template.style.directed = false; 
		var layouter = new Graph.Layout.Spring(g); 
		var renderer = new Graph.Renderer.Raphael('canvasStack', g, width, height); 
		delete stack["elem"+(stackEls-1)]; 
		console.log(stack);
		if(stackEls<=2 &&stackEls!=0){
			g.addNode(stack['elem'+0]);
		}else if(stackEls>2){
			for(var i=0;i<(stackEls-2);i++){
				g.addEdge(stack['elem'+i], stack['elem'+(i+1)]); 
			}	
		} 
		layouter.layout();
	    renderer.draw();
		stackEls--;
		check++;
		str = JSON.stringify(stack); 
	}
	function lineAddElem(){ //то же самое
		var gTwo = new Graph();
		gTwo.edgeFactory.template.style.directed = false; 
		var layouter2line = new Graph.Layout.Spring(gTwo); 
		var renderer2line = new Graph.Renderer.Raphael('canvasLine', gTwo, width, height); 
			
		if(lineEls==0){ 
			s=document.getElementById("forl").value; 
			line['elem'+lineEls] = parseInt(s);
			gTwo.addNode(line['elem'+lineEls]); 
			layouter2line.layout();
			renderer2line.draw();
			s=document.getElementById("forl"); 
			s.value=''; 
			str = JSON.stringify(line); 
			lineEls++;
	}
		else if(checkLine!=0){  //если происходило удаление элемента
			s=document.getElementById("forl").value; 
			for(var i=lineEls;i>=0;i--){
				line["elem"+i] = line["elem"+(i-1)];
			}
			
			line['elem'+0] = parseInt(s); 
			console.log(line);
			for(var i=0;i<(lineEls);i++){
				gTwo.addEdge(line['elem'+i],line['elem'+(i+1)]); 
			}	
			str = JSON.stringify(line); 
			layouter2line.layout();
			renderer2line.draw();
			s=document.getElementById("forl"); 
			s.value=''; 
			console.log(line);
			lineEls++;
			check=0;
		}
		else{
			if(lineEls>1){
				s=document.getElementById("forl").value;
				line['elem'+lineEls] = parseInt(s); 
				for(var ii=0;ii<lineEls;ii++){
					gTwo.addEdge(line['elem'+ii], line['elem'+(ii+1)]); 
				}	
				layouter2line.layout();
				renderer2line.draw();
				s=document.getElementById("forl"); 
				s.value=''; 
				str = JSON.stringify(line); 
				lineEls++; 
			} else{
				s=document.getElementById("forl").value;
				line['elem'+lineEls] = parseInt(s); 
				gTwo.addEdge(line['elem'+(lineEls-1)], line['elem'+lineEls]); 
				layouter2line.layout();
				renderer2line.draw();
				s=document.getElementById("forl"); 
				s.value=''; 
				str = JSON.stringify(line); 
				lineEls++;
			}
			console.log(line);
	
		}
	}
	function lineRemoveElem(){ // то же самое. только принцип "первый пришел - первый ушел"
		var gTwo = new Graph();
		gTwo.edgeFactory.template.style.directed = false; 
		var layouter2line = new Graph.Layout.Spring(gTwo); 
		var renderer2line = new Graph.Renderer.Raphael('canvasLine', gTwo, width, height); 
		for(var i=0;i<lineEls;i++){
			line["elem"+(i-1)] = line["elem"+(i)];
		}
		delete line["elem"+lineEls];
		console.log(line);
		lineEls--;
		if(lineEls==1){
			gTwo.addNode(line['elem'+0]);
		}else if(lineEls>1){
			for(var i=0;i<(lineEls-1);i++){
				gTwo.addEdge(line['elem'+i],line['elem'+(i+1)]); 
			}	
		}
		layouter2line.layout();
	    renderer2line.draw();		
		str = JSON.stringify(line);
	}	