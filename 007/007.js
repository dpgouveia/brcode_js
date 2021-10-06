var human = {
	name: "Daniel",
	age: 37,

	eat: function() {
		console.log(this.name + " is eating food!");
	},

	drink: function() {
		console.log(this.name + " is drinking alcohol and *burp*...");
	},

	sleep: function() {
		console.log(this.name + " has passed out")
	}

};

var human2 = {
	name: "Rick",
	age: 16,

	eat: function() {
		console.log(this.name + " is eating food!");
	},

	drink: function() {
		console.log(this.name + " is drinking water");
	},

	sleep: function() {
		console.log(this.name + " is asleep")
	}

};


// Main function
console.log("// Main function");
console.log(human);

// dot notation
console.log("\nDot notation");
console.log(human.name); 
console.log(human.age);

// bracket notation
console.log("\nBracket notation");
console.log(human['name']);
console.log(human['age']);

// calling function
console.log("// calling function");
human.eat();
human.drink();
human.sleep();

// creating another object
console.log("// creating another object");
human2.eat();
human2.drink();
human2.sleep();
