var arrays = [1,2,3,4,];


var combine = function(prev,current){
	console.log(prev + current);

	//return prev + "," + current;
}

console.log(arrays.reduce(combine));



/*var arr = []
for(var c = 0; c < arrays.length; c++){
	for(var r = 0; r < arrays[c].length; r++){
		arr.push(arrays[c][r]);
		console.log(arr);
		}

}*/