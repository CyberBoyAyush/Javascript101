// Functions in javascript

// basic function for saying hello
function sayhello(){
    console.log("hello");
}

sayhello();

// adding two numbers
function add(a,b){
    return a+b;
}

console.log(add(5,5));

// taking input from user
function greet(name){
    return `hello ${name}`;
}

console.log(greet("Ayush"));

// Login function with default parameters
function login(username="admin",password="admin"){
    return `username: ${username}, password: ${password}`;  
}

console.log(login());


// Rest parameters
function sum(...args){
    let sum = 0;
    for(let i = 0; i<args.length; i++){
        sum += args[i];
    }
    return sum;
}

console.log(sum(1,2,3,4,5,100));

// Rest parameters are used to pass a variable number of arguments to a function. It is similar to the arguments object in JavaScript.


// passing objects in function
const sigma = {
    name :"ayush",
    power:"coding"
}

function alphamale(obj){
    return `name: ${obj.name} , ${obj.power}`;
}

console.log(alphamale(sigma));