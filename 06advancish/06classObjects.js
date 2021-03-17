//import User from './05classJs";

const User = require("./05classJS.js");

const raghav = new User("raghav", "raghavmangal22@gmail.com");

console.log(raghav.getInfo());

raghav.enrollCourse("React Bootcamp");
raghav.enrollCourse("Angular Bootcamp");

console.log(raghav.getCourseList());

let courses = raghav.getCourseList();

courses.forEach(c => console.log(c));