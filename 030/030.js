// anonymous functions = function w/o name
//                       Often not acessible after its initial creation

// declared functions: saved for later use

// Doesn't clutter global namespace
// Usable once
// Can be passed as arguments

// IIFE = a JS function that runs as soon as it is defined
// grouping operator = ()

// Main function
console.log('\n// Main function');

console.log('Setting content on web page with anonymous function');
(function() {
    document.getElementById('myH1').innerHTML = new Date() + ' --- Hey';
})();

let task = function() {
    document.getElementById('myH1').innerHTML = new Date() + ' --- Sup?';
}
setTimeout(task, 1000);

setTimeout(
    function() { document.getElementById('myH1').innerHTML = new Date() + ' --- Whaaat?'; }
    , 2000);
