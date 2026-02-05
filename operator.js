// operator
// Arithmetic, comparison, logical, assignment, unary, ternary
//Arithmetic:
// +,-,/, *, **, %
//+ --> Add and Concatenation
//ex. 1+2, "user"+"name"
//-
// ex. 2 - 1
// /, *
// ex. 240/2, 25*2
// % (modulas) (sheshfal)
//ex. 12%4  --->0
//ex. 9%2  ---> 1
// ** (square)(exposination)
// ex. 2**3 ---> 8


// Comparison (ans: true, false)
// ==
// ex. 12==13, 12=="12" (don't check type, only check value, not strict comparison)
//===
// ex.12 === "12" (check type and value, strict comparison)
// !=
// EX. 12 != 13 (REVERSE OF ==, NOT STRICT COMPARISON)
// !==
//ex. 12!== "12 (reverse of ===)
//>=
//ex. 22 >= 22
//<=
//ex. 13<= 13
// <
//ex. 12 < 113, 12 < 9, 22 < 22
// >
//ex. 12 > 113, 12 > 9, 13 > 13


// assignment
// =
// give a value, value assignment operator
// ex. let a = 12;
// +=
// ex. a +== 3; (add value into old value and save it into a)
// -=
// ex. a -= 4; (subtract value into old value and save it into a)
// *=
// ex. a *= 2;
// /=
// ex. a/= 2;
// %=
// ex. a %= 2; (give remainder)



// logical
// && (AND)
//ex. true && true --> true 12<13 && 14<15 --> true
// false && true -->false 12<10 && 14 < 15 --> false
//true && false -->false
//false && false --> false

// ||  (OR)
// ex. true || true --> true
// false || false --> true
// true || false --> true
// false || false --> false

// ! (NOT)
// ex. !true --> false
// !false --> true
// !12 --> false --> !12 --> true

// Unary operator
// + - ! typeof ++ --
// +
// convert string to number
// ex. +"5" -->5
// +"name" --> NaN
// -
// ex. -5
// !
// ex.!12 -->false
// typeof 
// ex. typeof "name" --> string
// ++
// ex. let a = 12
// a++ --> 12 // post eex. a++ + a => 25
// ++a --> 13 // pre ex. a++ +a => 26
// --
// ex.let a = 3;
// a--
// a++


// Ternary
// ? :
// condition ? true thase to print thase : false thae to print thase
// let a = 12>13 ? console.log("true"): console.log("false");


// typeof null --> object
// typeof [] --> object, let a =[]; a instanceof array --> true
// instanceof --> check type of reference data type // don't use typeof for reference data type
// typeof NaN --> number
// typeof --> premitive data type mate use karvo
// instanceof --> reference dat type mate use karvo


// Example 1
let x = 10;
let y = 20;
if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}
//Answer : Both are greater than 5

//Example 2
let isAdmin = true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}
// Answer: Acess granted

//Example 3
let temp = 35;
if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}
//Answer: Pleasant day

//Example 4
let a = 0;
if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}
//Answer: Falsy value

//Example 5
let score = 78;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Grade:", grade);
// Answer : Grade: C

//Example 6
let points = 120;
let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";
console.log("Status:", status);
//Answer: Status: Gold

//Example 7
let loggedIn = true;
let hasToken = false;
let access = loggedIn && hasToken ? "Allow" : "Deny";
console.log("access:", access);
//Answer: access: Deny

//Example 8
let p = 5;
p++
console.log(p);
//Answer: 6

//Example 9
let n = 8;
++n
console.log(n);
// Answer: 9

//Example 10
let k = 4;
let l = k++
console.log(k, l);
//Answer: 5 4

//Example 11
let b = 4;
let c = ++b
console.log(b, c);
//Answer : 5 5

//Example 12
let m = 10;
console.log(m--)
console.log(m);
// Answer: 10   9

//Example 13
let q = 5;
let result = q++ + ++q;
console.log(result);
//Answer: 12

//Example 14
let likes = 100;
function likePost(){
   return ++likes;
}
console.log(likePost());
console.log(likes);
//Answer: 101

//Example 15
let count = 5;
if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}
//Answer:Matched
