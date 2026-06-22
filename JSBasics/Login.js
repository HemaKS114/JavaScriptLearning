/**
 * Create a Javascript that checks whether the given username and 
password match the predefined login credentials using simple variables
 */

let enteredUsername = "Priyanka";
let enteredPassword = "Nigade";
const correctUsername = "admin@email.com";
const correctPassword = "admin@123";
if(correctUsername === enteredUsername && correctPassword === enteredPassword){
    console.log("Login successful");
       
}
else{
    console.log(`Invalid credentials username "${enteredUsername}" and password "${enteredPassword}" is not a match`);
    
}