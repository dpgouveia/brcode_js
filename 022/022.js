
// scope = where a variable is accessible

// let = declare variables with a block scoped {}
// var = declare variables with a function scoped ()

// Function block code
function doSomething() {
    for(var j=0; j <= 3; j++) {
        console.log(j);
    }
}

// Main function
console.log('\n// Main function');

console.log('\nvariable with block scope');
for(let i = 1; i <= 3; i++) {
    console.log(i);
}
//console.log(i); // i does not exist outside of for block code

console.log('\nvariable with function scope');
for(var i = 1; i <= 3; i++) {
    console.log(i);
}
console.log(i); // i does not exist outside of for block code

console.log('\nvariable with block scope in a function');
doSomething();
//console.log(j); // j does not exist outside of doSomething function

console.log('\nChecking if var variable could be override behind scenes');
console.log('\nChanging "name" content variable with var from window object (check in console on browser)');
//var name = "Undesired change!";

console.log('\nChanging "name" content variable with let from window object (check in console on browser)');
let name = 'Undesired change!';