// This: A reference to tje object that we are currently working with

// Classes
class Car {

    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    } 

    drive() {
        console.log('You drive the ' + this.model);
    }

    brake() {
        console.log('You step on ' + this.model +  ' brakes!');
    }

    whatIsThis() {
        return this;
    }
    
}

// Main function
console.log('\n// Main function');
let car1 = new Car('Ford', 'Mustang', 2022, 'Red');
let car2 = new Car('Chevy', 'Corvette', 2021, 'Blue');
console.log('Car 1');
console.log(car1.whatIsThis());

car1.drive();
car2.brake();

console.log(this);
