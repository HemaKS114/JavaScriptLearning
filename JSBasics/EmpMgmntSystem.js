/**
 * Scenario:
A company stores employee names in an array.
Question:
Declare an array with employee names "Rahul", "Priya", "Amit" and 
perform the following operations:
1. Add "Sneha" to the employee list 
2. Remove the last employee from the list 
3. Add "Manager" at the beginning of the list 
4. Remove the first employee from the list 
 */

let empName = ["Rahul", "Priya", "Amit"];

console.log("-------Adding Sneha to the emp name list------");

let newlyAddedEmpList = empName.push("Sneha");// adds "Sneha" to the end of the array
console.log(empName); // Output: ["Rahul", "Priya", "Amit", "Sneha"]

console.log("------removing last emp Name");

let removelastempName = empName.pop();
console.log(removelastempName);
console.log(empName);

console.log("-------Adding Manager Name -------");

let addingManager = empName.unshift("Manager");
console.log(empName);

console.log("------Remove the first employee name ----- ");

let removefirstemp = empName.shift();
console.log("Removed first emp Name: "+removefirstemp);
console.log(empName);


