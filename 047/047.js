// create html elements
// h1.innerHTML (vulnerable to XSS attacks)
// h1.innerText (better)

const h1 = document.createElement('h1');
h1.innerHTML = '<u>Hello World!</u>';
document.body.append(h1);

// example of XSS attacks in the code
// h1.innerHTML = '<script>console.log("Doing some stuff behind the scenes...")</script>'; 

const h2 = document.createElement('h2');
const underLine = document.createElement('u');
underLine.innerText = 'Hello World!';
h2.append(underLine);
document.body.append(h2);

const h3 = document.createElement('h3');
const italic = document.createElement('i');
italic.innerText = 'Sup?';
h3.append(italic);
document.body.append(h3);

const p1 = document.createElement('p');
const bold = document.createElement('b');
bold.innerText = 'Bye....';
p1.append(bold);
document.body.append(p1);
