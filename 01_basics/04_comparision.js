// comparision in javascript

let num = 5;
let str = "5";
let bool = true;
let undef;
let nul = null;

console.table({ num, str, bool, undef, nul });

// equality
console.log(num == str); // loose equality -> only compares values and also converst the values
console.log(num === str); // strict equality -> also compares data types

console.log(num == bool);
console.log(num === bool);

console.log(undef == nul);
console.log(undef === nul);

console.log("\n");
// inequality
console.log(num != str); // loose inequality
console.log(num !== str); // strict inequality

console.log(num != bool);
console.log(num !== bool);

console.log(undef != nul);
console.log(undef !== nul);

console.log("\n");

// greater than
console.log(num > str);
console.log(num > bool);

// greater than or equal to
console.log(num >= str);
console.log(num >= bool);

// less than
console.log(num < str);
console.log(num < bool);

// less than or equal to
console.log(num <= str);

console.log(num <= bool);

// compare null and undefined
console.log(nul == undef);
console.log(nul === undef);


// when we do >= or <= both the < , > on backend works diff than == and === . < and > converts the string to number and then compares the values. But == and === compares the values as it is.