// Objects in javascript -> using literals

// Objects in javascript are a collection of key-value pairs.

const mySym = Symbol("id");
const JSUser = {
    name: "Ayush",
    age: 22,
    isStudent: true,
    isLogged: false,
    courses: ["React", "Node", "MongoDB"],
    // using symbols as keys
    [mySym]: 123
}

console.log(JSUser);

// Accessing the properties of an object
console.log(JSUser.name);
console.log(JSUser.age);
console.log(JSUser.isStudent);
console.log(JSUser.isLogged);
console.log(JSUser.courses);
console.log(JSUser[mySym]);


// Adding new properties to an object
JSUser.email = "ayush@gmail.com";
console.log(JSUser);

// Freezing an object
// Object.freeze(JSUser);
// JSUser.name = "Ayush Kumar";
// console.log(JSUser); // name is not changed as the object is frozen.

// Using functions in objects
JSUser.greetings = function () {
    console.log(`Hello, ${this.name}`);
}

console.log(JSUser);
console.log(JSUser.greetings()); // prints the message.
console.log(JSUser.greetings); // send us the reference of the function.

// deleting a property from an object
delete JSUser.greetings;
console.log(JSUser);