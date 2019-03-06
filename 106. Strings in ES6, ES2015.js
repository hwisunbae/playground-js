let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year){
    return 2019- year;
}

/*** ES5 ***/
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth +'. Today, he is ' + calcAge(yearOfBirth));

/*** ES6 ***/
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)}`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('h'));
console.log(n.includes(' '));
console.log(`${firstName}`.repeat(5));