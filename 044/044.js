// array of objects

// Functions
function jump() {
    console.log('You jump!');
}

function punch() {
    console.log('You punch!');
}

function kick() {
    console.log('You kick!');
}

function block() {
    console.log('You block!');
}

// Main function
console.log('\n// Main function');
let actions = [jump, punch, kick, block];

console.log('\nIterate over actions array - method 01');
for(i in actions) {
    actions[i]();
}

console.log('\nIterate over actions array - method 02');
let arrowFunction = function(cfunc) { cfunc(); };
actions.forEach(arrowFunction);

console.log('\nIterate over actions array - method 03');
actions.forEach( (cfunc) => { cfunc(); } );
