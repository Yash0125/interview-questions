// Var let and const
// Scope
// Data type

function name(params) {
    //function scope
}

{
    // block scope
}

var a=5;
console.log(a)// 5

// var is function scope but let and const are block scope

{
    var a=5;
}

// console.log(a)// 5
// we can still exis the var value which is 5
// In block scope, if we change to let or const, we get an error=> ReferenceError : a is not defined

{
    let a=5;
    console.log(a)// 5
}

console.log(a)// ReferenceError: a is not defined

shadowing

function test() {
    let a = "hello"

    if (true){
        let a = "Hi"
        console.log(a)
    }
    console.log(a)
}

test()// we get Hi and hello. but in case of var we get hi

function mixedScopeExample() {
    var x = 10; // var is function-scoped
    let y = 20; // let is block-scoped
    const z = 30; // const is block-scoped and cannot be reassigned
  
    if (true) {
      var a = 40; // var behaves like block scope within a block due to let or const presence
      let b = 50; // let is block-scoped
      const c = 60; // const is block-scoped
      console.log("Inside block:", a, b, c); // Accessible
    }
  
    console.log("Outside block:", a); // Accessible (var behaves like block scope within function)
    // console.log("Outside block:", b, c); // These lines would result in an error since b and c are not defined here
  
    console.log("Inside function:", x, y, z); // Accessible
  }
  
  mixedScopeExample();

function func() {
    var a = 'Hello';
    let b = 'Yash';

    if (true) {
        let a = 'Hi'; // Legal Shadowing
        var b = 'Bye'; // Illegal Shadowing
        console.log(a);// 1.Hi ✅
        console.log(b);// 2. SyntaxError: Identifier 'b' has already been declared ❌
    }
}
test();

const a;
const a; // syntext Error : Missing initializer in const declaration

let b;
let b;
// SyntaxError: Identifier 'b' has already been declared and same with const

let a=20;
a=10
console.log(a)// a
// in case of const it will give TypeError: Assignment to constant variable.For let and var can be re-declaration

// ex-1

const a=[10]

a[1]=2;

console.log(a)// [10,2]

// ex-2

const a=[10]
a[0]=2;
console.log(a)// [2]

// In array and object we can change the value

// ex-3

let greeting = "Hello";
greeting = "Hi";
console.log(greeting); // Output: "Hi"

// ex-4

const greeting = "Hello";
greeting = "Hi"; // Error: Reassigning a constant variable

// ex-5

const greeting = "Hello";
greeting[0] = "Y"; // This has no effect on the string
console.log(greeting); // Output: "Hello" (the string remains unchanged)

// Data type


// Primitive Data Types:

// Number: Represents numeric values, both integers and floating-point numbers.

// String: Represents sequences of characters, enclosed in single or double quotes.

// Boolean: Represents a logical value that can be either true or false.

// Null: Represents the intentional absence of any object value.

// Undefined: Represents a variable that has been declared but not assigned a value.

// Symbol: Represents a unique and immutable data type (introduced in ECMAScript 2015).


// Non-Primitive (Reference) Data Types:

// Object: Represents a collection of key-value pairs, typically created using object literals {} or the new Object() constructor. Includes arrays, functions, and custom objects.

// Array: Represents an ordered list of values, typically created using square brackets [].
// Function: Represents a reusable block of code that can be invoked.

// Date: Represents a specific point in time, allowing manipulation and formatting of dates and times.

// RegExp: Represents regular expressions used for pattern matching within strings.

// Map: Represents a collection of key-value pairs with iterable methods.

// Set: Represents a collection of unique values with iterable methods.

// etc.: There are other non-primitive data types provided by built-in objects and classes, such as Error, Promise, Buffer (in Node.js), etc.

// Primitive data types have a fixed size and
// **** are immutable****,

// meaning their values cannot be changed once they are created. They are compared by their value.

// Non-primitive data types are objects that can hold a collection of values or references to other values. They have dynamic sizes and

// **** are mutable, ****

// meaning their contents can be changed after they are created. Non-primitive data types are compared by reference, not by value.
