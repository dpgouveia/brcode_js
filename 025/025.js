// Functions block code
function checkAge(age){
    if(age >= 18) {
        return age;
    }
}

// Main function
//console.log('\n// Main function');

let students = [16, 17, 18, 19, 20];
let adultStudents = students.filter(checkAge);
let adultStudents2 = students.map(checkAge);
console.log(students);
console.log('\nstudents.filter(): ');
console.log(adultStudents);
console.log('students.map(): ');
console.log(adultStudents2);
