function sayHello1() {
	console.log("");
	console.log("Hello!");
	console.log("Have a nice day!");
	console.log("Goodbye!");
}

function sayHello2() {
	console.log("");
	console.log("Hello " + myName + " !!!");
}

function sayHello3(myName) {
	console.log("");
	console.log("Hello " + myName + " !!!");
}

function sayHello4(myName, myAge) {
	console.log("");
	console.log("Hello " + myName + " !!!");
	console.log("You are " +  myAge + " years old!");
}

function sayHello5(name, age) {
	console.log("");
	console.log("Hello " + name + " !!!");
	console.log("You are " + age + " years old!");
}

function toCelsius(fahrenheit) {
	var result = (fahrenheit-32) * (5/9); 
	return result;	
}

function toFahrenheit(celsius) {
	var result = celsius * 9/5 + 32; 
	return result;	
}


/* in function perspective, this is a global scope variables */
var myName = "Bro";


/* main code */
sayHello1();
sayHello2();
sayHello3("Daniel");
sayHello4("Daniel", 37);
sayHello5("Kélia", 34);

var fahrenheit = 100;
console.log("\nConverting " + fahrenheit  + " to celsius: " + toCelsius(fahrenheit));

var celsius = 37.777777;
console.log("\nConverting " + celsius  + " to fahrenheit: " + toFahrenheit(celsius));
