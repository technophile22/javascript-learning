var countries = ["India", "USA", "Japan", "Russia", "Netherlands"];

var states = new Array("Rajasthan", "Delhi", "Maharashtra", "Assam");

console.log(states[0]);

console.log(states.length);

states[0] = "Punjab";

console.log(states[0]);

var user = ["raghav", "raghavmangal.com", 3, 34, true];
console.log(user);

user.pop();
console.log(user);

user.unshift("NEW VALUE");
//taking a value, adding to the start and shift the rest of value in array
console.log(user);

user.shift()
//removing a value from the start and shift the rest of values in array 
console.log(user);

console.log(user.indexOf(3));
console.log(user.indexOf("happy"));

console.log(Array.from("raghav"));
