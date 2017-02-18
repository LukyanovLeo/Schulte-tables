var EMPLOYEES = 15;	
var neuron = [];
var synapses = [];
var summary = 0;
var threshold;

var learn = document.getElementById('learn');
learn.onclick = function (){
	
	for (var i = 0; i < EMPLOYEES; i++){
		neuron[i] = 1;
		synapses[i] = 0;	
		summary += neuron[i] * synapses[i];
		if (summary == 0){
			synapses[i]++;
		}
	}
	for (var i = 0; i < 5; i++){
		for (var j = 0; j < EMPLOYEES; j++){
			synapses[j] += neuron[j];		
		}		
	}
	threshold = 40;
}
var run = document.getElementById('run');
run.onclick = function (){
	summary = 0;
	for (var i = 0; i < EMPLOYEES; i++){
		neuron[i] = Math.floor(Math.random()*2);
		summary += neuron[i] * synapses[i];
	}
	alert(neuron);
	if (summary >= threshold){
		alert("Бригада справилась с задачей!");
		for (var i = 0; i < EMPLOYEES; i++){
			synapses[i]++;
		}
	}
	else{
		alert("Задача не выполнена.");
		for (var i = 0; i < EMPLOYEES; i++){
			synapses[i]--;
		}
	}
}





























