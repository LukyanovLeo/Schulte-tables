	var canvas = document.getElementById('canvas');
	var video = document.getElementById('video');
    var context = canvas.getContext('2d');

    video.addEventListener('play', function(){ },false);

		
		function scifi(){ 
			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(video, 0, 0, canvas.width, canvas.height);
			var frame = context.getImageData(0, 0, canvas.width, canvas.height);
			for (var i = 0; i < frame.data.length; i += 4)
			{
				frame.data[i] = 255 - frame.data[i];
				frame.data[i+1] = 255 - frame.data[i+1];
				frame.data[i+2] = 255 - frame.data[i+2];
				frame.data[i+3] = 255;
			}
			context.putImageData(frame, 0, 0);
			if (video.paused || video.ended) {
				return;
			}
			setTimeout(function(){ scifi(); }, 0);
		}
		function sepia(){ 
			context.drawImage(video, 0, 0, canvas.width, canvas.height);
			var frame = context.getImageData(0, 0, canvas.width, canvas.height);
			var scale = 0;
			for (var i = 0;i < frame.data.length; i += 4)
			{
				scale = (frame.data[i] + frame.data[i+1] + frame.data[i+2]) / 3;
				frame.data[i] = scale;
				frame.data[i+1] = scale * 0.71;
				frame.data[i+2] = scale * 0.41;
				frame.data[i+3] = 255;
			}
			context.putImageData(frame, 0, 0);
			if (video.paused || video.ended) {
				return;
			}
			setTimeout(function(){ sepia(); }, 0);
		}
		function noir(){ 
			context.drawImage(video, 0, 0, canvas.width, canvas.height);
			var frame = context.getImageData(0, 0, canvas.width, canvas.height);
			var scale = 0;
			for (var i = 0; i < frame.data.length; i += 4)
			{
				scale = (frame.data[i] + frame.data[i+1] + frame.data[i+2]) / 3;
				frame.data[i] = scale;
				frame.data[i+1] = scale;
				frame.data[i+2] = scale;
				frame.data[i+3] = 255;
			}
			context.putImageData(frame,0,0);
			if (video.paused || video.ended) {
				return;
			}
			setTimeout(function(){ noir(); }, 0);
		}
		
		
		
		
		
		
		
		