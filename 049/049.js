console.log('\nChanging css properties from js');

document.querySelector('#myButton').onclick = function() {

    const h1 = document.querySelector('#myH1');
    console.log(h1);
    console.log(h1.style); // checking current style from html element

    // h1.style.color = 'blue';
    h1.style.color = '#00FF00';
    h1.style.backgroundColor = 'black';
    h1.style.fontFamily = 'Consolas';
    h1.style.textAlign = 'center';
    h1.style.border = '4px solid';
    h1.style.borderColor = 'blue';

}
