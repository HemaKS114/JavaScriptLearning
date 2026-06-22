/**
 * Print all even numbers between 1 and 50.
 */

let num;
//this line iterates the numbers till 50
for(num=1;num<=50;num++){
    //this line compares if the remainder of the num equals 0
    if(num%2===0){
        //if remainder equals 0 then the num will be printed
        console.log(num); 
    }
}