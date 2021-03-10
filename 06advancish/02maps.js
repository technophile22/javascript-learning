var myMap = new Map();

//maps are not object
myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");

console.log(myMap);

//Map { 1 => 'Uno', 2 => 'dos', 3 => 'Tres', 4 => 'Cuatro' }

for(let key of myMap.keys()){
    console.log(`key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`value is ${value}`);
}

//for Of loop will always gives you keys first
for(let [key, value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
}

// forEach loop is designed to work with values first

myMap.forEach( (key) => {
    console.log(`${key}`);
})
//it will print values only

//forEach loop will always gives you values first
myMap.forEach( (v, k) => {
    console.log(`value is ${v} and key is ${k}`);
})

myMap.delete(2);
console.log(myMap);