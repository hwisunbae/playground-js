/*** ES5 ***/
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person5.prototype.calcAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');

/*** ES6 ***/
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(Age);
    }
    static greeting() {
        console.log('Hey there');
    } // works as a helper function, not inherited from class
}
var john6 =  new Person6('John', 1990, 'teacher');
Person6.greeting();