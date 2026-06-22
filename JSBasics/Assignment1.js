/**
 * 1. Identify the Data Type
 * Write a program to declare the following variables and log 
    their data types: 
 */
let a = "Hello";
console.log(a);
console.log("type of a is "+typeof a);
let b = 100; 
console.log(b);
console.log("type of b is "+typeof b);
let c = true;
console.log(c);
console.log("type of c is "+typeof c);
let d = null;
console.log(d);
console.log("type of d is "+typeof d);
let e = undefined;
console.log(e);
console.log("type of e is "+typeof e);
let f = { name: "John" };
console.log(f);
console.log("type of f is "+typeof f);
let g = [1, 2, 3];
console.log(g);
console.log("type of g is "+typeof g);
let h = function() { 
};
console.log(h);
console.log("type of h is "+typeof h);

/**
 * Output of this questions are below:
 * Hello
    type of a is string
    100
    type of b is number
    true
    type of c is boolean
    null
    type of d is object
    undefined
    type of e is undefined
    { name: 'John' }
    type of f is object
    [ 1, 2, 3 ]
    type of g is object
    [Function: h]
    type of h is function
 */