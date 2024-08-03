// Some more study about arrays

const marvel_heroes = ["ironman", "captain america"];

const dc_heroes = ["batman", "superman", "flash"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);

// push() method adds the whole array as an element to the array.

// concat() method is used to concatenate two arrays.
// const combined_heroes = marvel_heroes.concat(dc_heroes);
// console.log(combined_heroes);

// Spread Operator is used to concatenate two arrays.
const combined_heroes_spread = [...marvel_heroes, ...dc_heroes];
console.log(combined_heroes_spread);

// flat() method is used to flatten the array.
const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(2));

// this method is used to flatten the array upto the given depth. If the depth is not given, it flattens the array upto 1 level. Recursive depth is 1 by default.

// Creating array from a string
const str = "hello";
console.log(Array.from(str));

// Creating arrays from objects
const obj = {
    name: "Ayush"
}
console.log(Array.from(obj));

// the above returns an empty array. as it does not know on which bases we want to create an array.

// array of operator
const score1 = 100;
const score2 = 200;
const score3 = 500;

const final_score = Array.of(score1,score2,score3);
console.log(final_score); // Array.of() method is used to create an array of the given arguments.

for(let i = 0 ; i<final_score.length; i++){
    console.log(final_score[i])
}
