/*** ES5 ***/
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith': lastName;
    nationality === undefined? nationality = 'american' : nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1993, 'Diaz', 'spanish');

/*** ES6 ***/
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality ='american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1993, 'Diaz', 'spanish');
