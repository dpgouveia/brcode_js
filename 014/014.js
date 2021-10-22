// for in loop 


// main function
console.log("\n// main function");

// Traditional for loop
console.log("\n// Traditional for loop");
let letters = ["H", "E", "L", "P"];
for(let i = 0; i < letters.length; i++) {
	console.log(letters[i]);
}


// For in loop
console.log("\n// For in loop");
for(let i in letters) {
	console.log(letters[i]);
}


// For in loop in objects
console.log("\n// For in loop in objects");
let car = {
	make: "Chevy",
	model: "Corvette",
	year: 2022,
	color: "blue"
};
for(let i in car) {
	console.log(car[i]);
}


