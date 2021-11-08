// modifying html elements
// document.getElementById() (older)
// document.querySelector()  (newer, more powerful)

console.log('\nChanging html elements in js');
document.querySelector('#myButton').onclick = function () { // select element by by id use #
    const h1 = document.querySelector('#myH1');
    const underline = document.createElement('u');
    underline.innerText = 'Bye World...';
    h1.innerText = '';
    h1.append(underline);

    const p = document.querySelectorAll('.myP'); // select class name with .
    /// p[0].innerText = 'WHOOAAA!!';
    p.forEach( (element) => {element.innerText = 'WHOOAAA!!!!!'; });

    // Removing one button
    /*
    const button = document.querySelector('#myButton');
    button.remove();
    */

    // Remove all buttons
    const buttons = document.querySelectorAll('button'); //
    buttons.forEach( (element) => { element.remove(); });

}
