function init(){
    var firstName = "Raghav";
    console.log("I am init");

    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var name = init();
//the thing is that, if i call this function init, it will run till
//line 3, then the function will run but nobody is calling it
//basically it will stay in the memory, and because nobody is calling it, the function will remain in the memory
//and because of that, init will also be in the memory and it will not end totally
//because something in it is there which hasn't served its purpose yet, 
//so we need a closure to execute the function and free the inner function from memory

name();
//this is the closure


//another example

function doAddition(x) {
    return function(y){
        return x+y;
    }
}

var addFive = doAddition(4);
//passing value 4 cannot do anything, we need a closure
console.log(addFive(5));
//closure in above line

//another way to call it
console.log(doAddition(5)(5));

//curring 
//doAddition()()()

