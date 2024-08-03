// Objects in javascript -> using constructors

const JSUser = new Object();

JSUser.name = "Sam Boxer";
JSUser.age = 22;
JSUser.isStudent = true;

console.log(JSUser);

// Nested objects
JSUser.address = {
    city: "New York",
    country: "USA"
}

console.log(JSUser.address.country);

// conbining objects
const obj1 = {
    name: "Ayush"
}
const obj2 = { name2: "Boxer" }

const obj3 = Object.assign(obj1, obj2);
console.log(obj3);

// we preferably use spread operator to combine objects.
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);


// Key retrieval
console.log(Object.keys(obj4));