// Dat Tyoe:
// Two of Dat Type:
//1. Primitive Dat Types
// Copy  --> real value
let a = 12;
let b = a; // a-->12
a = a+3;
// type : string,number,boolean,null,undefined,symbol,bigint

// 2. Non primitive Data Type (Reference Dta Types)
// Copy --> give refrence of parent
let temp_a = [1,2,3];
let temp_b = temp_a;
temp_b.pop();  //remove value
// type: arrys [], objects {}, functions ()

//<------Primitive Dat Types-------->
// type: string, number, boolean, null, undefined, symbol, bigint
//String:
//''- Single quotes
// ""- dobule quotes
// ``- backticks
let d = "name";
d = 'username';
d = `firstname`;


// number:
let e = 12;
e = 12.25;

//boolean:
let f = true;
f = false;

//null:
// you give a value
let g = null;

// undefined:
// you don't give a value, by defualt value
let h;

// Symbol:
// unique immutable value
let u1= Symbol("uid");
let u2= Symbol("uid");
// Check u1===u2
let obj ={uid:1,name:"test",email:"test@test.com"};
let u3 =  Symbol("uid")
obj[u3]= "001"


//bigint
// check range of number , Number.Max_SAFE_INTEGER
let number = 9007199254740991;
number = number + 6;
 let num2 = 900719925470991n; 
 num2 +3n


 //<-------Non- primitive Data Types------->
 // types: arrays[],object{},function ()
 let temp_array = ["name","age","phone_number"];
 let obj = {name: "test", age:9, phone_number:987654321}
 function name(params){}
 
 //Dynamic Typing
let temp_d = "name";
temp_d = 123;
temp_d = {};
// javascript  ---> typescript


 // typeof quirks
 // typeof 12
 // Check type of variable use ---> ex. typeof NaN, typeof null, 1+"1", 1 =="1" , 1==="1"
 //why typeof NaN  ---> number
 //// NaN is a failed number oprations that why that type is number
 // ex. "hello" -5  --> NaN

 // type coeration
 // "5" + 1
 //  "5" - 1

 // Truthy vs Falsy Values
 // 0 falsem "" null undefined, NaN, document.all--- false
 // ex. !!0 -- check value is true and false
 // ex. if(null){}, js convert it into false
 // ex. if(-1){}, js convert  it into true
 // all --> true