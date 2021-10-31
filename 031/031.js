// closure  = a function with preserved data
//            give you access to an outer functions scope from an inner function
//            

//            State of variables in outer scope are "saved"
//            Variables in outer scope are considered "private"

// Main function
console.log('\n// Main function');

console.log('\n// Example');
let points = 0;
let score = function() {
    return points += 1;
};
console.log('Score: ' + score());
console.log('Score: ' + score());
console.log('Score: ' + score());

console.log('\n// There is a problem with this code: someone could pottentially change points value from global scope');
points = 100;
console.log('Score: ' + score());
console.log('Score: ' + score());
console.log('Score: ' + score());

// Move points value to score function
console.log('\n// Move points value to score function');
let newScore = function() {
    let points = 0;
    return points += 1;
};

console.log('Score: ' + newScore());
console.log('Score: ' + newScore());
console.log('Score: ' + newScore());
console.log('Points from global scope ' + points);
console.log('\n// But there is another problem: since points its function scoped variable we cant acumulate points on futher calls of score function');

console.log('\n// Creating a closure function to "preserve" data');
let newScore2 = function() {
    let points = 0;
    return function() {
        points += 1;
        return points;
    };
}();
console.log('Score: ' + newScore2());
console.log('Score: ' + newScore2());
console.log('Score: ' + newScore2());
console.log('Points from global scope ' + points);
