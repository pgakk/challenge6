//Solution to Question1

var array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
var entry;
var subArr;
var verified = [];
var finalArr = [];

groupIdenticalItems = (arr) => {
	arr.sort((a, b) => a - b);
	for(var i = 0; i < array.length ; i++) {
		entry = array[i];
		subArr = [];
		for(var j = i+1; j <= array.length && !verified.includes(entry); j++) {
			if(array[j] === entry) {
				subArr.length <= 0 ?
					subArr.push(array[i], array[j])
					:
					subArr.push(array[j]);
			}
		}
		
		var included = verified.includes(entry) ? true : false;
		if(!included && subArr.length <= 0)
			subArr.push(entry);

		verified.push(entry);
		if(subArr.length > 0)
			finalArr.push(subArr);
	}
	console.log('Grouping identical numbers together:');
	console.log(finalArr);
}

groupIdenticalItems(array);

//Solution to Bonus Question

var array = [1,"2","3",2];
var finalArr = [];
var diffType = [];
var subArr = [];
groupTypes = (arr) => {
	arr.map(item => {
		typeof(item) === 'string' ?
			diffType.push(item)
			:
			subArr.push(item);
	});
	finalArr.push(subArr, diffType);
	console.log('Grouping identical types together:');
	console.log(finalArr);
}

groupTypes(array);