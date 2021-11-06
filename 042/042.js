// object ass arguments 

// Classes
class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color
    }
}

function changeColor(car, newColor) {
    car.color = newColor;
}

// Main function
console.log('\n// Main function');

let car1 = new Car('Corvette', 'Blue');
let car2 = new Car('Mustang', 'Red');

console.log('Car1 : ' + car1.model + ' | ' + car1.color);
console.log('Car2 : ' + car2.model + ' | ' + car2.color);

console.log('\nChange colors: ')
changeColor(car1, 'Purple');
changeColor(car2, 'Pink');
console.log('Car1 : ' + car1.model + ' | ' + car1.color);
console.log('Car2 : ' + car2.model + ' | ' + car2.color);
