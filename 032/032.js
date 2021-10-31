// Declared functions
function makeSize(size) {
    return function() {
        document.body.style.fontSize = size + "px";
    };
}

function makeFont(font) {
    return function() {
        document.body.style.fontFamily = font;
    };
}

// Main function
console.log('\n// Main function');
let size20 = makeSize(20);
let size30 = makeSize(30);
let size40 = makeSize(40);

size20();
size30();
size40();

let fontInkFree = makeFont('Ink free');
let fontElephant = makeFont('Elephant');
let fontAgencyFB = makeFont('Agency FB');
fontInkFree();
fontElephant();
fontAgencyFB();
