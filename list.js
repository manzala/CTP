var listToArray = function(list)
{	
	var arr = [];
	while (list != null)
	{
		arr.push(list.value);
		list = list.rest
		
	}
	return arr;
};

var prepend = function(element,list)
{

var newList = 
	{
		value: element,
		rest: list
	}

	return newList;
};


var nth = function(list, number)
{	
	if (number == 0)
	{
		return list.value;

	}


	else if (list.rest != null && number > 0)
	{
		list = list.rest
		return  nth(list,number-1);
		
	}

	else 
	{
		return undefined;
	}
	
}

var arrayToList = function(arr)
{	var list = {value: arr[arr.length-1], rest:null};
	for (var x = arr.length-2; x >= 0; x--)
	{
		list = prepend(arr[x],list);
	}
	
return list;
	
};


var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
}

//console.log(preprend(0,list));
//console.log(listToArray(list));
 console.log(arrayToList([10,20,30]))
//console.log(prepend(10,prepend(20,null)))
console.log(nth(list,2));

