var img = document.getElementById('image');
img.onload = function(){
	var canvas1 = document.getElementById('canvas1');
	var ctx1 = canvas1.getContext('2d');
	ctx1.drawImage(img, 0, 0);		
	var imageData = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);		
	var imageDataFiltered = log(imageData);
	ctx1.putImageData(imageData, 0, 0);
	
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d');
	ctx2.drawImage(img, 0, 0);		
	imageData = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);		
	imageDataFiltered = power(imageData);
	ctx2.putImageData(imageData, 0, 0);
	
	var canvas3 = document.getElementById('canvas3');
	var ctx3 = canvas3.getContext('2d');
	ctx3.drawImage(img, 0, 0);		
	imageData = ctx3.getImageData(0, 0, canvas3.width, canvas3.height);		
	imageDataFiltered = laplasian(imageData);
	ctx3.putImageData(imageData, 0, 0);
	
	var canvas4 = document.getElementById('canvas4');
	var ctx4 = canvas4.getContext('2d');
	ctx4.drawImage(img, 0, 0);		
	imageData = ctx4.getImageData(0, 0, canvas4.width, canvas4.height);		
	imageDataFiltered = sobel(imageData);
	ctx4.putImageData(imageData, 0, 0);
	
	var canvas5 = document.getElementById('canvas5');
	var ctx5 = canvas5.getContext('2d');
	ctx5.drawImage(img, 0, 0);		
	imageData = ctx5.getImageData(0, 0, canvas5.width, canvas5.height);		
	imageDataFiltered = segmentation(imageData);
	ctx5.putImageData(imageData, 0, 0);
	
	var canvas6 = document.getElementById('canvas6');
	var ctx6 = canvas6.getContext('2d');
	ctx6.drawImage(img, 0, 0);		
	imageData = ctx6.getImageData(0, 0, canvas6.width, canvas6.height);		
	imageDataFiltered = marr(imageData);
	ctx6.putImageData(imageData, 0, 0);
}


var log = function(imageData){
	var pixels = imageData.data;
	for (var i = 0; i < pixels.length; i += 4){
		pixels[i] = 60 * Math.log(1 + pixels[i]);
		pixels[i+1] = 60 * Math.log(1 + pixels[i+1]);
		pixels[i+2] = 60 * Math.log(1 + pixels[i+2]);
	}
	
	return imageData;
}
var power = function(imageData){
	
	var pixels = imageData.data;
	
	for (var i = 0; i < pixels.length; i++){
		pixels[i] = 6.5*  Math.pow(pixels[i], 0.5);
		pixels[i+1] = 6.5* Math.pow(pixels[i+1], 0.5);
		pixels[i+2] = 6.5* Math.pow(pixels[i+2], 0.5);
	}
	return imageData;
}
/*
|1  -2  1|
|-2  4 -2|
|1  -2  1|
*/

//LAPLASIAN/////////////////////////////////////////////////////////////////////////////////////////////////////////
var laplasian = function(imageData){
	var counter = 0;
	var len = canvas1.width;
	var hei = canvas1.height;
	var grads = [];
	var values = [];
	var pixels = imageData.data;
	var values2 = [];
	
	for (var i = 0; i < pixels.length; i += 4){
		var sum = 0;
		sum += pixels[i];
		sum += pixels[i+1];
		sum += pixels[i+2];
		values[counter++] = sum;
	}
	counter = 0;
	for (var i = 0; i < hei; i++){
		values2[i] = [];
		for (var j = 0; j < len; j++){
			values2[i][j] = values[counter++];
		}
	}
	counter = 0;
	for (var i = 1; i < hei-1; i++){
		for (var j = 1; j < len-1; j++){
			grads[counter] = -1 * values2[i-1][j-1] + 
							 -1 * values2[i-1][j]   +
							 -1 * values2[i-1][j+1] +
							 -1 * values2[i][j-1]	+
							  8 * values2[i][j]	    +
							 -1 * values2[i][j+1]	+
							 -1 * values2[i+1][j-1] + 
							 -1 * values2[i+1][j]   +
							 -1 * values2[i+1][j+1];			
			counter++;	
		}
	}
	var qwerty = 1;
	counter = 0;
	for (var i = len*4+4; i < pixels.length-len-4; i += 4){
		if (((i+4) % (len*4) == 0) || (i % (len*4) == 0)){
			continue;
		}
		if (grads[counter] > 70){
			pixels[i] = 255;
			pixels[i+1] = 255;
			pixels[i+2] = 255;
		}
		else {
			pixels[i] = 0;
			pixels[i+1] = 0;
			pixels[i+2] = 0;
		}
		counter++;
	}
	return imageData;
}
//SOBEL////////////////////////////////////////////////////////////////////////////////////////////////////////////
var sobel = function(imageData){
	var counter = 0;
	var len = canvas1.width;
	var hei = canvas1.height;
	var Gx = [];
	var Gy = [];
	var grads = [];
	var values = [];
	var pixels = imageData.data;
	var values2 = [];
	
	for (var i = 0; i < pixels.length; i += 4){
		var sum = 0;
		sum += pixels[i];
		sum += pixels[i+1];
		sum += pixels[i+2];
		values[counter++] = sum;
	}
	counter = 0;
	for (var i = 0; i < hei; i++){
		values2[i] = [];
		for (var j = 0; j < len; j++){
			values2[i][j] = values[counter++];
		}
	}
	counter = 0;
	for (var i = 1; i < hei-1; i++){
		for (var j = 1; j < len-1; j++){
			Gx[counter] = 1 * values2[i+1][j-1] + 2 * values2[i+1][j] + 1 * values2[i+1][j+1] -
						  1 * values2[i-1][j-1] + 2 * values2[i-1][j] + 1 * values2[i-1][j+1];
			Gy[counter] = 1 * values2[i+1][j+1] + 2 * values2[i][j+1] + 1 * values2[i-1][j+1] -
						  1 * values2[i+1][j-1] + 2 * values2[i][j-1] + 1 * values2[i-1][j-1];
			grads[counter] = Math.floor(Math.sqrt(Gx[counter]*Gx[counter] + Gy[counter]*Gy[counter]));
			counter++;	
		}
	}
	counter = 1;
	for (var i = len*4+4; i < pixels.length-len-4; i += 4){
		if (((i+4) % (len*4) == 0) || (i % (len*4) == 0)){
			continue;
		}
		
		if (grads[counter] - grads[counter-1] > 60 && grads[counter] - grads[counter-1] < 90){
			pixels[i] = 255;
			pixels[i+1] = 255;
			pixels[i+2] = 255;
		} else if (grads[counter] - grads[counter-1] >= 90 && grads[counter] - grads[counter-1] < 160){
			pixels[i] = 255;
			pixels[i+1] = 0;
			pixels[i+2] = 0;
		}
		else if (grads[counter] - grads[counter-1] >= 140){
			pixels[i] = 255;
			pixels[i+1] = 255;
			pixels[i+2] = 0;
		}
		else {
			pixels[i] = 0;
			pixels[i+1] = 0;
			pixels[i+2] = 0;
		}
		counter++;
	}
	return imageData;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var segmentation = function(imageData){

	var counter = 0;
	var values = [];
	var pixels = imageData.data;
	var summary;
	
	for (var i = 0; i < pixels.length; i += 4){
		var sum = 0;
		sum += pixels[i];
		sum += pixels[i+1];
		sum += pixels[i+2];
		values[counter++] = sum;
	}
	counter = 0;
	
	for (var i = 0; i < pixels.length; i += 4){
		summary = pixels[i]   + 
				  pixels[i+1] +
				  pixels[i+2];
		if (summary > 0 && summary < 128){
			pixels[i] = 23;
			pixels[i+1] = 56;
			pixels[i+2] = 10;
		} else if (summary >= 128 && summary < 256){
			pixels[i] = 233;
			pixels[i+1] = 12;
			pixels[i+2] = 42;
		} else if (summary >= 256 && summary < 384){
			pixels[i] = 100;
			pixels[i+1] = 100;
			pixels[i+2] = 102;
		} else if (summary >= 384 && summary < 512){
			pixels[i] = 78;
			pixels[i+1] = 132;
			pixels[i+2] = 112;
		} else if (summary >= 512 && summary < 640){
			pixels[i] = 204;
			pixels[i+1] = 255;
			pixels[i+2] = 200;
		} else if (summary >= 640 && summary <= 768){
			pixels[i] = 25;
			pixels[i+1] = 255;
			pixels[i+2] = 25;
		} 
	}
		
	return imageData;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var marr = function(imageData){
	var counter = 0;
	var len = canvas1.width;
	var hei = canvas1.height;
	
	var Gauss = [];
	var R_Channel = [];
	var G_Channel = [];
	var B_Channel = [];
	
	var values = [];
	var pixels = imageData.data;
	var values2 = [];
	var grads = [];
	counter = 0;
	
	for (var i = 0; i < hei; i++){
		R_Channel[i] = [];
		G_Channel[i] = [];
		B_Channel[i] = [];
		for (var j = 0; j < len; j++){
			R_Channel[i][j] = pixels[counter];
			G_Channel[i][j] = pixels[counter+1];
			B_Channel[i][j] = pixels[counter+2];
			counter += 4;
		}
	}
	
	/*counter = 0;
	for (var i = 0; i < hei; i++){
		for (var j = 0; j < len; j++){
			pixels[counter] = 0;
			pixels[counter+1] = G_Channel[i][j];
			pixels[counter+2] = 0;
			counter += 4;
		}
	}*/

	counter = len*4*2 + 4*2;
	for (var i = 2; i < hei-2; i++){
		for (var j = 2; j < len-2; j++){
			if ((counter+4) % (len*4) == 0){	
				counter += 20;
				continue;
			}
			pixels[counter] = 0.000789 * R_Channel[i-2][j-2] + 0.006581 * R_Channel[i-2][j-1] + 0.013347 * R_Channel[i-2][j] + 0.006581 * R_Channel[i-2][j+1] + 0.000789 * R_Channel[i-2][j+2] +
							  0.006581 * R_Channel[i-1][j-2] + 0.054901 * R_Channel[i-1][j-1] + 0.111345 * R_Channel[i-1][j] + 0.054901 * R_Channel[i-1][j+1] + 0.006581 * R_Channel[i-1][j+2] +
							  0.013347 * R_Channel[i][j-2]   + 0.111345 * R_Channel[i][j-1]   + 0.225821 * R_Channel[i][j]   + 0.111345 * R_Channel[i][j+1]   + 0.013347 * R_Channel[i][j+2]   +
						      0.006581 * R_Channel[i+1][j-2] + 0.054901 * R_Channel[i+1][j-1] + 0.111345 * R_Channel[i+1][j] + 0.054901 * R_Channel[i+1][j+1] + 0.006581 * R_Channel[i+1][j+2] +
							  0.000789 * R_Channel[i+2][j-2] + 0.006581 * R_Channel[i+2][j-1] + 0.013347 * R_Channel[i+2][j] + 0.006581 * R_Channel[i+2][j+1] + 0.000789 * R_Channel[i+2][j+2];
			
			pixels[counter+1] = 0.000789 * G_Channel[i-2][j-2] + 0.006581 * G_Channel[i-2][j-1] + 0.013347 * G_Channel[i-2][j] + 0.006581 * G_Channel[i-2][j+1] + 0.000789 * G_Channel[i-2][j+2] +
							    0.006581 * G_Channel[i-1][j-2] + 0.054901 * G_Channel[i-1][j-1] + 0.111345 * G_Channel[i-1][j] + 0.054901 * G_Channel[i-1][j+1] + 0.006581 * G_Channel[i-1][j+2] +
							    0.013347 * G_Channel[i][j-2]   + 0.111345 * G_Channel[i][j-1]   + 0.225821 * G_Channel[i][j]   + 0.111345 * G_Channel[i][j+1]   + 0.013347 * G_Channel[i][j+2]   +
						        0.006581 * G_Channel[i+1][j-2] + 0.054901 * G_Channel[i+1][j-1] + 0.111345 * G_Channel[i+1][j] + 0.054901 * G_Channel[i+1][j+1] + 0.006581 * G_Channel[i+1][j+2] +
							    0.000789 * G_Channel[i+2][j-2] + 0.006581 * G_Channel[i+2][j-1] + 0.013347 * G_Channel[i+2][j] + 0.006581 * G_Channel[i+2][j+1] + 0.000789 * G_Channel[i+2][j+2];				 
			
			pixels[counter+2] = 0.000789 * B_Channel[i-2][j-2] + 0.006581 * B_Channel[i-2][j-1] + 0.013347 * B_Channel[i-2][j] + 0.006581 * B_Channel[i-2][j+1] + 0.000789 * B_Channel[i-2][j+2] +
							    0.006581 * B_Channel[i-1][j-2] + 0.054901 * B_Channel[i-1][j-1] + 0.111345 * B_Channel[i-1][j] + 0.054901 * B_Channel[i-1][j+1] + 0.006581 * B_Channel[i-1][j+2] +
							    0.013347 * B_Channel[i][j-2]   + 0.111345 * B_Channel[i][j-1]   + 0.225821 * B_Channel[i][j]   + 0.111345 * B_Channel[i][j+1]   + 0.013347 * B_Channel[i][j+2]   +
						        0.006581 * B_Channel[i+1][j-2] + 0.054901 * B_Channel[i+1][j-1] + 0.111345 * B_Channel[i+1][j] + 0.054901 * B_Channel[i+1][j+1] + 0.006581 * B_Channel[i+1][j+2] +
							    0.000789 * B_Channel[i+2][j-2] + 0.006581 * B_Channel[i+2][j-1] + 0.013347 * B_Channel[i+2][j] + 0.006581 * B_Channel[i+2][j+1] + 0.000789 * B_Channel[i+2][j+2];
						
			counter += 4;	
		}
	}

	counter = 0;
	for (var i = 0; i < pixels.length; i += 4){
		var sum = 0;
		sum += pixels[i];
		sum += pixels[i+1];
		sum += pixels[i+2];
		values[counter++] = sum;
	}
	counter = 0;
	for (var i = 0; i < hei; i++){
		values2[i] = [];
		for (var j = 0; j < len; j++){
			values2[i][j] = values[counter++];
		}
	}
	counter = 0;
	for (var i = 2; i < hei-2; i++){
		for (var j = 2; j < len-2; j++){
			grads[counter] = 1 * values2[i-2][j] + 1 * values2[i-1][j-1] + 2 * values2[i-1][j] + 1 * values2[i-1][j+1] + 
							 1 * values2[i][j-2] + 2 * values2[i][j-1] - 16 * values2[i][j] + 2 * values2[i][j+1] + 1 * values2[i][j+2] +
							 1 * values2[i+1][j-1] + 2 * values2[i+1][j] + 2 * values2[i+1][j+1] +
							 1 * values2[i+2][j];
			counter++;
		}	
	}
	counter = 1;
	for (var i = len*4*2 +4*2; i < pixels.length-len*2-4*2; i += 4){
		if (((i+4) % (len*4)) == 0 ){
			i += 12;
			continue;
		}
		if (grads[counter] - grads[counter-1] > 100){
			pixels[i] = 255;
			pixels[i+1] = 255;
			pixels[i+2] = 255;
		}

		else {
			pixels[i] = 0;
			pixels[i+1] = 0;
			pixels[i+2] = 0;
		}
		counter++;
	}
	
	return imageData;	
}


//9 colors
/*
if (summary > 0 && summary < 85){
			pixels[i] = 0;
			pixels[i+1] = 0;
			pixels[i+2] = 0;
		} else if (summary >= 85 && summary < 170){
			pixels[i] = 28;
			pixels[i+1] = 28;
			pixels[i+2] = 28;
		} else if (summary >= 170 && summary < 255){
			pixels[i] = 56;
			pixels[i+1] = 56;
			pixels[i+2] = 56;
		} else if (summary >= 255 && summary < 340){
			pixels[i] = 84;
			pixels[i+1] = 84;
			pixels[i+2] = 84;
		} else if (summary >= 340 && summary < 425){
			pixels[i] = 112;
			pixels[i+1] = 112;
			pixels[i+2] = 112;
		} else if (summary >= 425 && summary < 510){
			pixels[i] = 140;
			pixels[i+1] = 140;
			pixels[i+2] = 140;
		} else if (summary >= 510 && summary < 595){
			pixels[i] = 168;
			pixels[i+1] = 168;
			pixels[i+2] = 168;
		} else if (summary >= 595 && summary < 680){
			pixels[i] = 196;
			pixels[i+1] = 196;
			pixels[i+2] = 196;
		} else if (summary >= 510 && summary < 595){
			pixels[i] = 224;
			pixels[i+1] = 224;
			pixels[i+2] = 224;
		} else if (summary >= 680){
			pixels[i] = 255;
			pixels[i+1] = 255;
			pixels[i+2] = 255;
		} 
*/
















