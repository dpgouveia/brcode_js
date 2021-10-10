
// Main function
console.log("\n// Main function");

console.log("\n// && Operator");
var temperature = 15;
console.log("temperature = " + temperature);
if(temperature > 30) {
	console.log("Its HOT outside!");
} else {
	console.log("Its COLD outside!");
}

var temperature = 23;
console.log("\ntemperature = " + temperature);
if(temperature > 30) {
	console.log("Its HOT outside!");
	
} else if(temperature > 10 && temperature <= 30) {
	console.log("Its WARM outside!");
} else {
	console.log("Its COLD outside!");
}

var temperature = -10;
console.log("\ntemperature = " + temperature);
if(temperature > 30) {
	console.log("Its HOT outside!");
	
} else if(temperature > 10 && temperature <= 30) {
	console.log("Its WARM outside!");
} else {
	console.log("Its COLD outside!");
}


console.log("\n// || Operator");

var hour = 20 // military time
console.log("Military time: " + hour);
if(hour < 6 || hour >= 20) {
	console.log("Its DARK outside!");	
} else {
	console.log("Its LIGHT outside!");
}

var hour = 8 // military time
console.log("Military time: " + hour);
if(hour < 6 || hour >= 20) {
	console.log("Its DARK outside!");	
} else {
	console.log("Its LIGHT outside!");
}


var hour = 5 // military time
console.log("Military time: " + hour);
if(hour < 6 || hour >= 20) {
	console.log("Its DARK outside!");	
} else {
	console.log("Its LIGHT outside!");
}


console.log("\n// ! Operator");

document.getElementById("buttonSubmit").onclick = function () {
	var myName = document.getElementById("textName").value;
	if(myName == "") {
		console.log("You did not enter your name");
	}
	
	if(!(myName == "")) {
		console.log("Hello " + myName);
	} else {
		console.log("You did not enter your name again");
	}
	
}
