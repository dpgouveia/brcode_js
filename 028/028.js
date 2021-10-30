// Main function
console.log('\n// Main function');

console.log('\nfunction declaration');
sayHello();
function sayHello() {
    console.log('Hello...');
}

console.log('\nfunction expression');
let greeting = function () {
    console.log('Hello?');
};
greeting();

console.log('\nfunction expression as argument');
function output(func) {
    func();
}
output(greeting);

console.log('\nfunction expression as argument (output in DOM)');
let greetingDOM = function() {
    document.getElementById('myH1').innerHTML = 'HELOOOOOO!!!';
};
output(greetingDOM);

console.log('\nconverting function expression as argument (output in DOM) to declaration');
let greetingBoth = 'hi...';
function outputDOM(message) {
    document.getElementById('myH1').innerHTML += '<br><br>' + message;
}
function outputConsole(message) {
    console.log(message);
}
outputDOM(greetingBoth);
outputConsole(greetingBoth);

