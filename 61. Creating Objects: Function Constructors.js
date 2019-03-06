var john = {
    name : 'John',
    yearOfBirth : 1990,
    job : 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calcAge = function(){
    //     console.log(2018 - this.yearOfBirth);
    // }
}; // function constructor

Person.prototype.calcAge = function(){
    console.log(2018 - this.yearOfBirth);
}; // prototype makes JS to be able to inheritance

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
// instantiation
var jane = new Person('Jane', 1993, 'student');
var mark = new Person('Mark', 2000, 'designer');

john.calcAge();
jane.calcAge();
mark.calcAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
