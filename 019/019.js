// Main function
console.log("\n// Main function");

var myName = "Bro Code";
var myNameWithSpaces = "   Bro Code   ";
var myNameWithTwoSurnames = "Bro The Code";
console.log("myName = " + myName);
console.log("myName.length = " + myName.length);
console.log("myName.charAt(0) = " + myName.charAt(0));
console.log("myName.charAt(2) = " + myName.charAt(2));
console.log("myName.indexOf(\" \") = " + myName.indexOf(" "));
console.log("myName.lastIndexOf(\"o\") = " + myName.lastIndexOf("o"));
console.log("myNameWithSpaces = " + myNameWithSpaces);
console.log("myNameWithSpaces.trim() = " + myNameWithSpaces.trim());
console.log("myName.toUpperCase() = " + myName.toUpperCase());
console.log("myName.toLowerCase() = " + myName.toLowerCase());


var firstName = myName.slice(0,3);
console.log("firstName = " + firstName);
firstName = myName.slice(0, myName.indexOf(" "));
console.log("slice with myName.indexOf(\" \") = " + firstName);

var lastName = myName.slice(myName.indexOf(" "))
console.log("lastName = " + lastName);
console.log("myNameWithTwoSurnames = " + myNameWithTwoSurnames);
console.log("myNameWithTwoSurnames.slice(myNameWithTwoSurnames.lastIndexOf(\" \")) = " + myNameWithTwoSurnames.slice(myNameWithTwoSurnames.lastIndexOf(" ")));


var myStreet = "123 Fake st.";
var myCity = "Nowhere XY 12345";
var myAddress = myStreet.concat(" ", myCity);
console.log("My Address is: " + myAddress);


var myPhone = "123-456-7890";
console.log("Phone: " + myPhone);
console.log("myPhone.replace(/-/g, \"\"): " + myPhone.replace(/-/g, "")); // node js does not support replaceAll function

