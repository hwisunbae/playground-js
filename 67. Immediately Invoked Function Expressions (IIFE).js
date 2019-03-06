// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
//
// }
// game();

(function (goodLuck) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodLuck);
})(5);
// IIFE makes score private variable, data privacy
// console.log(score);