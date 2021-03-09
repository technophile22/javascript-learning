
//its one of the way of defining objects
//this is a functional approach of defining objects
// this is the recommended way
var User = function(firstname, courseCount) {
    this.firstname = firstname;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`Course count is: ${this.courseCount}`);
    }
};

var raghav = new User("Raghav", 2)
//as soon as we use new keyword, this is not a regular function call
console.log(raghav);

var sam = new User("Sam", 1);
console.log(sam);
