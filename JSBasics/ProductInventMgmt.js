/**
 * Scenario: 
An admin manages product inventory. 
Question: 
Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
1. Remove "Tablet" from inventory  
2. Add "Smart Watch" after "Laptop"  
3. Create a duplicate copy of updated inventory 
 */

let productInventory = ["Mobile","Laptop","Tablet","Camera"];

console.log("Original Product Inventory : "+ productInventory);

console.log("-------Remove Tablet from Inventory ------ ");
let removeTablet = productInventory.slice(1,1);
console.log("Removed item from Inventory : "+ removeTablet);
console.log("Updated Inventory list : "+ productInventory);

console.log("------- Add smartwatch after Laptop");
let addLaptop = productInventory.splice(2,0,"Smart Watch");
console.log("Newly added items in middle : "+ addLaptop);
console.log("Newly added items in middle: "+ productInventory);

console.log("----- duplicate copy of updated inventory------ ");
let duplicateInventory = [...productInventory];
console.log("Duplicated Inventory :"+ duplicateInventory);
/**
 * Output:
 * Original Product Inventory : Mobile,Laptop,Tablet,Camera
-------Remove Tablet from Inventory ------ 
Removed item from Inventory : 
Updated Inventory list : Mobile,Laptop,Tablet,Camera
------- Add smartwatch after Laptop
Newly added items in middle : 
Newly added items in middle: Mobile,Laptop,Smart Watch,Tablet,Camera
----- duplicate copy of updated inventory------ 
Duplicated Inventory :Mobile,Laptop,Smart Watch,Tablet,Camera

 */






