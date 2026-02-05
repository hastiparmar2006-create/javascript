// control flow statement in javascript

// If-Else Statement (if, if else, if else-if else)
// if (condition) {})
if (12<13){
    console.log(true);
}

if (15<13) {
    console.log(true);
} // condition is false that why if statement not run

if(!12) {
    console.log("number");
}
// if -else statement
if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 < 13){
    console.log(true);
} // condition is false that why if statement not run
else {
    console.log(false);
}

if (!2) {
    console.log("number");
} else {
    console.log("Not A  Number");
}

// if-else if-else statement
 /*
 if (condition) {
} else if (condition) {
 } else {}
    */
   /*
   if ( loggedin && admin)  {
   console.log("Welcome admin");
   } else if (loggedin) {
   console.log("Welcome user"); 
   } else {
    console.log(" go to login page");  
    }
    */ 

    // Switch case Statement
    switch ('First50') { // value --> Cse value sathe match larshe
        case'First50':
            console.log("50% off on first order")
            break;
             case'BOGO':
            console.log("Buy onr get one")
            break;
             case'BlackFriday':
            console.log("It's Black Friday Sale - get at Rs. 50")
            break;
            default:
            console.log("offer Not Vaild")
            break;
    }

// Early Return Pattern 
function score(value) {
    if (value > 90) {
        return "value is more than 90";
    } else if ( value < 80) {
        return "Value is less than 80";
    } else if ( value < 70) {
        return "Value is less than 70";
    }  else if ( value < 60) {
        return "Value is less than 60"; 
    }  else {
        return "Value is less than 60";  
    }  
}
score(100);
// console.log(svcore(100))

function score1(value) {
    if ( value > 90) return "value is more than 90";
    else if (value < 80) return "value is less than 80";
    else if (value < 70) return "value is less than 70";
    else if (value < 60) return "value is less than 60";
    else return "value is less than 60";
}

function score2(value) {
    if ( value > 60) return "value is more than 60";
    else if (value < 70) return "value is less than 70";
    else if (value < 80) return "value is less than 80";
    else if (value < 90) return "value is less than 90";
    else return "value is more than 90";
}



function rps(user, computer){
    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "rock") return "computer wins";
    if(user === "rock" && computer === "paper") return "computer wins";
    if(user === "paper" && computer === "scissor") return "computer wins";
    return "it's a tie"
}


function rps2(user, computer){
    if(user === computer) return "it's a tiel!";

    if(user === "rock" && computer === "scissor") return "user wins";
     if(user === "scissor" && computer === "paper") return "user wins";
      if(user === "paper" && computer === "rock") return "user wins";
      return "computer wins";
}
        
        
        
        
        
        
        
        