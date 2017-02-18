var lowerLimit = -1, upperLimit = -1;

function generateRandomWord(){
	var str = "";
	var temp;
	var Length = document.getElementById('length').value;
	for (var i = 0; i < Length; i++){
		temp = Math.floor(Math.random() * (upperLimit + 1 - lowerLimit) + lowerLimit);
		str += ALPHABET[temp];
	}
	return str;
}
function parseRange(str){
	for (var i = 0; i < str.length; i++){
		if (lowerLimit < 0){
			for (var j = 0; j < ALPHABET.length; j++){
				if (str[i].toLowerCase() === ALPHABET[j]){
					lowerLimit = j;
					break;
				}
			}
			continue;
		}
		if (upperLimit < 0){
			for (var j = 0; j < ALPHABET.length; j++){
				if (str[i].toLowerCase() === ALPHABET[j]){
					upperLimit = j;
					break;
				}
			}
		}
	}
	
	if (upperLimit < lowerLimit){
		var temp = upperLimit;
		upperLimit = lowerLimit;
		lowerLimit = temp;
	}		
}
function RLE(str){
	var newStr = "";
	var count = 1;
	var currentLetter = str[0];
	for (var i = 0; i < str.length; i++){
		if (str[i] === str[i+1]){
			count++;
			continue;
		}
		newStr += count + currentLetter;
		currentLetter = str[i+1];
		count = 1;
	}
	return newStr;
}

function huffman(str){

	var stackOfSymbols = [];
	stackOfSymbols.push(str[0]);
	
	var frequency = [];
	frequency.push(0);
	
	//считаем кол-во каждого элемента в тексте
	for (var i = 0; i < str.length; i++){
		for (var j = 0; j < stackOfSymbols.length; j++){
			if (str[i].charCodeAt(0) === 32){
				break;
			}
			if (str[i] === stackOfSymbols[j]){				
				frequency[j]++;
				break;
			}
			if (j === stackOfSymbols.length-1){
				stackOfSymbols.push(str[i]);
				frequency.push(0);
			}
		}
	}
	//сортируем элементы по частоте встречаемости
	for (var i = 0; i < frequency.length; i++){
		for (var j = 0; j < frequency.length-1; j++){
			if (frequency[j] < frequency[j+1]){
				var symbolTemp, freqTemp;
				
				symbolTemp = stackOfSymbols[j];
				stackOfSymbols[j] = stackOfSymbols[j+1];
				stackOfSymbols[j+1] = symbolTemp;
				
				freqTemp = frequency[j];
				frequency[j] = frequency[j+1];
				frequency[j+1] = freqTemp;
			}
		}
	}
	//создаём шифры для каждого символа
	var NEW_ALPHABET = getBinaryAlphabet(stackOfSymbols);
	//кодируем сообщение
	return encoding(str, stackOfSymbols, NEW_ALPHABET);
}
//получаем двоичные коды
function getBinaryAlphabet(symbols){
	var NEW_ALPHABET = [];
	
	for (var i = 0; i < symbols.length; i++){
		NEW_ALPHABET[i] = i.toString(2);
	}
	return NEW_ALPHABET;
}

function encoding(str, stack, code){
	var newStr = "";
	for (var i = 0; i < str.length; i++){
		for (var j = 0; j < stack.length; j++){
			if (str[i] === stack[j]){
				newStr += code[j] + ".";
				break;
			}			
			if (str[i].charCodeAt(0) === 32){
				newStr += " ";
				break;
			}
		}
	}
	return newStr;
}

function LZW(str){
	
	//получаем алфавит всех одиночных символов
	var stackOfSymbols = [];	//массив символов и групп символов
	var MY_ALPHABET = [];		//массив объектов кодов символов и групп символов
	
	stackOfSymbols.push(str[0]);
	
	//определяем код каждого символа
	for (var i = 0; i < str.length; i++){
		for (var j = 0; j < stackOfSymbols.length; j++){
			if (str[i].charCodeAt(0) === 32){
				break;
			}
			if (str[i] === stackOfSymbols[j]){			
				break;
			}
			if (j === stackOfSymbols.length-1){
				stackOfSymbols.push(str[i]);
			}
		}
	}
	//делаем массив кодов
	for (var i = 0; i < stackOfSymbols.length; i++){
		MY_ALPHABET[i] = {phrase: stackOfSymbols[i], dict: i, code: null};
	}

	var someSymbols;	//для хранения групп символов

	var increm = 1;
	for (var i = 0; i < str.length-1; i++){
		if (increm > 1){	//переход к последнему символу в наборе символов
			--increm;
			continue;
		}
		someSymbols = str[i] + str[i+1];
		for (var j = 0; j < MY_ALPHABET.length; j++){
			if (MY_ALPHABET[j].phrase === someSymbols){
				++increm;
				someSymbols += str[i+increm];				
			}
			if (j === MY_ALPHABET.length-1){
				var len = MY_ALPHABET.length;
				MY_ALPHABET[len] = {phrase: someSymbols, dict: len};	
				var isEnd = true;
				while (someSymbols.length > 1){
					someSymbols = someSymbols.slice(0, someSymbols.length-1);
					for (var k = 0; k < MY_ALPHABET.length; k++){
						if (MY_ALPHABET[k].phrase === someSymbols){
							MY_ALPHABET[len].code = MY_ALPHABET[k].dict;
							isEnd = false;
							break;
						}
					}
					if(!isEnd){
						break;
					}
				}
				break;
			}
			
		}
	}
	var newStr = "", i = 0;
	while(MY_ALPHABET[i].code === null){
		i++;
	}
	for (i; i < MY_ALPHABET.length; i++){
		newStr += MY_ALPHABET[i].code + " ";
	}
	return newStr;
}













