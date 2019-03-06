function interviewQ(job){
    if(job === 'designer'){
        return function(name) {
            console.log(name +', can you explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name){
            console.log(name +', what subject do you teach?');
        }
    } else {
        return function(name){
            console.log('Hello ' + name);
        }
    }
}

var teacherQ = interviewQ('teacher');
var designerQ = interviewQ('designer');
teacherQ('John');
designerQ('John');

interviewQ('designer')('Mark');