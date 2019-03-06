var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes =[];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
};

function calcAge(el){
    return 2018 - el;
};
function isFullAge(el){
    return el >= 18;
}
function maxHeartRate(el){
    if(el >= 18 && el <=81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var rate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rate);