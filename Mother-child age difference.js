// This makes sure the data is exported in node.js —

var ancestry = require("./ancestry.js")

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {}
var ancestry = require("./ancestry.js")
ancestry = JSON.parse(ancestry),
 ageDifferences = [];


ancestry.forEach(function(person){
    byName[person.name] = person;
    console.log(byName);
});

ancestry.forEach(function(person){
    if(byName[person.mother]){
        ageDifferences.push(person.born - byName[person.mother].born);
    }
});

console.log(average(ageDifferences));


