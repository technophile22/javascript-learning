var user = { 
    firstName : "Raghav",
    lastName : "Mangal",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true,
    googleSignedIn : false
    //key : value
}

console.log(user.firstName);
console.log(user.loginCount);

console.log(user["lastName"]);
//key should be inside double quotes to access value

user.loginCount = 45;
console.log(user.loginCount);

console.log(user);

