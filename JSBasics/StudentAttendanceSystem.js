/**
 * Student Attendance System 
Scenario: 
A school application maintains student attendance. 
Question: 
Declare an array with "Ankit", "Riya", "Karan" and: 
1. Add "Neha" at the beginning  
2. Remove the last student from the list  
3. Create a separate copy of the attendance list 
 */

let attendanceApp = ["Ankit","Riya","Karan"];

console.log("Available student list : "+ attendanceApp);
console.log("------- Add Neha to the start-----");

let addStudenttoStart = attendanceApp.unshift("Neha");
console.log("Updated student list : "+ attendanceApp);

console.log("-------Remove last student from list----- ");

let removingLastStudent = attendanceApp.pop();

console.log("Removed Student name: "+ removingLastStudent);
console.log("Updated Student list : "+ attendanceApp);

console.log("------create a seperate copy of the list ------");

let copyOflist = [...attendanceApp];

console.log("Original students list : "+ attendanceApp);
console.log("Copy of Students list : "+ copyOflist);

/**
 * Output:
 * Available student list : Ankit,Riya,Karan
------- Add Neha to the start-----
Updated student list : Neha,Ankit,Riya,Karan
-------Remove last student from list----- 
Removed Student name: Karan
Updated Student list : Neha,Ankit,Riya
------create a seperate copy of the list ------
Original students list : Neha,Ankit,Riya
Copy of Students list : Neha,Ankit,Riya
 */







