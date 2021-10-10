
// Main Function
console.log("\n// Main Function");

var ccNumber = "";
while(ccNumber == "") {
	ccNumber = window.prompt("YOUR COMPUTER HAS A VIRUS!! ENTER YOUR CREDIT CARD NUMBER ... OR ELSE!");	
}

console.log("THANK YOU! YOUR COMPUTER DOES NOT HAVE A VIRUS!!");

ccNumber = "";
do {
	ccNumber = window.prompt("ANOTHER VIRUS!! ENTER YOUR CREDIT CARD NUMBER ... OR ELSE!");	
} while(ccNumber = "")

console.log("THANK YOU! YOUR COMPUTER DOES NOT HAVE A VIRUS ANYMORE!!");