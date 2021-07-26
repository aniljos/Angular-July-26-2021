//Scopes
foo();
//Global scope
console.log("a", a);
var a = 10;
console.log("a", a);
function foo() {
    console.log("calling foo");
    //function scope
    var a = 20;
    console.log("a", a);
    if (a < 50) {
        //var b = "Hello"; //function scope, not a block scope
        let b = "Hello"; //block scope(let/const)
        console.log("b", b);
    }
    //console.log("b", b);
}
foo();
