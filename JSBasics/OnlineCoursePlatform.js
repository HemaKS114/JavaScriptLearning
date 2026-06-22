/**
 * Scenario: 
An online learning platform stores enrolled courses. 
Question: 
Declare an array with "JavaScript", "Playwright", "Cypress" and: 
1. Remove the first course  
2. Add "TypeScript" at the beginning  
3. Extract only the last 2 courses 
 */

let courses =["JavaScript","Playwright","Cypress"];
console.log("Available online courses: "+ courses);
console.log("-----Remove first course------");
let removeFirstcourse = courses.shift();
console.log("Removed course : "+ removeFirstcourse);
console.log("Updated available courses: "+ courses);

console.log("------- add TypeScript in the beginning------");
let addcoursefirst = courses.unshift("TypeScript");
console.log("Adding course in the beginning : "+courses);

console.log("------Extract only the last 2 courses ------ ");
let extractedCourses = courses.slice(1,3);
console.log("Extracted courses : "+ extractedCourses);

/**
 * Output:
 * Available online courses: JavaScript,Playwright,Cypress
-----Remove first course------
Removed course : JavaScript
Updated available courses: Playwright,Cypress
------- add TypeScript in the beginning------
Adding course in the beginning : TypeScript,Playwright,Cypress
------Extract only the last 2 courses ------ 
Extracted courses : Playwright,Cypress

 */





