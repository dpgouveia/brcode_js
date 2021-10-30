// nested function = functions inside other functions
//                   Outer functions have access to inner functions
//                   Inner functions are "hidden"   from outside the scope 
//                   used in closures (futuro video topic)

// Main function
console.log('\n// Main function');

function login() {
    let userName = "brdpg1";
    function displayUserName() {
        console.log('Hello ' + userName + ' !!!!');
    }
    function displayUserInBox() {
        console.log('You have ', userName, ' new messages');
    }

    displayUserName();
    displayUserInBox();
}
login();

// Trying to call functions outside of the scope of global function
// this will thrown an error
// displayUserName();
// displayUserInBox();
