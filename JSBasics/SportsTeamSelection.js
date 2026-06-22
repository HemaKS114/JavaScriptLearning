/**
 * Scenario: 
A coach manages selected players. 
Question: 
Declare an array with "Virat", "Rohit", "Gill" and: 
1. Add "Hardik" to the team  
2. Replace "Gill" with "KL Rahul"  
3. Display players in reverse order 
 */
let selectedPlayers = ["Virat","Rahul","Gill"];

console.log("Players are : "+ selectedPlayers);

console.log("-------Add Hardik---------");

let addedPlayer = selectedPlayers.push("Hardik");
console.log("Players list after addition : "+selectedPlayers);

console.log("----------Replace Gill with KL Rahul---------");
let replacePlayer = selectedPlayers.splice(2,1,"KL Rahul");
console.log("Players list after replacement : "+selectedPlayers);

console.log("--------- reverse order ---------");
let reversedPlayers = selectedPlayers.reverse();
console.log("Reversed order of players : "+ selectedPlayers);

/**
 * Output:
 * Players are : Virat,Rahul,Gill
-------Add Hardik---------
Players list after addition : Virat,Rahul,Gill,Hardik
----------Replace Gill with KL Rahul---------
Players list after replacement : Virat,Rahul,KL Rahul,Hardik
--------- reverse order ---------
Reversed order of players : Hardik,KL Rahul,Rahul,Virat
 */





