calcAge(1993);
function calcAge(year) {
    console.log(2018 - year);
} // Hoisting only works for function declaration


// retirement(1990);
var retirement = function(year){
    console.log(65 - (2018 - year));
} // Hoisting doesn't work for function expression

console.log(age); //undefined
var age = 23;
console.log(age);
// variable are set to undefined

function foo(){
    console.log(age); //undefined
    var age = 25;
    console.log(age);
}
foo();
console.log(age);
