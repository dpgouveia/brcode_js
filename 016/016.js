// Events
// calculo da hipotenusa de triangulo c = sqrt(pow(a,2) + pow(b,2))
document.getElementById("buttonSubmit").onclick = function () {
	var a = document.getElementById("numberAVal").value;
	var b = document.getElementById("numberBVal").value;
	
	console.log("A: " + a);
	console.log("B: " + b);
	if(a !== '' && b !== '') {
		
		document.getElementById("myOutput").innerHTML = "";
		c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
		document.getElementById("myOutput").innerHTML += "Math.sqrt(Math.pow(a,2) + Math.pow(b,2)) = " + c;
		document.getElementById("myOutput").innerHTML += "<br>";
		c = Math.hypot(a, b);
		document.getElementById("myOutput").innerHTML += "Math.hypot(a, b) = " + c;
		
	} else {
		
		document.getElementById("myOutput").innerHTML = "One of the variables were not defined!";
		
	}
}

// Main function
console.log("\n// Main function");

// Math functions
var myNum;

console.log("\n// Math.round()");
myNum = Math.round(3.3);
console.log("Math.round(3.3): " + myNum);
myNum = Math.round(3.7);
console.log("Math.round(3.7): " + myNum);

myNum = Math.floor(3.9);
console.log("Math.floor(3.9): " + myNum);

myNum = Math.ceil(3.1);
console.log("Math.ceil(3.1): " + myNum);

myNum = Math.pow(3,2);
console.log("Math.pow(3,2): " + myNum);

myNum = Math.sqrt(64);
console.log("Math.sqrt(64): " + myNum);

myNum = Math.abs(-2);
console.log("Math.abs(-2): " + myNum);

myNum = Math.min(1,5,2,4,3);
console.log("Math.min(1,5,2,4,3): " + myNum);

myNum = Math.max(1,5,2,4,3);
console.log("Math.max(1,5,2,4,3): " + myNum);

myNum = Math.PI;
console.log("Math.PI: " + myNum);
myNum = Math.E;
console.log("Math.E: " + myNum);


