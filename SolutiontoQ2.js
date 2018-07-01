//Solution to Question2

var array = [1,2,3,4];
var targetNum = 4;
var subArr = [];
var finalArr = [];

findArrayNums = (array, target) => {
	finalArr = [];
	for(var i = 0; i < array.length; i++) {
		var sum = array[i];
		subArr = [];
		for(var j = i+1; j<=array.length; j++) {
			sum += array[j];
			if(sum === target)
				subArr.push(array[i], array[j]);
			else
				sum = array[i];
		}
		if(subArr.length > 0)
			finalArr.push(subArr);
	}
	var message = finalArr.length > 0 ? finalArr : 'No match found';
	console.log(`Identifying array elements whose sum is equal to ${targetNum}:`);
	console.log(message);
}
findArrayNums(array, targetNum);