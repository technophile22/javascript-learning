var users = ["raghav", "mangal", "rom", "sam", "sammy", "rami"];

console.log(users.slice(1,4));

//slices off the part before the given number
console.log(users.slice(1));


users.splice(1,3, "hi", "bye");
//first value is start position
//second value is count position
//start, count till the number, delete them all and insert the third value instead of those
//and we can pass as many values as we want to in third variable
//like hi and bye are passed in the end, basically a string array can be passed as third value
console.log(users);
