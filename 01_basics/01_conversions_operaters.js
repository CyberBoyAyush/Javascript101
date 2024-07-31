// conversions in javascript

let num = 5;
let str = "5";
let bool = true;
let undef;
let nul = null;
let obj = { name: "Ayush" };

console.table({ num, str, bool, undef, nul, obj });

// Number to String
console.log(num.toString());
console.log(String(num));
console.log(num + "");


// String to Number
console.log(Number(str));
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(+str);

// Boolean to Number
console.log(Number(bool));
console.log(+bool);


// Undefined to Number
console.log(Number(undef));
console.log(+undef);

// Null to Number
console.log(Number(nul));
console.log(+nul);

// Object to String
console.log(obj.toString());
console.log(JSON.stringify(obj));


// Operators in JavaScript
console.log("\n")
// addition
console.log(5 + 5);
console.log("5" + "5");
console.log(5 + "5");
console.log("5" + 5);

console.log("\n")
// subtraction
console.log(5 - 5);
console.log("5" - "5");
console.log(5 - "5");
console.log("5" - 5);

console.log("\n")
// multiplication
console.log(5 * 5);
console.log("5" * "5");
console.log(5 * "5");
console.log("5" * 5);

console.log("\n")

// division
console.log(5 / 5);
console.log("5" / "5");
console.log(5 / "5");
console.log("5" / 5);

console.log("\n")

// modulus
console.log(5 % 5);
console.log("5" % "5");
console.log(5 % "5");
console.log("5" % 5);

console.log("\n")

// exponentiation
console.log(5 ** 5);
console.log("5" ** "5");
console.log(5 ** "5");
console.log("5" ** 5);

console.log("\n")

// increment
let a = 5;
console.log(a++);
console.log(a);

console.log("\n")

// decrement
let b = 5;
console.log(b--);
console.log(b);

