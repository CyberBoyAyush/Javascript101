// More loops in JavaScript

// 1. for...in loop
// The for...in loop is used to loop through an object's properties. The loop iterates over all enumerable properties of an object, including inherited enumerable properties.

// Syntax:
// for (variable in object) {
//   // code block to be executed
// }

// Example:
const person = {
  name: 'John',
  age : 30
};

for (let key in person) {
  console.log(key, person[key]);
}


// 2. for...of loop
// The for...of loop is used to loop through the values of an iterable object like an array, string, map, set, etc.

// Syntax:
// for (variable of iterable) {
//   // code block to be executed
// }

// Example:
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}

// 3. forEach() method
// The forEach() method is used to loop through the elements of an array. It is a higher-order function that takes a callback function as an argument.

// Syntax:
// array.forEach(function(currentValue, index, arr), thisValue)

// Example:
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});

// map 

const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (let [key, value] of map) { // destructuring the array
    console.log(key, value);
    }


// for each loop does not return anything

const storage = numbers.forEach( (num) => {return num + 1;})


console.log(storage)
