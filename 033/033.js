// arrow function = shortcut for function expression

// Main function
console.log('\n// Main function');

console.log('\n Function Expression');
let helloFE = function() {
    return 'Hello World!';
};
console.log(helloFE());

console.log('\n Arrow function');
let helloAF = () => "Hello World!!!"; /// implict return here!!
console.log(helloAF());

console.log('\n Function Expression with 1 argument');
let helloFEA = function(message) {
    return message + ' World!'; // explicit return (due to brackets inserted in the code)
};
console.log(helloFEA('Yo'));

console.log('\n Arrow function with  1 argument');
let helloAFA = (message) => { 
    return message + " World!!!"
};
console.log(helloAFA('Yooo'));

console.log('\n Function Expression with more than 2 arguments');
let helloFEMA = function(message1, message2) {
    return message1 + ' ' + message2;
};
console.log(helloFEMA('Bro', 'Code'));

console.log('\n Arrow function with more than 2 arguments');
let helloAFMA = (message1, message2) => {
    return message1 + ' ' + message2
};
console.log(helloAFMA('Help', 'Me'));

console.log('\n Function Expression with more than 1 line of code');
let helloFEML = function(message1, message2) {
    console.log(message1);
    console.log(message2);
};
helloFEML('Don\'t', 'do it!!');

console.log('\n Arrow function with more than 1 line of code');
let helloAFML = (message1, message2) => { 
    console.log(message1);
    console.log(message2);
};
helloAFML('Help', 'Meeeee');

console.log('\n Rewriting arrow.map() with arrow function');
let storeUSD = [5, 6, 7, 8, 9];
let storeEUR = storeUSD.map( (value) => { return value *= 0.84; } );
//let storeEUR = storeUSD.map( (value) => value *= 0.84);
console.log(storeUSD);
console.log(storeEUR);

console.log('\n Rewriting arrow.filter() with arrow function');
let students = [16, 17, 18, 19, 20];
let adultStudents = students.filter( (age) => { if(age >= 18) { return age; } });
console.log('\nstudents.filter(): ');
console.log(students);
console.log(adultStudents);

console.log('\n Rewriting arrow.reduce() with arrow function');
let letters = ['H', 'E', 'L', 'P'];
console.log('\nletters:'); console.log(letters);
console.log('\nword:'); console.log(letters.reduce( (finalString, nextString) => { return finalString+ nextString; } ));
console.log('\nword in reverse (reduceRight):');console.log(letters.reduceRight( (finalString, nextString) => { return finalString+ nextString; } ));
