$(document).ready(function(){
	var usr = "";
	$.ajax({
		type: 'POST',
		url: 'who.php',
		data: {
			name: usr
		},
		success: function(data){
			usr = data;
			$('#user').text("You've entered as: " + usr);
		}
	});
})