//Solution to Question3

doTheConversion = (input) => {
	verifyFormat(input);
}

verifyFormat = (input) => {
	input.includes(',') ?
		rgbToHex(input) : hexToRgb(input);
}

rgbToHex = (input) => {
	var result;
	var rgbArr = input.split(',')
	for(var i = 0 ; i < rgbArr.length; i++) {
		if(rgbArr[i] > 255) {
			console.log('Invalid input: Enter between 0 - 255');
			return;
		}
	}
	var newArr = rgbArr.map(color => {
		var colorInInt = parseInt(color.trim());
		if(colorInInt > 15 && colorInInt < 256) {
			var quotient = parseInt(colorInInt / 16);
			var remainder = colorInInt % 16;
			result = toHex(quotient) + "" + toHex(remainder);
		} else {
			result = toHex(colorInInt);
			if(result.toString().length == 1) {
				result = "0" + result;
			}
		}
		return result;
	});
	console.log(`rgb(${input})'s equivalent HEX value is: ${newArr.join('')}`);
}

toHex = (input) => {
	var value;
	switch(input) {
		case 10: value = 'A'; break;
		case 11: value = 'B'; break;
		case 12: value = 'C'; break;
		case 13: value = 'D'; break;
		case 14: value = 'E'; break;
		case 15: value = 'F'; break;
		default: value = input; break;
	}
	return value;
}

hexToRgb = (input) => {
	var result = 'rgb(';
	var hexArr = [];
	if(input.length === 3) {
		hexArr = input.split('');
		hexArr = hexArr.map(value => value+value);
	} else if(input.length === 6) {
		for(var i = 0; i < input.length; i= i+2) {
			hexArr.push(input.substr(i, 2));
		}
	} else {
		console.error(`Please provide input in the form of 'fdf' or 'ffddff'`);
	}
	hexArr.map((color, index) => {
		var arr = color.split('');
		if(arr.length === 2) {
			var rgbValue = toDec(arr[0]) * 16 + toDec(arr[1]);
			if(rgbValue < 10) 
				rgbValue = '0' + rgbValue;
			index === hexArr.length - 1 ?
				result += rgbValue + ")"
				:
				result += rgbValue + ",";
		}		
	});
	console.log(`HEX #${input}'s equivalent RGB value is: ${result}`);
}

toDec = (input) => {
	var value;
	switch(input) {
		case 'A':
		case 'a': value = 10; break;
		case 'B':
		case 'b': value = 11; break;
		case 'C':
		case 'c': value = 12; break;
		case 'D':
		case 'd': value = 13; break;
		case 'E':
		case 'e': value = 14; break;
		case 'F':
		case 'f': value = 15; break;
		default: value = parseInt(input); break;
	}
	return value;
}

doTheConversion('ea2291');
doTheConversion('234,34,145');

//BONUS
//Published as NPM package: https://www.npmjs.com/package/colorformatconverter
