
var cars = ["Mustang", "Corvette", "Jaguar"];

// Main function
console.log("\n// Main function");
console.log("cars array length: " + cars.length);
console.log("cars array content: " + cars);
console.log("car[0]: " + cars[0]);
console.log("car[1]: " + cars[1]);
console.log("car[2]: " + cars[2]);
console.log("ERROR: car[3]: " + cars[3]);


// Add element
console.log("\n// Add element");
cars.push("Tesla");
console.log("cars array length: " + cars.length);
console.log("cars array content: " + cars);

// Remove last array element 
console.log("\n// Remove last array element");
cars.pop();
console.log("cars array length: " + cars.length);
console.log("cars array content: " + cars);

// Array length
console.log("\n// Array length");
var numCars = cars.length;
console.log("cars array length: " + numCars);

// Sort array
console.log("\n// Sort array");
console.log("Unsorted array: " + cars);
cars.sort();
console.log("Sorted array: " + cars);
cars.reverse();
console.log("Reverse sorted array: " + cars);

// Access last element of the array
console.log("\n// Access last element of the array");
console.log("cars array content: " + cars);
console.log("Last element of the array: " + cars[cars.length-1]);
cars.push("Fiat");
console.log("cars array content: " + cars);
console.log("Last element of the array: " + cars[cars.length-1]);
