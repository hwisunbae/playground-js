var Person = function(name, birth, color){
    this.name = name;
    this.birth = birth;
    this.color = color;
}
Person.prototype.calcAge = function(){
    return 2019 - this.birth;
}
Person.prototype.lastName = 'Bae';

var john = new Person('John', 1990, 'white');
var hailey = new Person('Hailey', 1993, 'yellow');
var jane = new Person('Jane', 2000, 'black');

console.log(john.calcAge());
console.log(hailey.calcAge());
console.log(jane.calcAge());

console.log(john.lastName);
console.log(hailey.lastName);
console.log(jane.lastName);