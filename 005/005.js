document.getElementById("buttonSubmit").onclick = function () {
	var age = document.getElementById("textAge").value;
	console.log("typeof age: " + typeof age);
	age += 1;
	console.log("Happy Birthday: " + age);

	// converting to number
	age = Number(document.getElementById("textAge").value);
	console.log("typeof age: " + typeof age);
	age += 1;
	console.log("Happy Birthday: " + age);

	// convert Number to string
	var piValue = String(3.14);
	console.log("typeof piValue: " + typeof piValue);
	console.log("PI Value: " + piValue);

	// convert Number and String to Booleans
	var bolValue = Boolean(0);
	console.log("0");
	console.log("typeof bolValue: " + typeof bolValue);
	console.log("Boolean Value: " + bolValue);

	var bolValue = Boolean("");
	console.log("empty string");
	console.log("typeof bolValue: " + typeof bolValue);
	console.log("Boolean Value: " + bolValue);

	var bolValue = Boolean(null);
	console.log("null");
	console.log("typeof bolValue: " + typeof bolValue);
	console.log("Boolean Value: " + bolValue);

	var bolValue = Boolean(undefined);
	console.log("undefined");
	console.log("typeof bolValue: " + typeof bolValue);
	console.log("Boolean Value: " + bolValue);

	var bolValue = Boolean(NaN);
	console.log("NaN");
	console.log("typeof bolValue: " + typeof bolValue);
	console.log("Boolean Value: " + bolValue);

	var bolValue = Boolean(1);
	console.log("1");
	console.log("typeof bolValue: " + typeof bolValue);
	console.log("Boolean Value: " + bolValue);

	var bolValue = Boolean("false");
	console.log("string with false value");
	console.log("typeof bolValue: " + typeof bolValue);
	console.log("Boolean Value: " + bolValue);

	var bolValue = Boolean("pizza");
	console.log("string with pizza value");
	console.log("typeof bolValue: " + typeof bolValue);
	console.log("Boolean Value: " + bolValue);

}
