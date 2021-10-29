// Main Function
console.log("\n// Main Function");

console.log("\n// Epoch Date = Date(0)");
console.log((new Date(0)));

console.log("\n// Date(1000000)");
console.log((new Date(1000000)));

console.log("\n// Date(1000000000)");
console.log((new Date(1000000000)));

console.log("\n// Date(1000000000000)");
console.log((new Date(1000000000000)));

console.log("\n// Date(1000000000000000)");
console.log((new Date(1000000000000000)));

console.log("\n// Date()");
console.log(new Date());

console.log("\n// Date(2022, 3, 4, 18, 1, 2, 3)");
console.log(new Date(2022, 3, 4, 18, 1, 2, 3));

console.log("\n// Date(\"April 20, 2022 16:20:01:02\"");
console.log(new Date("April 20, 2022 16:20:01:02"));


console.log("\nGet date from date objects");
console.log("Date().getFullYear(): ");
console.log(new Date().getFullYear());

console.log("Date().getMonth(): ");
console.log(new Date().getMonth());

console.log("Date().getDate(): ");
console.log(new Date().getDate());

console.log("Date().getDay(): ");
console.log(new Date().getDay());

console.log("Date().getHours(): ");
console.log(new Date().getHours());

console.log("Date().getMinutes(): ");
console.log(new Date().getMinutes());

console.log("Date().getSeconds(): ");
console.log(new Date().getSeconds());

console.log("Date().getMilliseconds(): ");
console.log(new Date().getMilliseconds());


console.log("\nChange Date object value");
let date = new Date();
date.setFullYear(2023);
date.setMonth(11);
date.setDate(25);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(10);
date.setMilliseconds(500);
console.log("date = " + date);
