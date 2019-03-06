// function retirement(retireAge){
//     var a = ' years left until retirement';
//     return function (yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retireAge - age) + a);
//     }
// };
//
// var retirementUS = retirement(66);
// retirementUS(1993);
//
// retirement(66)(1993);
//
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);
//
// retirementGermany(1990);
// retirementIceland(1990);

/* CLOSURE
   inner function has access to the variable
   and parameters of its outer function
   even after the outer function has returned.
*/

function interviewQ(job){
    var a = 'can you please explain what UX design is?';
    var b = 'what subject do you teach?';
    var c = 'what do you do?';
    return function (name) {
        if(job === 'teacher'){
            console.log(b + name);
        }else if(job === 'designer'){
            console.log(a + name);
        }else {
            console.log(c + name);
        }
    }
};
var john = interviewQ('teacher');
john('John');