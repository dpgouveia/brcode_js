// Function
function getRandomNumbers(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Main function
console.log("\n// Main function");

var randomNumber;

randomNumber = Math.random();
console.log("Math.random() = " + randomNumber);

randomNumber = Math.random() * 6;
console.log("Math.random() * 6 = " + randomNumber);

randomNumber = Math.floor(Math.random() * 6); // random number between 0 - 5
console.log("Math.random() * 6 = " + randomNumber);

randomNumber = Math.floor(Math.random() * 6) + 1; // random number between 1 - 6
console.log("Math.floor(Math.random() * 6) + 1 = " + randomNumber);

randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Math.floor(Math.random() * 100) + 1 = " + randomNumber);

console.log("\nUsing our function to generate random numbers");
randomNumber = getRandomNumbers(1,6);
console.log("getRandomNumbers(1,6) = " + randomNumber);
randomNumber = getRandomNumbers(1,6);
console.log("getRandomNumbers(1,6) = " + randomNumber);
randomNumber = getRandomNumbers(1,6);
console.log("getRandomNumbers(1,6) = " + randomNumber);
randomNumber = getRandomNumbers(1,100);
console.log("getRandomNumbers(1,100) = " + randomNumber);
randomNumber = getRandomNumbers(1,100);
console.log("getRandomNumbers(1,100) = " + randomNumber);
randomNumber = getRandomNumbers(1,100);
console.log("getRandomNumbers(1,100) = " + randomNumber);
