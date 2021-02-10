//global context


//execution context
//--->
//variable object
//scope chain
//this

//function declarations are scanned and made available
//variable declarations are scanned and made undefined

tipper("80"); //global context

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

/*
bigTipper("200");
//variable declarations are scanned and made undefined
var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill+15);
}

//output will be an error 

*/

console.log(name); //undefined
var name = "raghav";

//undefined and error are two completely different things

function sayName(){
    var name = "MR. R";
    console.log(name);
}
sayName();

console.log(name);

// 85 (this is coming from line 17)
// undefined (this is coming from line 32)
// MR. R (this is coming from line 41, 
        //a new execution context comes up for the function and gets removed when the function is executed completely and again the global context starts)
// raghav (this is coming from line 45, global context)