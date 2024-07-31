// Strings in JavaScript
// Strings are a sequence of characters enclosed in single or double quotes.

// Strings can be created using the following syntax:
let str1 = "Hello, World!";
let str2 = 'To Programming';

console.log(str1); // Printing the string
console.log(str2); // Printing the string

console.log("\n");

// Strings can be concatenated using the + operator:
console.log(str1 + " " + str2); // Concatenating the strings

// alternative string creation
let str3 = new String("Ayush Sharma");
console.log(str3);

console.log(`we have 3 strings here str 1: ${str1} and str2 : ${str2} and str3 : ${str3}`);

// some string functions of javascript

// 1. length
console.log(str3.length); // returns the length of the string

// 2. toUpperCase
console.log(str3.toUpperCase()); // converts the string to uppercase

// 3. CharAt
console.log(str3.charAt(4)); // returns the character at the specified index

// 4. indexOf
console.log(str3.indexOf('h')); // returns the index of the specified character

// 5. substring
console.log(str3.substring(0, 5)); // returns the substring from the specified index -> this does not include the end index , it cannot contains negative values

// 6 . Slice
console.log(str3.slice(-8, 5)); // returns the substring from the specified index -> this does include the end index , it can contains negative values

// 7. replace
console.log(str3.replace("Sharma","sharmaji")); // replaces the specified string with the new string

// 8. split
console.log(str3.split(" ")); // splits the string into an array of substrings

// 9. includes
console.log(str3.includes("Sharma")); // returns true if the string contains the specified string

// 10. startsWith
console.log(str3.startsWith("Ayush")); // returns true if the string starts with the specified string

// 11. endsWith
console.log(str3.endsWith("Sharma")); // returns true if the string ends with the specified string

// 12. trim
let str4 = "    Ayush Sharma    "; 
console.log(str4.trim()); // removes the extra spaces from the string fron left and right

// A y u s h   S h a r m a 
// 0 1 2 3 4 5 6 7 8 9 10 11