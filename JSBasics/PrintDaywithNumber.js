/**
 * Print the day of the week based on number (1–7). 
What you will use here? If-else or switch case?
 */

/**
 * I will use switch case here instead of else if ladder cos of faster execution,
 * else if is highly nested and will have repeated variable names.
 * Hence, missing an else will fail silently without any warning
 */

let day = 2;

switch (day) {
    case 1:
        console.log("Today is Sunday");
        break;
    case 2:
        console.log("Today is Monday");
        break;
    case 3:
        console.log("Today is Tuesday");
        break;
    case 4:
        console.log("Today is Wednesday");
        break;
    case 5:
        console.log("Today is Thursday");
        break;
    case 6:
        console.log("Today is Friday");
        break;
    case 7:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Error:No such day");
        break;
}

let val = 2;
if(val === 1){
    console.log("Today is Sunday");
}
else if(val === 2){
    console.log("Today is Monday");
}
else if(val === 3){
    console.log("Today is Tuesday");
}
else if(val === 4){
    console.log("Today is Wednesday");
}
else if(val === 5){
    console.log("Today is Thursday");
}
else if(val === 6){
    console.log("Today is Friday");
}
else if(val === 7){
    console.log("Today is Saturday");
}
else{
    console.log("Error: no such day");
    
}