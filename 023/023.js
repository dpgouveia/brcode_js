// Functions block code
function checkOut(element) {
    total += element;
}

// Main function
console.log('\n// Main function');

let total = 0;
let cart = [5, 6, 7, 8, 9];

cart.forEach(checkOut);
console.log('Your total is $' + total);
