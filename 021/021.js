// Main function
console.log('\n// Main function');

console.log('\n// Regular looping code');
for(let i=1; i <= 20; i++) {
    console.log(i);
}

console.log('\n// Break statment in loop code');
for(let i=1; i <= 20; i++) {
    if(i==13) {
        break;
    }
    console.log(i);
}

console.log('\n// Continue statment in loop code');
for(let i=1; i <= 20; i++) {
    if(i==13) {
        continue;
    }
    console.log(i);
}
