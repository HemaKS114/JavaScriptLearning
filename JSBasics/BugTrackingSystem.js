/**
 * Scenario: 
A software team tracks bugs using arrays. 
Question: 
Declare an array with "Bug101", "Bug102", "Bug103" and: 
1. Add "Bug104"  
2. Remove "Bug102"  
3. Create a copy of the bug list 
 */

let bugTrackingSystem = ["Bug101","Bug102","Bug103"];

console.log("Available tracked bugs : "+bugTrackingSystem);

console.log("--------- Add Bug104-----------");
let addingBug = bugTrackingSystem.push("Bug104");
console.log("Updated tracked bugs : "+ bugTrackingSystem);

console.log("-------- Remove Bug102-----------");
let removeBug2 = bugTrackingSystem.splice(1,1);
console.log("removed Bug : "+ removeBug2);
console.log("One bug removed list : "+ bugTrackingSystem);

console.log("----------- create a copy of the bug list----------");
let copyofBugs = [...bugTrackingSystem];
console.log("Copy of tracked bugs : "+ copyofBugs);

/**
 * Output:
 * Available tracked bugs : Bug101,Bug102,Bug103
--------- Add Bug104-----------
Updated tracked bugs : Bug101,Bug102,Bug103,Bug104
-------- Remove Bug102-----------
removed Bug : Bug102
One bug removed list : Bug101,Bug103,Bug104
----------- create a copy of the bug list----------
Copy of tracked bugs : Bug101,Bug103,Bug104
 */



