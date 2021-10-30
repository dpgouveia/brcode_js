// Functions block code
function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    document.getElementById('myH1').innerHTML += output;
}

function setMessage(text) {
    message = text;
    return message;
}

function setMessage2(text) {
    message = text;
    displayConsole(message);
}

function newSetMessage(text, callBack) {
    message = text;
    callBack(message);
}

// Main function
console.log('\n// Main function');
let message = '';

console.log('Bad approach');
displayConsole(setMessage('Hi Mom!'));
displayDOM(setMessage('Hi Mom!'));

console.log('"So so.." approach');
setMessage2('Hi brother!');

newSetMessage('<br><br>Callback approach<br>Hi Dad!', displayDOM)
