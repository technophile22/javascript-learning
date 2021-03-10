const raghav = {
    firstName : "Raghav",
    lastName : "Mangal",
    role : "Admin",
    courseCount: 3,
    getInfo : function(){
        console.log(`
            First name is ${this.firstName},
            Last name is ${this.lastName},
            his role is ${this.role}
            and he is studying ${this.courseCount} courses
        `);
    }
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4,
};

//raghav.getInfo();

//we can borrow the getinfo method from raghav for dj

var djInfo = raghav.getInfo.bind(dj);
djInfo();

//Bind always gives a reference back and we have to run that reference

//another method is call, and there are many like these

raghav.getInfo.call(dj);
//this will give an output not a reference, this method directly calls it
