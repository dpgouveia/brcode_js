// inheritance = useful for code resuability
//             = Reuse properties and methods of an existing class
//             = Children classes inherit from parent class

// Classes
class Animal {

    constructor() {
        this.alive = true;
    }

    eat() {
        console.log('This animal is eating!');
    }

}

class Rabbit extends Animal {

    run() {
        console.log('This rabbit is running!');
    }

}

class Fish extends Animal {

    swim() {
        console.log('This fish is swimming!');
    }

}

class Hawk extends Animal {
    
    fly() {
        console.log('This hawk is flying!');
    }
}

// Main function
console.log('\n// Main function');

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();
console.log(rabbit.alive);
rabbit.eat();

console.log('\nSpecific code for objects instances');
rabbit.run();
fish.swim();
hawk.fly();

