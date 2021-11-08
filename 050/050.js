// mouse events
// element.addEventListener(type, function)

console.log('\nMouse events in javascript');

const div = document.querySelector('#myDiv');
div.style.backgroundColor = 'grey';
div.style.width = '200px';
div.style.height = '200px';

/*
// div.addEventListener('click', (element) => { console.log(element); } );
div.addEventListener('click', (element) => { 
    console.log('You clicked the mouse!'); 
    div.style.backgroundColor = 'yellow';
} );
*/

/*
div.addEventListener('mousedown', (element) => { 
    console.log('You hold the mouse down!'); 
    div.style.backgroundColor = 'red';
} );

div.addEventListener('mouseup', (element) => { 
    console.log('You let go of the mouse!'); 
    div.style.backgroundColor = 'grey';
} );
*/

/*
div.addEventListener('dblclick', (element) => { 
    console.log('You double clicked!!'); 
    if(div.style.backgroundColor == 'purple') {
        div.style.backgroundColor = 'grey';
    } else {
        div.style.backgroundColor = 'purple';
    }
} );
*/

div.addEventListener('contextmenu', (element) => { 
    console.log('You opened the context menu!!'); 
} );

/*
div.addEventListener('mouseover', (element) => { 
    console.log('You entered the square!!'); 
    div.style.backgroundColor = 'green';
} );

div.addEventListener('mouseleave', (element) => { 
    console.log('You left the square!!'); 
    div.style.backgroundColor = 'grey';
} );
*/

div.addEventListener('mousemove', (element) => { 
    console.log('You are within the square!!'); 
} );
