// Truthy and Falsy values

// Falsy values
// undefined
// null
// 0
// ''
// NaN

// Truthy values
// Everything else

let color = 'red';
let isRed = color === 'red';
let isGreen = color === 'green';
let isBlue = color === 'blue';
console.log(isRed); // Output: true
console.log(isGreen); // Output: false
console.log(isBlue); // Output: false

const userEmail = "A@ayush.in"

if (userEmail) {
    console.log('You are logged in');
} else {
    console.log('Please log in');
}

// comapring empty object 
let user = {};

if (Object.keys(user).length) {
    console.log('You are logged in');
}

// Nullish coalescing operator
// let userColor = 'red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor); // Output: red

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = undefined ?? defaultColor;
console.log(currentColor); // Output: red

// Terniary operator

const price = 100;

price > 100 ? console.log('expensive') : console.log('cheap');