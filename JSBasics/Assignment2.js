/**
 * Variable Scope Check 
What will be the output of the following? 
 */

var x = 10; 
function test() { 
var x = 20; 
console.log("Inside loop x is "+x); 
} 
test(); 
console.log("outside loop x is "+x); 

/**
 * Output of this code is
 * Inside loop x is 20
outside loop x is 10
As redeclaration is possible in var, x value is updated as 20 and again as 10.
 */