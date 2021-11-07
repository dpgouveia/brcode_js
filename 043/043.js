// array of objects

// Classes
class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color
    }

    drive() {
        console.log('You drive the ' + this.model);
    }
}

// Main function
console.log('\n// Main function');

let car1 = new Car('Corvette', 'Blue');
let car2 = new Car('Mustang', 'Red');
let car3 = new Car('Lambo', 'Yellow');
let garage = [car1, car2, car3];

for(i in garage) {
    console.log('Car data: ' + garage[i].model + ' | ' + garage[i].model);
}

for(i in garage) {
    garage[i].drive();
}

