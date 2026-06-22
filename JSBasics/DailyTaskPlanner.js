/**
 * Scenario: 
A task planner application stores daily tasks. 
Question: 
Declare an array with "Wake Up", "Exercise", "Study" and: 
1. Add "Meeting" to the task list  
2. Remove the first task  
3. Reverse all tasks  
4. Display all tasks in a single string separated by " -> " 
 */

let tasks =["Wake Up","Exercise","Study"];
console.log("Planned tasks are : "+tasks);

console.log("------- Add meeting to the tasks------");
let addingTask = tasks.push("Meeting");
console.log("Updated tasks list : "+tasks);

console.log("--------Remove the first task -------");
let removefirstTask = tasks.shift();
console.log("Removed Task : "+ removefirstTask);
console.log("Updated task list after removal : "+ tasks);

console.log("----------Reverse all tasks--------");
let reverseTasks = tasks.reverse();
console.log("Reversed Tasks list : "+reverseTasks);

console.log("------- Display all tasks in a single string separated by ->-------");
let arraytoString = tasks.toString().replaceAll(",","->");
console.log("Array converted to string : "+ arraytoString);

/**
 * Output:
 * Planned tasks are : Wake Up,Exercise,Study
------- Add meeting to the tasks------
Updated tasks list : Wake Up,Exercise,Study,Meeting
--------Remove the first task -------
Removed Task : Wake Up
Updated task list after removal : Exercise,Study,Meeting
----------Reverse all tasks--------
Reversed Tasks list : Meeting,Study,Exercise
------- Display all tasks in a single string separated by ->-------
Array converted to string : Meeting->Study->Exercise
 */






