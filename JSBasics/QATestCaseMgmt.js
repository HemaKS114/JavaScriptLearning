/**Scenario: 
A QA engineer stores executed test cases. 
Question: 
Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
1. Create another copy of the same array  
2. Extract only the first 2 test cases  
3. Display test cases in reverse order   */

let executedTestcases = ["LoginTest","PaymentTest","SearchTest"];

console.log("Executed Test cases are : "+executedTestcases);

console.log("------ another copy of same array -------");

let copyOfExecutedTestcases = [...executedTestcases];

console.log("Copy of Executed Test cases : "+ copyOfExecutedTestcases);

console.log("------- extract only first 2 cases -----");

let first2Arrays = executedTestcases.slice(0,2)
console.log("Extracted first 2 arrays : "+ first2Arrays);
console.log("------ display test cases in reverse order ------ ");

let reverseTestCases = executedTestcases.reverse();
console.log("Reversed test cases are : "+ reverseTestCases);








