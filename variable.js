// // var, let and const --line by line comparison
// // var (ES5)
// var a = "temp";
// var _123 = "Hello";
//  var $123 =  "Hello";
//  b = 24; //never
//  //let
//  let temp = "abc";
//  //const
//  const temp_const = "Hello World !!"

//  //declaration and initialization
//  var d; //declare
//  var d = 12; //declare and initialize for first time
//  // var add value into window
//  // var is function scoped
//  //var can be redeclared and ressigned
//  d = 24; //reassign
//  var d = "Hello" // redeclar
//  //temp_const = "Hello";

//   // scope (globel, Block, function)
//   let e = 23;  // globel scope
//   {
//     let e = 25; //block scope
//     console.log("block scope " + e);
//   }
//   function abc() {
//     let e = 30; //function scope
//     console.log("function scope" + e);
//   }
//   abc();
//   console.log(e);

//   var f = 23;  // globel scope
//   {
//     var f = 25; //block scope
//     console.log("block scope " + f);
//   }
//   function abc() {
//     var f = 30; //function scope
//     console.log("function scope" + f);
//   }
//   abc();
//   console.log(f);

//   // Temporal Dead Zone (TDZ)
//   // TDZ not working on var
//   console.log(temp_b);
//   var temp_b = 24;  // on var there is no TDZ
//  let j = 12;
//   console.log(j)
  

// //Hoisting Impact
// // Hoisting  --> when your create a vaiable into js that braek into two part first is declare part that go to up and there initializatn part that go down
// var temp_d = 12;
// // var temp_d;  --> undefined;  --> that go to up
// // temp_d = 12; --> that go to down (means stuck into line 64)
// //if you use console.log before initialization that give you undefined;
// let temp_d_let = 24;
// // let variable not use before initialization
// // if you use console.log before initialization that give you error;
// // Hosting Impace on var, let ,cont
// /*
// var --> hoist --> undefined
// let --> hoist --> error
// const --> hoist --> error
// */


// EXAMPLE 1
let nm = "name";
console.log(nm);

// ERROR : Uncaught ReferenceError: Cannot access 'nm' before initialization
// solution : you can access 'nm' after initialization

//EXAMPLE 2
var b = "username";
console.log(b);

// ERROR : Undefine
// solution : 

//EXAMPLE 3
var x = 1;
{
    var x = 2;
}
console.log(x);

//ANSWER : 2

//EXAMPLE 4
let a = 10;
{
    let a = 20;
    console.log("Iside:",a);
}
console.log("outside:",a)

//ANSWER : Iside: 20    outside: 10

//EXAMPLE 5
const person = {name:"demo"};
 on console.log
person.name = "user";
person = {} ;
