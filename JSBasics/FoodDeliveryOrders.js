/**
 * Food Delivery Orders 
Scenario: 
A food delivery application maintains current orders. 
Question: 
Declare an array with "Pizza", "Burger", "Pasta" and: 
1. Add "Sandwich" to the orders  
2. Remove the first order  
3. Display all orders as a comma-separated string
 */

let currentFoodOrder = ["Pizza","Burger","Pasta"];

console.log("Current Food Order : "+ currentFoodOrder);

console.log("-----Add Sandwich ------");
let addingOrder = currentFoodOrder.push("Sandwich");
console.log("Updated Food Order : "+currentFoodOrder);

console.log("------remove the first order------");

let removeFirstOrder = currentFoodOrder.shift();
console.log("Removed order : "+ removeFirstOrder);
console.log("after removing first order : "+currentFoodOrder);

console.log("------change this array as string------");

let arrayToString = currentFoodOrder.toString();
console.log("Array turned to string : "+ arrayToString);
console.log("Type is : "+typeof arrayToString);

/**
 * Output:
 * Current Food Order : Pizza,Burger,Pasta
-----Add Sandwich ------
Updated Food Order : Pizza,Burger,Pasta,Sandwich
------remove the first order------
Removed order : Pizza
after removing first order : Burger,Pasta,Sandwich
------change this array as string------
Array turned to string : Burger,Pasta,Sandwich
Type is : string

 */




