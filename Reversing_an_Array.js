var reverseArrayInPlace = function(arr)
{
var count = 0;
for (var x = arr.length-1 ;x>0 ;x--)
	{
	var temp = arr[count];
	arr[count]= arr[x];
	arr[x] = temp;
	count++;
	}
};

var reverseArray = function(arr)
{
var newArr =  [];

for (index in arr)
	{
		newArr.push(arr[index]);
	}
var count = 0;
for (var x = arr.length-1 ;x>0 ;x--)
	{
	var temp = newArr[count];
	newArr[count]= newArr[x];
	newArr[x] = temp;
	count++;
	}
console.log(newArr);
};

var arr = [1,2,3,4,5];
console.log(arr);
reverseArrayInPlace(arr);
console.log(arr);
reverseArray(["A","B","C","D"]);

