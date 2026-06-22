/**
 * Scenario: 
A browser automation framework tracks currently opened tabs. 
Question: 
Declare an array with "Google", "YouTube", "ChatGPT" and: 
1. Close the last opened tab  
2. Add "GitHub" as the first tab  
3. Display tabs in reverse order  
 */

let openTabs = ["Google", "YouTube", "ChatGPT"];

console.log("Currently Opened tabs : "+openTabs);

console.log("------ Closing the last open tab----");
let closeLastTab = openTabs.pop();

console.log("The closed tab : "+closeLastTab);
console.log("Current Open tabs are : "+openTabs);

console.log("------Add Github as first tab----");

let addGithubfirst = openTabs.unshift("Github");
console.log("Current Open Tabs : "+ openTabs);
console.log("Number of  open tabs : "+ addGithubfirst);

console.log("-------tabs in reverse order-------");
let tabsinReverse = openTabs.reverse();
console.log("Tabs in reverse : "+ tabsinReverse);

/**
 * Output:
 * Currently Opened tabs : Google,YouTube,ChatGPT
------ Closing the last open tab----
The closed tab : ChatGPT
Current Open tabs are : Google,YouTube
------Add Github as first tab----
Current Open Tabs : Github,Google,YouTube
Number of  open tabs : 3
-------tabs in reverse order-------
Tabs in reverse : YouTube,Google,Github
 */








