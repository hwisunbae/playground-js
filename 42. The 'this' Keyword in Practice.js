// function calcAge(year) {
//     console.log(2018 - year);
//     console.log(this);
// }
// calcAge(1993);

var john = {
    name: 'John',
    yearOfBirth : 1993,
    calcAge : function(){
        console.log(this);
        console.log(2018 - this.yearOfBirth);

        // function inFunc(){
        //     console.log(this);
        // }
        // inFunc();
        // the same as out of scope
    }
}
john.calcAge();

var mike = {
    name : 'Mike',
    yearOfBirth: 2000
}

mike.calcAge = john.calcAge; // borrowing method
mike.calcAge();