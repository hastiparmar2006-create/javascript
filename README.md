# var, let, and const — JavaScript Comparison

This document explains the difference between `var`, `let`, and `const` in JavaScript with code examples, covering:

- Declaration & initialization
- Re-declaration & re-assignment
- Scoping
- Temporal Dead Zone (TDZ)
- Hoisting behavior

---

##  1. Basic Declaration

// var
var a = "temp";
var _123 = "hello";
var $123 = "hello";

// let
let temp = "abc";

// const
const temp_const = "hello worlds !!"

### 2. Declaration vs Initialization

var d;        // declared
var d = 12;   // declared + initialized

// var can be re-assigned and re-declared
d = 24;
var d = "hello";

// const cannot be reassigned
// temp_const = "hello"; //  error

### 3. Scoping (Global, Block, Functional)

# let Scope Exmple:

let e = 23;        // global
{
    let e = 25;    // block scope
}
function abc() {
    let e = 30;    // function scope
    console.log("functional scope " + e);
}
abc();
console.log(e);

# var Scope Example: 

var f = 10;       // global
console.log("global scope " + f);

{
    var f = 20;   // not block scoped (overwrites global)
    console.log("block scope " + f);
}

function aab() {
    var f = 30;   // function scoped
    console.log("functional scope " + f);
}
aab();
console.log(f);

### 4. Temporal Dead Zone (TDZ)

console.log(temp_b);  // undefined
var temp_b = 30;      // no TDZ with var

console.log(j); // ❌ ReferenceError (TDZ)
let j = 15;

### 5. Hoisting Effects

# Hoisting splits code into:

Declaration phase (moved to top)
Initialization phase (remains in place)

Example:
var temp_d = 12;
// becomes:
// var temp_d;    // undefined (hoisted)
// temp_d = 12;


###  JavaScript Data Types

JavaScript data types are divided into two main categories:
1. Primitive Data Types
2. Non-Primitive Data Types

---

##  1. Primitive Data Types
Primitive types store **real values**. When copied, their value is duplicated.

### Example:

let a = 12;
let b = a; // b = 12 (copy of real value)
a = a + 3; // a = 15, b is still 12

TAblo:

| Type        | Example         | Description             |
| ----------- | --------------- | ----------------------- |
| `string`    | `"hello"`       | Textual data            |
| `number`    | `12`, `12.5`    | Numeric data            |
| `boolean`   | `true`, `false` | Logical data            |
| `null`      | `null`          | Intentional empty value |
| `undefined` | `let x;`        | Value not assigned      |
| `symbol`    | `Symbol('id')`  | Unique immutable value  |
| `bigint`    | `900n`          | Large integers          |

## Examples

# String
let d = "name";
d = 'username';
d = `firstname`;

# Number
let e = 12;
e = 12.25;

# Boolean
let f = true;
f = false;

# Null
let g = null; // given value

# Undefined
let h; // no value assigned

# Symbol
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// u1 !== u2 (always unique)

# let obj = { uid: 1, name: "test", email: "test@test.com" };
let u3 = Symbol("uid");
obj[u3] = "001";

# BigInt
// Number limit check -> Number.MAX_SAFE_INTEGER
let number = 9007199254740991;
number = number + 2; // unsafe

let num2 = 9007199254740900n;
num2 + 3n; // bigint operations



### 2. Non-Primitive Data Types (Reference Types)

Non-primitive types store references, not real values.
When copied, they share the same reference.

# Example:
let temp_a = [1, 2, 3];
let temp_b = temp_a;
temp_b.pop(); // removes last value from temp_a too

| Type     | Example         |
| -------- | --------------- |
| Array    | `[]`            |
| Object   | `{}`            |
| Function | `function() {}` |


## Examples

# Array
let temp_array = ["name", "age", "phone_number"];

# Object
let obj = { name: "test", age: 9, phone_number: 6963524563 };

Function
function name(params) {}

# Dynamic Typing




