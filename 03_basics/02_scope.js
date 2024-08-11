// Scopes in JavaScript

// Scope defines the visibility of variables in JavaScript. There are two types of scopes in JavaScript:

// Global Scope: Variables declared outside a function have a global scope and can be accessed anywhere in the code.

// Local Scope: Variables declared inside a function have a local scope and can only be accessed within that function.

// Example of Global Scope
let name = "Ayush";
function greet(){
    console.log(`Hello ${name}`);
}
greet();
console.log(name);

// Local Scope
function greet(){
    let name2 = "Ayush";
    console.log(`Hello ${name2}`);
}
greet();
// console.log(name2); // Error: name2 is not defined

// Function in Function Scope

function greet(){
    let name = "Ayush";
    function greet2(){
        console.log(`Hello ${name}`);
    }
    greet2();
}
greet();

// Function declaration

function addOne(num){
    return num+1;
} // we can access this function before the declaration

const addTwo = function(num){
    return num+2;
} // we can not access this function before the declaration because of hoisting


// Arrow function
const addThree = (num) => {
    return num+3;
} // we can not access this function before the declaration because of hoisting