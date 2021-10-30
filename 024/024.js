// Functions block code
function toEuros(value) {
    value = value * 0.85;
    return value;
}

// Main function
console.log('\n// Main function');

let storeUSD = [5, 6, 7, 8, 9];
let storeEUR = storeUSD.map(toEuros);
console.log(storeUSD);
console.log(storeEUR);

