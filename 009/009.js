// Main function
console.log("\n// Main function");

console.log("\n// IF statement");
var age = 18;
console.log("Age value: " + age);
if(age >= 18) {
	console.log("You are an adult!");
}

console.log("\n// When there is not ELSE statement");
age = 12;
console.log("Age value: " + age);
if(age >= 18) {
	console.log("You are an adult!");
} 
 

console.log("\n// ELSE statement");
age = 12;
console.log("Age value: " + age);
if(age >= 18) {
	console.log("You are an adult!");
} else {
	console.log("You are a child!");
}


console.log("\n// Multiple IF statements (ERROR)");
age = 67;
console.log("Age value: " + age);
if(age >= 18) {
	console.log("You are an adult!");
} else if(age >= 65 ) {
	console.log("You are a senior!");
} else {
	console.log("You are a child!");
}


console.log("\n// Multiple IF statements (OK)");
age = 67;
console.log("Age value: " + age);
if(age >= 65) {
	console.log("You are an senior!");
} else if(age >= 18 ) {
	console.log("You are a adult!");
} else {
	console.log("You are a child!");
}


console.log("\n// Multiple IF statements (OK 2)");
age = -2;
console.log("Age value: " + age);
if(age >= 65) {
	console.log("You are an senior!");
} else if(age >= 18 ) {
	console.log("You are a adult!");
} else if (age >= 0) {
	console.log("You are a child!");
} else {
	console.log("You haven't been born yet!");
}


console.log("\n// Example: check online status");
var online = true;
console.log("Oneline value: " + online);
if(online == true) {
	console.log("Bro is online!");
} else {
	console.log("Bro is offline!");
}

var online = false;
console.log("Oneline value: " + online);
if(online) {
	console.log("Bro is online!");
} else {
	console.log("Bro is offline!");
}
