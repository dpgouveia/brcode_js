// Constructors: A special method for assigning properties
//               Automatically called when creating an object

// Classes
class Car {

    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    } 

    drive() {
        console.log('You drive the car!');
    }

    brake() {
        console.log('You step on the brakes!');
    }
    
}

// Main function
console.log('\n// Main function');
let car1 = new Car('Ford', 'Mustang', 2022, 'Red');
let car2 = new Car('Chevy', 'Corvette', 2021, 'Blue');
console.log('Car 1: ' + car1.make + ' | ' + car1.model + ' | ' + car1.year + ' | ' + car1.color);
console.log('Car 2: ' + car2.make + ' | ' + car2.model + ' | ' + car2.year + ' | ' + car2.color);
