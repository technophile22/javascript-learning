var isEven = (element) => {
    // if(element % 2 == 0){
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
};

//console.log(isEven(3));


//callback
var result = [2,4,6,8].every( (e) => (e%2 === 0));
//if curly braces are used instead of parenthesis in e%2, then return keyword is necessory

console.log(result);