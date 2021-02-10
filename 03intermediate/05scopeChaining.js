//scope chaining

var name = "raghav";
console.log("Line number 4", name);

function sayName(){
    var name = "MR. R"
    console.log("Line number 8", name);
    sayNameTwo();
    function sayNameTwo(){
        console.log("Line number 11", name); //this will ask the above function/scope for name
        //if the above name is not available then it will ask the above scope for name
    }
}

sayName();