var randomWord;
var rleTime, hufTime, lzwTime;
var generate = document.getElementById('generate');
generate.onclick = function(){
	var range = document.getElementById('range').value;	
	parseRange(range);
	randomWord = generateRandomWord();
	var res = document.getElementById('result');
	result = "Исходное слово: " + randomWord;
	res.innerHTML = result;
}

var rle = document.getElementById('rle');
rle.onclick = function(){
	var newWord;
	
	//тест на скорость
	var start = new Date();
	for (var i = 0; i < 2000; i++){
		newWord = RLE(randomWord);
	}
	var end = new Date();
	
	rleTime = end - start;
	var res = document.getElementById('result');
	result = "Исходное слово: " + randomWord;
	var res1 = document.getElementById('result1');
	result1 = "Закодированное слово (RLE): " + newWord;
	res.innerHTML = result;
	res1.innerHTML = result1;
}

var huf = document.getElementById('huf');
huf.onclick = function(){
	var newWord;
	
	//тест на скорость
	var start = new Date();
	for (var i = 0; i < 2000; i++){
		newWord = huffman(randomWord);
	}
	var end = new Date();
	
	hufTime = end - start;
	var res = document.getElementById('result');
	result = "Исходное слово: " + randomWord;
	var res2 = document.getElementById('result2');
	result2 = "Закодированное слово (Хаффмана): " + newWord;
	res.innerHTML = result;
	res2.innerHTML = result2;
}

var lzw = document.getElementById('lzw');
lzw.onclick = function(){	
	var newWord;	
	
	//тест на скорость
	var start = new Date();
	for (var i = 0; i < 2000; i++){
		newWord = LZW(randomWord);
	}
	var end = new Date();
	
	lzwTime = end - start;
	var res = document.getElementById('result');
	result = "Исходное слово: " + randomWord;
	var res3 = document.getElementById('result3');
	result3 = "Закодированное слово (LZW): " + newWord;
	res.innerHTML = result;
	res3.innerHTML = result3;
}

//вывод результатов тестов на скорость в canvas
var canvasButton = document.getElementById('canv');
canvasButton.onclick = function(){
	var example = document.getElementById('canvas'),
	ctx = example.getContext('2d');
	ctx.font = "italic 14pt Arial";
	ctx.fillStyle = "red";
	ctx.fillRect(130, 20, rleTime*2, 25);
	ctx.fillStyle = "black";
	ctx.fillText("RLE", 15, 40);
	ctx.fillStyle = "blue";
	ctx.fillRect(130, 60, hufTime*2, 25);
	ctx.fillStyle = "black";
	ctx.fillText("Huffman\'s", 15, 80);
	ctx.fillStyle = "green";
	ctx.fillRect(130, 100, lzwTime*2, 25);
	ctx.fillStyle = "black";
	ctx.fillText("LZW", 15, 120);
	ctx.fillText("Время в мс", 15, 160);
	ctx.font = "8pt Arial";
	
	ctx.beginPath();
    ctx.moveTo(130, 160);
    ctx.lineTo(800, 160);
	for (var x = 130; x < 800; x += 50){
		ctx.moveTo(x, 150);
		ctx.lineTo(x, 160);
		ctx.fillText((x-130)/2, x, 170);
	}
    ctx.stroke();
}






 
