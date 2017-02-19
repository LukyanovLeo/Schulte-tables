$(document).ready(function(){
	var results;
	var notations = [];
	$.ajax({
		type: 'POST',
		url: 'selector.php',
		response: 'text',
		success: function(response){
			//get string of results
			results = response;
			var building = results.split(',');
			//exclude first array element because it contains null value
			results = building.splice(1, building.length);
			//creating notations

			var counter = 0;
			var logins = [];
			var loginsCount = 0;

			for (var i = 0; i < results.length; i++){
				if (results[i] === ''){
					results.splice(i, 1);					
				}
				if (isNaN(results[i])){
					logins[loginsCount] = results[i];
					loginsCount++;
				}				
			}			
			for (var i = 0; i < results.length; i++){
				if (isNaN(results[i])){
					results.splice(i, results.length);
					break;
				}
				notations[i] = ++counter;
			}
			//draw the diagram
			if (logins.length > 0){
				var stats = document.getElementById('stats').getContext('2d');
				var minesweeperStats = {
					labels: logins,
					datasets: [{
						fillColor: "rgba(255, 228, 255, 0.5)",
						strokeColor: "#8B0000",
						pointColor: "#8B0000",
						pointStrokeColor: "#8B0000",
						data: results,
					}]
				}
			}
			else{
				var stats = document.getElementById('stats').getContext('2d');
				var minesweeperStats = {
					labels: notations,
					datasets: [{
						fillColor: "rgba(255, 228, 255, 0.5)",
						strokeColor: "#8B0000",
						pointColor: "#8B0000",
						pointStrokeColor: "#8B0000",
						data: results,
					}]
				}
			}
			new Chart(stats).Line(minesweeperStats);
		}
	});	
})



	

















