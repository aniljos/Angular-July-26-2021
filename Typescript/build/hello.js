console.log("hello typescript");
var x; //infers to any
x = 10; //number
x = "abc"; //string
x = { id: 1, name: "Anil" }; // object
var y = 10; // Type inference
y = 20;
//y = "abc"; // Compiler error(static type checking)
var z; // Type annotation
z = 10;
// z = 'abc';// Compiler error(static type checking)
