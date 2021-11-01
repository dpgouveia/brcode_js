
// Main function
console.log('\n// Main function');

console.log('\n// ASCII sorting (default)');
let numbers = [3, 4, 1, 2, 5];
console.log(numbers);
numbers.sort(); // ASCII character order
console.log(numbers);

console.log();
let numbers2 = [3, 14, 1, 2, 5];
console.log(numbers2);
numbers2.sort(); // ASCII character order
console.log(numbers2);

console.log('\n// Sorting using a function');
let numbers3 = [3, 14, 1, 2, 5];
console.log(numbers3);
numbers3.sort( (n1, n2) => { return n1 - n2; } ); 
console.log(numbers3);
numbers3.sort( (n1, n2) => { return n2 - n1; } ); 
console.log(numbers3);
