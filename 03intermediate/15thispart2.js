//for regular function calls, this points to window object

console.log(this);

var user = {
    firstName: "Raghav",
    courseCount: 4,
    getCourseCount: function(){
        console.log("LINE 9", this);
        //this will contain the entirety of the object

        function sayHello(){
            console.log("Hello");
            console.log("LINE 12", this);
            //this "this" will contain window object because it is a regular function
        }

        //this is a regular function call
        sayHello();
    }
};

//not a regular function call
user.getCourseCount();

// function sayHello()
// {
//     console.log("Hello");
// }
// //regular function call
// sayHello();
