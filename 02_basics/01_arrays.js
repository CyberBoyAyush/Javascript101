// Arrays in JavaScript
// Arrays are used to store multiple values in a single variable.

// Creating an Array
// You can create an array using the following methods:
let fruits = ["Apple", "Banana", "Mango", "Orange"];
const numbers = [1, 2, 3, 4, 5];
console.log(fruits);

// Accessing Elements
// You can access elements of an array using the index of the element.
console.log(fruits[0]);
console.log(fruits[3]);
console.log(fruits[4]); // undefined
console.log(numbers[3]);

// Methods in Array
// Some of the methods in the array are:
// length: Returns the length of the array.
console.log(fruits.length);
console.log(numbers.length);

// push(): Adds an element to the end of the array.
fruits.push("Pineapple");
console.log(fruits);

// pop(): Removes the last element from the array.
fruits.pop();
console.log(fruits);

// shift(): Removes the first element from the array.
fruits.shift();
console.log(fruits);

// unshift(): Adds an element to the beginning of the array.
fruits.unshift("Pineapple");
console.log(fruits);

// we do not prefer using unshift() and shift() as it is slower than push() and pop().

// splice(): Adds or removes elements from the array.
fruits.splice(1, 2 , "Kiwi", "Grapes");
console.log(fruits);

// slice(): Returns a new array from the given start and end index.
let newFruits = fruits.slice(1, 3);
console.log(newFruits);