// var returnedValue = Math.max(2,4,5,1,7,4,9,4,2);
// console.log(returnedValue);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c: 3}, {z:9, y:8, x:7});
// console.log(myObj);

function sumOne(a,b) {
    return a+b;
}

var myArray = [5,4];

//console.log(sumOne(...myArray)); //spread operator


//rest operator, converts individual values into array
function sumTwo(a,b, ...args) {
    let sum = 0;
    let multi = a*b;
    for(const arg of args){
        sum = sum + arg;
    }
    return [sum, multi];
}

console.log(sumTwo(2,3));
console.log(sumTwo(2,3,4,1,4,5));