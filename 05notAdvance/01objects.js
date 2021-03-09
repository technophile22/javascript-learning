
//its one of the way of defining objects
//this is a functional approach of defining objects
// this is the recommended way
var User = function(firstname, courseCount) {
    this.firstName = firstname;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`Course count is: ${this.courseCount}`);
    }
};

User.prototype.getFirstName = function() {
    console.log(`Your first name is: ${this.firstName}`);
};


var raghav = new User("Raghav", 2)
//as soon as we use new keyword, this is not a regular function call

//console.log(raghav);
raghav.getCourseCount();

if(raghav.hasOwnProperty("firstName")){
    raghav.getFirstName();
}
//checks if the object has a particular property available or not

var sam = new User("Sam", 1);
//console.log(sam);
sam.getCourseCount();
sam.getFirstName();
//this will give undefined if the object does not have the property firstName