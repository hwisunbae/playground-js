var a = 'Hello';
first();

function first() {
    var b = 'Hi';
    second();

    function second(){
        var c = 'Hey';
        console.log(a + b + c);
    }
} // lexical scoping

var a = 'Hello';
first();

function first() {
    var b = 'Hi';
    second();

    function second(){
        var c= 'Hey';
        third();
    }
}
function third(){
    var d = 'John';
    // console.log(c);
    console.log(a + d);
}