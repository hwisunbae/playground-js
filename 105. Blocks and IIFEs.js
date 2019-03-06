/*** ES6 ***/ // the way for data privacy
{
    const a = 1;
    let b = 2;
    var c = 3;
}
// console.log(a+b);
console.log(c);

/*** ES5 ***/
(function () {
    var c = 3;
})();
// console.log(c);