var a = 23;
var b = a;
a = 46;
console.log(a); //46
console.log(b); //23
//Primitives : copy o

var obj1 = {
    name : 'John',
    age : 28
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); //30
console.log(obj2.age); //30
//Objects : copy x , reference o

var age = 27;
var obj = {
    name: 'Jonas',
    city : 'Lisbon'
};
function change(a, b){
    a = 30;
    b.city = 'San Francisco';
};
change(age, obj.city);
console.log(age);      //27
console.log(obj.city); //San Francisco
//Function
