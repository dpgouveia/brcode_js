// super = A reference to the parent class (super class)
//       = Very similar to "this" keyword
//       = Can use a super classes: constructor methods

// Classes
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    welcome() {
        console.log('Hello ' + this.name);
        console.log('You are ' + this.age + ' years old');
    }

}

class Student extends Person {

    constructor(name, age, gpa) {
        super(name, age);
        this.gpa = gpa;
    }

    welcome() {
        super.welcome();
        console.log('Your gpa is ' + this.gpa);
    }

}

class Teacher extends Person {

    constructor(name, age, classSize) {
        super(name, age);
        this.classSize = classSize;
    }

    welcome() {
        super.welcome();
        console.log('Your class size is ' + this.classSize);
    }

}


// Main function
console.log('\n// Main function');
let student = new Student('Daniel', '21', '2.0');
let teacher = new Teacher('Bob', '45', 30);

console.log('Student = ' + student.name + ' | ' + student.age + ' | ' + student.gpa);
console.log('Teacher = ' + teacher.name + ' | ' + teacher.age + ' | ' + teacher.classSize);

console.log();
student.welcome();
teacher.welcome();
