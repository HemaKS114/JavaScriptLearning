/**
 * Scenario: 
A mobile app stores contact names. 
Question: 
Declare an array with "Ram", "Shyam", "Mohan" and: 
1. Add "Sita" at the beginning  
2. Remove the last contact  
3. Extract only the first 2 contacts  
 */
let contactNames = ["Ram","Shyam","Mohan"];

console.log("Contact Names are : "+ contactNames);

console.log("--------Add Sita at the beginning-------");
let addContact = contactNames.unshift("Sita");
console.log("Updated Contact name list : "+ contactNames);

console.log("--------Remove the last contact---------");
let removeLastcontact = contactNames.pop();
console.log("Contact names after the removal of last one: "+ contactNames);

console.log("----------Extract only first 2 contacts -------");
let extractContacts =  contactNames.slice(0,2);
console.log("Extracted Contacts are :"+extractContacts);

/**
 * Output:
 * Contact Names are : Ram,Shyam,Mohan
--------Add Sita at the beginning-------
Updated Contact name list : Sita,Ram,Shyam,Mohan
--------Remove the last contact---------
Contact names after the removal of last one: Sita,Ram,Shyam
----------Extract only first 2 contacts -------
Extracted Contacts are :Sita,Ram
 */






