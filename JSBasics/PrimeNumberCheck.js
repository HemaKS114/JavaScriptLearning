/**
 * Check whether a number is prime or not
 */

let num = 29; // checking this number if its prime number
let isPrime = true; // setting the boolean

//first check the prime num should always be greater than or = 1.
if(num<=1){
    isPrime = false;
}
else{
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
       
    }
}
if(isPrime===true){
    console.log(num+" is a prime number");
}
else{
    console.log(num+" is not a prime number");
}