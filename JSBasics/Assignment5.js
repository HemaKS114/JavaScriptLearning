/**
 * Const Behavior 
What will happen?
 */
const obj = { name: "Alice" }; 
obj.name = "Bob"; 
console.log(obj.name); 
obj = { name: "Charlie" }; // What happens here?

/**
 * output:
 * in Line 5, name is updated as "Alice",
 * in Line 6, the reference is getting modified which is possible in const.
 * The output of line 7 is Bob as the const allows modification
 * In line 8, its re-declaration which is forbidden, Hence it will throw an error.
 * Type Error: Assignment to constant variable
 */