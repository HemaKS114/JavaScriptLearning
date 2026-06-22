/**
 * Scenario: 
A music app stores favorite songs. 
Question: 
Declare an array with "Song1", "Song2", "Song3" and: 
1. Display playlist in reverse order  
2. Remove the last song  
3. Add "NewSong" at the beginning  
4. Convert playlist into a single string  
 */

let playlist = ["Song1","Song2","Song3"];
console.log("Available Playlist : "+ playlist);

console.log("-----Playlist in reverse Order------");
let reverseOrder = playlist.reverse();
console.log("Playlist in reverse Order : "+reverseOrder);

console.log("-----Remove the last song-------");
let removeLastSong = reverseOrder.pop();
console.log("Removed Song is : "+removeLastSong);
console.log("Removing last song : "+reverseOrder);

console.log("-----Add Newsong at the beginning-------");
let addNewSong = reverseOrder.unshift("NewSong");
console.log("Add New Song in the beginning : "+ reverseOrder);

console.log("------Convert playlist into a single string ------");
let arrayToString = reverseOrder.toString();
console.log("Array to String : "+ arrayToString);
console.log("Type of this list is : "+typeof arrayToString);





