// IIFE : Immediately Invoked Function Expression
// these are the functions that are executed as soon as they are defined.
// we use IIFE to avoid polluting the global scope.

// Example of IIFE
(function(){
    console.log("Hello World");
})();

// ()() is used to call the function immediately after defining it.

( (name) => {
    console.log(`${name}`);
} ) ("Ayush");
// in above function we are passing the name as an argument to the function.
