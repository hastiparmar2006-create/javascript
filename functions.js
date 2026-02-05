// function
// what --> functrion is a block of code that performs a specific task.
// why --> to avoid code repetition  and to make code modular and reusable.
// how --> function ketword, name, perameters, body, body, return statement

// types of functions :
// function naem(params) {} --> function declaration
function abc() {}
// let fnc = function (){} --> function expression
let fnc = function() {}
// let fnc = () => {} --> arroe function --> fat arrow function
let fnc1 = () => {}

function temp_cart(){
    console.log("adding product");
}
temp_cart("laptop");
temp_cart("watch");
temp_cart("mobile");

// parameters VS arguments
// parameters are the name listen in the function defination (param --> () ni andar lakheli(pass) kareli values)
// argument are the real values passed to the function (args --> function call karti () ni andar lakheli(pass) kareli values)

// function cart(product){ // product -- params
//     console.log(`adding ${product}`)
// }
// temp_cart("laptop");  // laptop -- args
// temp_cart("watch");
// temp_cart("mobile");

function cart2(product, price){ // product -- params
    console.log(`adding ${product} at ${price}`);
}
temp_cart("laptop", 70809);  // laptop -- args
temp_cart("watch", 99999);
temp_cart("mobile", 80000);

function bookticket(movie, seatPrice) { // movie, seatPrice -- params
    console.log(`booking ticket for ${movie} at ${seatPrice}`);
}
bookticket("inception", 350);   // Inception, 350 -- args
bookticket("avatar", 400);
bookticket("interstellar", 450);

// convert into arrow function
// let fnc = () => {}
    let cart3 = (product, price) => {
        console.log(`adding ${product} at ${price}`);
    };
    cart3("arrow function -- s25 ultra", 90000)

// convert into function expression
 let cart4 = function (product, price) {  // product -- params
        console.log(`adding ${product} at ${price}`);
    };
    cart4("arrow function -- s25 ultra", 90000)

// default, rest and spread parameters in function
// default
function abcd(b = 10, price = 0) {
    console.log(price, b)
}
abcd(15);
// use case -- fees / flipcart -- platfoem fee

// rest
// jyare function ma multiple argument pass karva to vadhare params banava pde chhe mate te na karvu pde te mate rest parameters use kariye chhiye (rest --> ... jo function na parameter ni andar lakhvama aave chhe)
function def(a, b, c, d, e, f, g){
    console.log(a, b, c, d, e, f, g)
}
def(1, 2, 3, 4, 5, 6, 7);

function def1(...number){ // ...number -- reset params
    console.log(number);
}
def1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// early return --> function mathi jaldi behar nikalva mate 
// function getValue1(value) {
//     if (value < 25) return "value is less than 25";
//     else if (value < 75) return "value is less than 75";
// }
// let result =  getValue1(80);
// console.log(result);

// first class function 
// function can be treated as variable
// let temp_a = function(){}  -first class function
const cart5 = function (product, price) {
    console.log(`adding ${product} at ${price}`);
};
cart5("function expression - s25 ultra", 69000);

// function can be passed as argument to other function
function temp_b(fnc) {
    fnc();
}
temp_b (function fnc2() {
    console.log("first class function");
});

// function can be retured from other function
function abcd() {
    return function () {
        console.log("function return other function");
    };
}
// abcd();
abcd()(); // call a function that return other function

// higher order function (HOF)
// function that takes another function as an argument or return a function as a result (eva function je return kre ek function athava acpect kare ek function params ma)


// function abcd(val){val();} --> abcd (function() {console.log("hello")})
// function abcd(val){} --> higher order function 

// function abcd() { return function(){} } abcd()() --> higher order

function abcd() {
    return function () {
        console.log("hello");
    };
}

abcd()(); 

// pure vs impure function
// pure function --> function je same input par hamesha same output aapse ane te koi bahar na state ne modify na kre(pure function -->  je function  bahar na state ne modify na kre)
let a = 10;
function abcd_pure() {
    console.log("Hello");
}

// impure function --> function je same input par different output aapse athava te bahar na state ne modify kre (impure function --> je function bahar na state ne modify kre)
function abcd_impure() {
    a++;
    console.log(a);
}

// closure function
// function je potana parent function na variable ne access kari shake (return thava valo function use karshe parent function na koi variable ) (functon within function)
function outer() {
    let count = 0;
    function inner() {
        count++;  // accessing outer (parent) function variable
        console.log(count);
    }
    return inner;
}

let fnc111 = outer();
fnc1();

// lexical scope  --> nested function can access variable declared in their outer scope
function outer1() {
    let outer_var = "outer function variable";
    function inner1() {
        let inner_var = "inner function variable";
        console.log(outer_var); // outer1 function varable write in console log
        function most_inner() {
            console.log(inner_var); 
            console.log(outer_var);
            let most_inner_var = "most inner function variable";
            function abc() {
                console.log(most_inner_var);
                console.log(inner_var);
                console.log(outer_var);
            }
            abc();
        }
        most_inner();
    }
    inner1();
}
outer1();


//IIFE --> Immediately Invosion
(function() {} )(); // funcatked Function Expresion je declare karta j call thai jaye

(function (){
    console.log("This is IIFE function")
} ())

//Hosting in function
abcd_pure();

function abcd() {
    console.log("Hosting in function");
}

// hoistedFuncation();
// let hoistedFuncation = function() {
// console.log("Hoisted Funcation Expression called");
// }

// hoistedfuncation2();
// let hoistedfuncation2 = () => {
// console.log("Hoisted Arrow funcation called");
// }

// EXAMPLE

// ================================
// JavaScript Functions – All Examples
// ================================


/*
Example 1:
Difference between Function Declaration and Function Expression (Hoisting)

Function Declaration:
- Fully hoisted
- Can be called before definition

Function Expression:
- Not hoisted
- Cannot be called before assignment
*/


/*
Example 2:
Predict Output
*/
greet();

function greet() {
  console.log("Hello!");
}
// Output: Hello!
// Why: Function declaration is hoisted


/*
Example 3:
Convert Normal Function to Arrow Function
*/

// Normal Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;


/*
Example 4:
Identify Parameters and Arguments
*/

function welcome(name) { // name → parameter
  console.log("Welcome " + name);
}

welcome("user"); // "user" → argument


/*
Example 5:
How many parameters and arguments
*/

function temp(a, b, c) {
  console.log(a, b, c);
}

temp(1, 2);
// Parameters: 3 (a, b, c)
// Arguments: 2 (1, 2)
// Output: 1 2 undefined
// Why: c ke liye value nahi mili


/*
Example 6:
Default Parameters
*/

function temp_user(name = "Guest") {
  console.log("Hello " + name);
}

temp_user();
// Output: Hello Guest
// Why: Argument pass nahi kiya, default value use hui


/*
Example 7:
Rest Operator (...)
*/

function number(...numbers) {
  console.log(numbers);
}

number(1, 2, 3, 4, 5);
// Output: [1, 2, 3, 4, 5]
// Why: Rest operator multiple arguments ko array me convert karta hai


/*
Example 8:
Rest Parameters – Calculate Total
*/

// ❌ Wrong Logic (Error: NaN)
/*
for (let i = 0; i <= scores.length; i++) {
  total += scores[i];
}
Why: <= ki wajah se undefined add hota hai
*/

// ✔ Correct Function
function calculateTotal(...scores) {
  let total = 0;
  scores.forEach(function (val) {
    total = total + val;
  });
  return total;
}

let sumtotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumtotal);
// Output: 150


/*
Example 9:
Early Return
*/

function checkAge(age) {
  if (age < 18) {
    console.log("Too Young");
    return; // early return
  }
  console.log("Access Granted");
}


/*
Example 10:
Return Value
*/

function f() {
  return;
}

console.log(f());
// Output: undefined
// Why: return ke saath koi value nahi di      

