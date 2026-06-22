/**
 * Let vs Var 
What will be the output?
 */

function testScope() { 
if (true) { 
var a = 10; 
let b = 20; 
} 
console.log(a); // ? 
console.log(b); // ? 
} 
testScope();

/**
 * output:
 * The value of a will be printed as 10;
 * but it will throw error for the value of b as undefined.
 * due to block scope, if the variable declared as let within a if block 
 * then it will be accessible within that block
 * it will throw reference error if you try to access out side the block
 */