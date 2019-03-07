/*** ES5 ***/
function isFullAge5() {
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}
// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

/*** ES6 ***/
function isFullAge6(...years){
    // console.log(years);
    years.forEach((cur) => {
        console.log((2016 - cur) >= 18);
    })
}

isFullAge6(1990, 1999, 1965, 2016, 1987);

/*** ES5 ***/
function isFullAge5(limit){
    // console.log(arguments);
    var arr5 = Array.prototype.slice.call(arguments, 1);
    // console.log(arr5);
    arr5.forEach(function (cur) {
        console.log((2019 - cur) >= limit);
    })
}
// isFullAge5(27, 1990, 1993, 2013);

/*** ES6 ***/
function isFullAge6(limit, ...years){
    // console.log(years);
    years.forEach((cur) => {
        console.log((2019 - cur) >= limit);
    })
}
isFullAge6(20, 1990, 1993, 2013);