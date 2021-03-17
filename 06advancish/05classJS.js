class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    #courseList = []; //private variable

    getInfo(){
        return {
            name: this.name,
            email: this.email
        }
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourseList(){
        return this.#courseList;
    }
    
    login(){
        return "you are looged in";
    }
}

class SubAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }

    login() {
        return "login for admin only";
    }
}

//let raghav = User("raghav", "raghavmangal22@gmail.com");

module.exports = User;

const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList); //cannot access because variable is private

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());