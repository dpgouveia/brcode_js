// Classes = A blueprint for creating objects
//           Define properties and/or methods

// Classes
class Car {
    drive() {
        console.log('You drive the car!');
    }

    brake() {
        console.log('You step on the brakes!');
    }
}

// Main function
console.log('\n// Main function');
console.log('\n// car object');
let car = new Car();
car.drive();
car.brake();

console.log('\n// anotherCar object');
let anotherCar = new Car();
anotherCar.drive();
anotherCar.brake();

console.log('\n// Creating another car objects');
let anotherCar2 = new Car();
let anotherCar3 = new Car();