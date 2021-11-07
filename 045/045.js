// getters and setters
// a wat to get or set the properties of an object 
// secure better data quality
// does extra things behind scenes

// Class
class userClass {

    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    } 

    set first(value) {
        this.firstName = value.toUpperCase();
    } 

    set last(value) {
        this.lastName = value.toUpperCase();
    }

    get fullname() {
        return this.firstName + ' ' + this.lastName;
    }
}

// Main function
console.log('\n// Main function');

let user  = {
    firstName : '',
    lastName  : '',
    set first(value) {
        this.firstName = value.toUpperCase();
    }, 
    set last(value) {
        this.lastName = value.toUpperCase();
    },
    get fullnameDisplay() {
        return this.firstName + ' ' + this.lastName;
    },
    fullname  : function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log('\nSetting value to an object - method 01');
user.firstName = 'Daniel';
user.lastName = 'Gouveia';
console.log(user.fullname());

console.log('\nSetting value to an object - method 02');
user.first = 'Mary';
user.last = 'Jane';
console.log(user.fullname());

console.log('\Getting value of an object - method 01');
console.log(user.fullname());
console.log(user.fullnameDisplay);

console.log('\nUsing getters and setters with classes');
let otherUser1 = new userClass('Kelia', 'Chagas');
let otherUser2 = new userClass();
otherUser2.first = 'Patrick';
otherUser2.last = 'Star';

console.log(otherUser1.fullname);
console.log(otherUser2.fullname);
