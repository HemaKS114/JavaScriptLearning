/**
 * Scenario: 
A movie application stores recommended movies. 
Question: 
Declare an array with "Inception", "Avatar", "Titanic" and: 
1. Add "Interstellar" to the movie list  
2. Replace "Titanic" with "Jawan"  
3. Convert all movie names into a single string separated by "-" 
 */

let recommendedMovies = ["Inception","Avatar","Titanic"];

console.log("Recommended Movies on App : "+ recommendedMovies);

console.log("-------Add Interstellar to the movie list------ ");

let addMovie = recommendedMovies.push("Interstellar");

console.log("Updated recommended Movie list :"+ recommendedMovies);

console.log("------- replace titanic to Jawan --------");

let replaceMovie = recommendedMovies.splice(2,1,"Jawan");

console.log("Replaced Movie details : "+ recommendedMovies);

console.log("-------Convert all movie names into a single string separated by -'-------");

let convertedString = recommendedMovies.toString().replaceAll(",","-");

console.log("Array that converted to string and separated by - : "+ convertedString);
console.log("Type of converted String : "+ typeof convertedString);









