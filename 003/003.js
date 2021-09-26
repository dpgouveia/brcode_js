/**
 *
 */
var friends = 10;
console.log("friends: " + (friends + 1));

console.log("friends: " + (friends - 1));

console.log("friends: " + (friends * 2));

console.log("friends: " + (friends / 2));

// operacao de potencia
console.log("friends: " + (friends ** 2));

// remaining friends
console.log("remaining friends: " + (friends % 3));


friends += 1;
console.log("friends: " + friends);

friends = 10;
friends -= 1;
console.log("friends: " + friends);

friends = 10;
friends *= 2;
console.log("friends: " + friends);

friends /= 2;
console.log("friends: " + friends);

friends **= 2;
console.log("friends: " + friends);

friends %= 3;
console.log("remaining friends: " + friends);

/*
	operador precedence
	parenteses
	exponenciacao
	multiplicação e divisão
	adição e subtração
*/
friends = 10;
friends = 10 + 2 / 2;
console.log("friends: " + friends);

friends = 10;
friends = (10 + 2) / 2;
console.log("friends: " + friends);









