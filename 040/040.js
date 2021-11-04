// method overridin = a child class will use methods
//                  = with the same name that are
//                  = most closely associated with it

// Classes
class Vehicle {

    drive() {
        console.log('You drive the vehicle!');
    }

}

class Car extends Vehicle {

    drive() {
        console.log('You drive the car!');
    }

}

class RaceCar extends Car {

    drive() {
        console.log('You drive the race car!!!!');
    }

}

// Main function
console.log('\n// Main function');
let car = new Car();
car.drive();

let raceCar = new RaceCar();
raceCar.drive();

