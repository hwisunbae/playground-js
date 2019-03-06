/*** ES5 ***/
var name5 = 'Jane Smith';
var age = 23;
name5 = 'Jane Miller';
console.log(name5);

//- function scope
function driversLicence(pass){
    if(pass){
        console.log(firstName); //undefined
        var firstName = 'John';
        var yearOrBirth = 1990;
    }
    console.log(`${firstName} born in ${yearOrBirth} is now officially allowed to drive a car`);
}
driversLicence(true);

/*** ES6 ***/
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';
console.log(name6);

//- block scope
function driversLicence(pass){
    // console.log(firstName); temporal-dead zone
    let firstName;
    const yearOrBirth = 1990;
    if(pass){
        firstName = 'John';
    }
    console.log(`${firstName} born in ${yearOrBirth} is now officially allowed to drive a car`);
}
driversLicence(true);

/*
let i = 23;
for(let i = 0 ; i < 5 ; i ++) {
    console.log(i); // 0 1 2 3 4
}
console.log(i); // 23
*/

var i = 23;
for(var i = 0 ; i < 5 ; i ++) {
    console.log(i); // 0 1 2 3 4
}
console.log(i); // 5