/**
 * Scenario: 
An automation framework stores failed test names. 
Question: 
Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
1. Add "ProfileFail"  
2. Remove the first failed test  
3. Create another copy of the failed tests array  
4. Extract only the first 2 failed tests  
5. Replace "CheckoutFail" with "PaymentFail"  
6. Convert all failures into a single comma-separated string
 */

let failedTestName = ["LoginFail","CheckoutFail","SearchFail"];
console.log("Failed test names : "+ failedTestName);

console.log("--------Add ProfileFail ----------");
let addedFailedCase = failedTestName.push("ProfileFail");
console.log("Added Failed case to the list : "+ failedTestName);

console.log("----------Remove the first failed test----------");
let removefirstFT = failedTestName.shift();
console.log("After first failed test removal : "+failedTestName);

console.log("-----------Create another copy of the failed tests array---------");
let copyofFailedTest = [...failedTestName];
console.log("Copy of failed tests : "+ copyofFailedTest);

console.log("-----------Extract only the first 2 failed tests---------");

let extractfirst2test = failedTestName.slice(0,2);
console.log("Extracted first 2 tests : "+ extractfirst2test);

console.log("------------ Replace CheckoutFail with PaymentFail----------");
let replaceTest = failedTestName.splice(0,1,"PaymentFail");
console.log("Test list after replaced test : "+failedTestName);

console.log("--------Convert all failures into a single comma-separated string ------ ");

let arraytoString = failedTestName.toString();
console.log("Array to String : "+ arraytoString);
console.log("Type of this list : "+ typeof arraytoString);

/**
 * Output:
 * Failed test names : LoginFail,CheckoutFail,SearchFail
--------Add ProfileFail ----------
Added Failed case to the list : LoginFail,CheckoutFail,SearchFail,ProfileFail
----------Remove the first failed test----------
After first failed test removal : CheckoutFail,SearchFail,ProfileFail
-----------Create another copy of the failed tests array---------
Copy of failed tests : CheckoutFail,SearchFail,ProfileFail
-----------Extract only the first 2 failed tests---------
Extracted first 2 tests : CheckoutFail,SearchFail
------------ Replace CheckoutFail with PaymentFail----------
Test list after replaced test : PaymentFail,SearchFail,ProfileFail
--------Convert all failures into a single comma-separated string ------ 
Array to String : PaymentFail,SearchFail,ProfileFail
Type of this list : string
 */











