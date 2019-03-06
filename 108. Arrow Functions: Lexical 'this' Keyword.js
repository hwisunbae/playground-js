/*** ES5 ***/
var box5 = {
    color: 'green',
    position : 1,
    clickMe : function() { // method call
        var self = this;

        document.querySelector('.green')
            .addEventListener('click', function(){ // regular function call
                var str = 'This is box number ' + self.position +' and it is ' + self.color;
                alert(str);
            })
    }
}
// box5.clickMe();

/*** ES6 ***/
const box6 = {
    color : 'green',
    position: 1,
    clickMe : function() {
        document.querySelector('.green')
            .addEventListener('click', () => {
                var str = 'This is box number ' + this.position +' and it is ' + this.color;
                alert(str);
            })
    }
}
// box6.clickMe();

/*
const box66 = {
    color : 'green',
    position: 1,
    clickMe : () => {
        document.querySelector('.green')
            .addEventListener('click', () => {
                var str = 'This is box number ' + this.position +' and it is ' + this.color;
                alert(str);
            })
    }
}
box66.clickMe();
*/

/*** ES5 ***/
function Person(name) {
    this.name = name;
}
Person.prototype.myFriends5 = function(arrFriends){
    var arr = arrFriends.map(function(el){
        return this.name + ' is friends with '+ el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


/*** ES6 ***/
function Person(name){
    this.name = name;
}
Person.prototype.myFriends6 = function (arrFriends){
    var arr = arrFriends.map((el) => {
        return `${this.name} is friends with ${el}`;
    });
    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);