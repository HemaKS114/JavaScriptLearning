/**
 * Reverse a number using a loop
 */

let num = 1234;
let reversed = 0;//initialize the reverse number with value 0
//this loop executes if the num is greater than 0
while (num>0) {
    let lastDigit = num % 10; // gets the remainder as lastDigit
    reversed = (reversed *10)+ lastDigit; // add the lastdigit into the multiplication of 10 into reverse value
    num = Math.floor(num/10);//if you divide the num with 10 it removes the last digit

}
//when the loop goes on till 0 the number will be reversed
console.log(reversed);
