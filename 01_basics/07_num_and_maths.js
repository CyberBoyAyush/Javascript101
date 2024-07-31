// Numbers

const num1 = 10.99;
const num2 = new Number(99);

// Number methods

// 1. toExponential()
console.log(num1.toExponential()); // returns the number in exponential notation

// 2. toFixed()
console.log(num1.toFixed(2)); // returns the number in fixed point notation

// 3. toPrecision()
console.log(num1.toPrecision(2)); // returns the number in precision notation

// 4.toLocalString()
let numnum = 10000000;
console.log(numnum.toLocaleString('en-IN')); // returns the number in local string notation

console.log("\n");
console.log("\n");
console.log("\n");
console.log("*****************Maths*********************");

// Maths 

// 1. Math.PI
console.log(Math.PI); // returns the value of PI

// 2. Math.round()
console.log(Math.round(4.7)); // returns the rounded value of the number

// 3. abs()
console.log(Math.abs(-4.7)); // returns the absolute value of the number

// 4. ceil()
console.log(Math.ceil(1010.1)); // returns the smallest integer greater than or equal to the number

// 5. floor()
console.log(Math.floor(1010.9)); // returns the largest integer less than or equal to the number

// 6. sqrt()
console.log(Math.sqrt(36)); // returns the square root of the number

// 7. pow()
console.log(Math.pow(2, 5)); // returns the value of the number raised to the power of the exponent

// 8. min()
console.log(Math.min(0, 150, 30, 20, -8, -200)); // returns the smallest number

// 9. max()
console.log(Math.max(0, 150, 300, 20, -8, -200)); // returns the largest number

// 10. random()
console.log(Math.random()); // returns a random number between 0 and 1

// 11 .  Math.trunc()
console.log(Math.trunc(4.7)); // returns the integer part of the number

console.log(Math.floor(Math.random() * 10)); // returns a random number between 0 and 10