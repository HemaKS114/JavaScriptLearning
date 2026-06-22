/**
 * Scenario: 
An e-commerce website manages products in a shopping cart. 
Question: 
Declare an array with "Mobile", "Laptop", "Mouse" and: 
1. Add "Keyboard" to the cart  
2. Display all products in reverse order  
3. Convert all cart items into a single string separated by " | " 
 */

let items = ["Mobile", "Laptop", "Mouse"];

console.log("Initial available items : "+ items);

console.log("------ Adding keyboard in to the items------");

let AddedItem = items.push("Keyboard");
console.log("Updated list : "+items);

console.log("-----Reverse Order-----");

let reverseOrderItems = items.reverse();

console.log("Reversed items: "+ reverseOrderItems);
console.log("Type of reversed items are : "+ typeof reverseOrderItems);


console.log("--------convert array to string with |------");

let arrayTostring = reverseOrderItems.toString().replaceAll(",","|");

console.log("Type of this items : " + typeof arrayTostring);

console.log(arrayTostring);


/**
 * Output
 * Initial available items : Mobile,Laptop,Mouse
------ Adding keyboard in to the items------
Updated list : Mobile,Laptop,Mouse,Keyboard
-----Reverse Order-----
Reversed items: Keyboard,Mouse,Laptop,Mobile
Type of reversed items are :object
--------convert array to string with |------
Type of this items : string
Keyboard|Mouse|Laptop|Mobile

 */


