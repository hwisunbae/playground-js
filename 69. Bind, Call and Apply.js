var john = {
    name : 'John',
    age : 26,
    job : 'teacher',
    presentation : function(style, timeOfDay){
        if(style === 'formal') {
            console.log(`Good ${timeOfDay}, Ladies and gentlemen! I'm ${this.name}, I'm a ${this.job}, and I'm ${this.age} years old.`);
        }else if(style === 'friendly'){
            console.log(`Hey! What's up? I'm ${this.name}, I'm a ${this.job}, and I'm ${this.age} years old. Have a nice ${timeOfDay}`);
        }
    }
}
var emily = {
    name : 'Emily',
    age : 35,
    job : 'designer'
}
john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon'); // method borrowing
// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly'); //preset function
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

/* customize full year */
var years = [1990, 1965, 1937, 2005, 1998];
function arrCalcAge (arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i ++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calcAge (el) {
    return 2019 - el;
}
function isFullAge (limit, el) {
    return el >= limit;
}
var ages = arrCalcAge(years, calcAge);
var bool = arrCalcAge(ages, isFullAge);

var fullJapan = arrCalcAge(ages, isFullAge.bind(this, 22));
console.log(ages);
// console.log(bool);

console.log(fullJapan);