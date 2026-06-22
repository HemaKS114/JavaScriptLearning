/**
 * Write .js script that evaluates a test case result based on HTTP 
response status code the program should use Nester if..else statements to 
determine result message
 */
let responseCode = 200;
let status = "";

    if((responseCode >= 100) && (responseCode<=199)){
        status = "Informational";
        console.log(status);
    }
    else if ((responseCode >= 200) && (responseCode<=299)) {
        status = "Successful";
        console.log(status);
    } 
    else if ((responseCode >= 300) && (responseCode<=399)) {
        status = "Redirectional";
        console.log(status);
    }
    else if ((responseCode >= 400) && (responseCode<=499)) {
        status = "Clear Error";
        console.log(status);
    }
    else if ((responseCode >= 500) && (responseCode<=599)) {
        status = "Server Error";
        console.log(status);
    }else {
        status ="Unknown status code";
        console.log(status);
    }
