var testArray = [2,4,6,3,1,5,9,8];

console.log(testArray.fill("r", 2, 5));
//first argument is fill value
//second argument is start position 
//third argument is end position(exclusive)

const myNumber = [23,24,25, 55, 26, 34, 546, 65];

const result = myNumber.filter( (num) => {
    return num < 55;
})
//returns an array

console.log(result);
