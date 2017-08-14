
var range = function(start,end, step = 0)
	{	
		var arr = [];	
		for(var x = start; x <= end; x = x + 1 + step)
			arr.push(x);
		for(var x = start; x >= end; x = x + step)
			arr.push(x);
		return arr;

	};


var sum = function(arr)
	{	var sum = 0;
		for (elements in arr)
			var sum = sum + arr[elements];

		return sum;
	};


var arr = range(1,10);
console.log(arr);
console.log("the sum is " + sum(arr));


var arr = range(5,2,-1);
console.log(arr);
console.log("the sum is " + sum(arr));




