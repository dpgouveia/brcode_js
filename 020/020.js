// Main function
console.log("\n// Main function");

let userName = "daniel gouveia";

console.log("\nNo method chaining");
let firstLetter = userName.charAt(0);
let capitalizeFirstLetter = firstLetter.toUpperCase();
let secondLetterIndex = userName.indexOf(" ") + 1
let secondLetter = userName.charAt(secondLetterIndex);
let capitalizeSecondLetter = secondLetter.toUpperCase();
console.log("userName: " + userName);
userName = userName.replace(firstLetter, capitalizeFirstLetter);
userName = userName.replace(secondLetter, capitalizeSecondLetter);

console.log(firstLetter);
console.log(capitalizeFirstLetter);
console.log(secondLetter);
console.log(capitalizeSecondLetter);
console.log("Capitalized userName: " + userName);


console.log("\nWith method chaining");
userName = "daniel gouveia";
console.log("userName: " + userName);

userName = (userName.charAt(0).toUpperCase() + userName.slice(1, userName.indexOf(" "))) + " " + (userName.slice(userName.indexOf(" ") + 1).charAt(0).toUpperCase() + userName.slice(userName.indexOf(" ") + 2));
console.log("Capitalized userName: " + userName);

