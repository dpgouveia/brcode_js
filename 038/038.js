// static: a method or property that belongs to a class and not any one object
//         Property of the "class"

// Classes
class Car {

    static numberOfCars = 0;

    static beginRace() {
        console.log('\nThe race has begun!');
    }

    constructor(model) {
        this.model = model;
        Car.numberOfCars++;
    }

}

// Main function
console.log('\n// Main function');
let car1 = new Car('Ford');
let car2 = new Car('Chevy');
console.log('Number of cars: ' + Car.numberOfCars);

let car3 = new Car('Challenger');
console.log('Number of cars: ' + Car.numberOfCars);

Car.beginRace();

console.log('\nOther examples using static reference in the code');
console.log(Math.PI);
console.log(Math.round);



