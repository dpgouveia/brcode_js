// integer
var age = 21;
console.log("You age is: " + age);

// string
var firstName = "Daniel"
var lastName = "Gouveia"
console.log("Hello " + firstName + " " + lastName + "!!");

// boolean
var onlineStatus = true;
console.log("Are you online? " + onlineStatus);

// defined in runtime execution
var whatever;
whatever = "Code";
console.log("Whatever content: " + whatever);

whatever = null;
console.log("Whatever content: " + whatever);

whatever = age + 1;
console.log("Whatever content: " + whatever);

var fullName = firstName + " " + lastName;
console.log("Hello " + fullName + "!!");

// let - declare variables with limited scope (probably variable type)
let letVariable = 100;
console.log("letVariable: " + letVariable);

// const - create a constant value
const piVal = 3.14159;
console.log("pi value: " + piVal);
piVal = 3.14;
console.log("pi value: " + piVal);


