// Functions block code
function combineLetters(total, nextLetter) {
    return total + nextLetter;
}

// Main function
console.log('\n// Main function');

let letters = ['H', 'E', 'L', 'P'];
console.log('\nletters:'); console.log(letters);
console.log('\nword:'); console.log(letters.reduce(combineLetters));
console.log('\nword in reverse (reduceRight):');console.log(letters.reduceRight(combineLetters));
