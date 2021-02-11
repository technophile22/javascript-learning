var user = { 
    firstName : "Raghav",
    lastName : "Mangal",
    role : "admin",
    loginCount : 32,
    facebookSignedIn : true,
    googleSignedIn : false,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(this.courseName);
    },
    getCourseCount : function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    getInfo : function() {
        console.table({
            firstName : this.firstName,
            lastName : this.lastName,
            role: this.role,
            courseTotal: this.courseList.length
        });
    }
    //key : value
};

var courseList = true;
//nothing, just to create confusion

console.log(user.getCourseCount()); //0

user.buyCourse("ReactJS course");
user.buyCourse("Angular course");

console.log(user.getCourseCount()); //2

user.getInfo();

