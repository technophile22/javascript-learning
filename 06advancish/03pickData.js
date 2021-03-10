// const user = ["Raghav", 3, "Admin"];
// // var role = user[2];
// // var name = user[0];

// var [name, courseCount, role] = user;
// console.log(role);

//destructuring of array, above

//destructuring of objects, below
const myUser = {
    name: "raghav",
    courseCount : 5,
    role : "admin",
};
console.log(myUser.courseCount);

//while destructuring the object, definitely the type should match
//but, the names should also match as they were inside the object 
const {name, courseCount, role} = myUser;
console.log(courseCount);