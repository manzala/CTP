var ancestry = require("./ancestry.js"); // String version of data
var ancestryList = JSON.parse(ancestry); // List version of data
var centuryList = {};
var arr16= [];
var arr17= [];
var arr18= [];
var arr19= [];
var arr20= [];
var arr21= [];

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

var calculateAge = function(person)
{
	return person.died - person.born;
}

ancestryList.forEach(function(person) {
	var century = Math.ceil(person.died / 100)
	
	switch(century){
		case 16: arr16.push(calculateAge(person))
			break;

		case 17: arr17.push(calculateAge(person))
			break;

		case 18: arr18.push(calculateAge(person))
			break;
		
		case 19: arr19.push(calculateAge(person))
			break;

		case 20: arr20.push(calculateAge(person))
			break;
		
		case 21: arr21.push(calculateAge(person))
			break;

		default: console.log("Error");
	}
	
});



console.log(average(arr16).toFixed(1));
console.log(average(arr17).toFixed(1));
console.log(average(arr18).toFixed(2));
console.log(average(arr19).toFixed(2));
console.log(average(arr20).toFixed(2));
console.log(average(arr21));

