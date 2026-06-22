/**
 * Write a script that suggests what clothing to wear based on the 
current temperature The program should use if...else or if...else if statements to 
determine the suggestion
 */
let temperature = -15;

if(temperature > 35){
    console.log("Wear light cotton clothes");
}
else if(temperature>=20 && temperature<=35){
    console.log("Normal casual wear");    
}
else if(temperature>=10 && temperature<=19){
    console.log("Wear a jacket");
}
else if(temperature<10){
    console.log("Stay indoors, it's too cold!");
}
