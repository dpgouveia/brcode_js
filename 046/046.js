// template literals = new feature in es6
//                     another way of formatting output
//                     can contain placeholders for foramtting and inserting straing/values/variables/etc
//                     
//                     ` backticks (crase)
//                     ${} placeholder
//                     
//                     Can use multiples lines
//                     embed expressions


// Main function
console.log('\n// Main function');

let first = 'Bro';
let last = 'Code';
console.log('Hello ' + first + ' ' + last + '!');

console.log('\nUsing template literal');
console.log(`Hello ${first} ${last}!`);

console.log('\nUsing template literal with breakline');
console.log(`Hello ${first} 
${last}!`);

console.log('\nUsing template literal with expression');
let price = 10;
let taxRate = 0.05;
let total;
console.log(`The price is $${price}`);
console.log(`The tax rate is ${taxRate*100}%`);
console.log(`The tax price is $${taxRate * price}`);
console.log(`The total is $${total = price + (price * taxRate) }`);

