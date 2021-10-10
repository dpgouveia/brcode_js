// Main Function
console.log("\n// Main Function");

console.log("\nMultiple else if statements");
var grade = "f";
grade = grade.toUpperCase();
console.log("Grade value: " + grade);
if(grade == "A") { 
	console.log("You did great!");	
} else if (grade == "B") {
	console.log("You did good!");
} else if (grade == "C") {
	console.log("You did okay!");
} else if (grade == "D") {
	console.log("You... did not do that well!");
} else if (grade == "F") {
	console.log("YOU FAILED!");
} else {
	console.log(grade + ", is not a valid grade!");
}


console.log("\nCoded multiple else if statements with switch clause");
var grade = "PIZZA";
grade = grade.toUpperCase();
console.log("Grade value: " + grade);

switch(grade) {
	case "A": {
		console.log("You did great!");
		break;		
	}
	case "B": {
		console.log("You did good!");
		break;		
	}
	case "C": {
		console.log("You did okay!");
		break;		
	}
	case "D": {
		console.log("You... did not do that well!");
		break;		
	}
	case "F": {
		console.log("YOU FAILED!");
		break;		
	}
	default: {
		console.log(grade + ", is not a valid grade!");
		break;
	}
	
}
