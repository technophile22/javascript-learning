var User = {
    name: "",
    getUserName : function() {
        console.log(`User name is : ${this.name}`);
    },
};

var raghav = Object.create(User);

console.log(raghav);
raghav.name = "Raghav Mangal";
raghav.getUserName();

//read more documentation MDN
//one of the ways of creating objects and inserting values
var sam = Object.create(User, {
    name: {value: "sammy"},
    courseCount: {value: 3},
});

sam.getUserName();


