// Memory types in javascript

// Stack Memory -> primitives data types are stored in stack memory
// Heap Memory -> reference data types are stored in heap memory

// Stack Memory
let num = 10;
let str = "Hello";
let bool = true;
let undef;
let nul = null;

console.table({ num, str, bool, undef, nul });

// Heap Memory
let obj = { name: "Ayush" };
console.table({ obj });


// the changes we do in stack memory are directly reflected in the stack memory. But the changes we do in heap memory are not directly reflected in the heap memory. We need to reassign the value to the variable to reflect the changes in heap memory.