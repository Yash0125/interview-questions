//Q1- What is fucntion declations?

function square(num){
    return num * num
}


// It's called function defination or function statement

//Q2- What is fucntion expression ?

// MDN : The function keyword can be used to define a function inside an expression.

const square = function (num){
    return num * num
}

//Q3- What are first class fucntion ?

// mdn : A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.


function square(num){
    return num * num
}

function displaySquare(fn) {
    console.log("square is " + fn(5))
}

displaySquare(square)


//Q4- What is IIFE? // Immediately Invoked Function Expression


(function square(num){
    console.log(num * num)
})(5)


// output based question

(function (x) {
    return(function (y) {
        console.log(x);// 1
    })(2);
})(1);

// // we get 1 

// ques-5

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, i*1000);
   
}

// we get o/p 0 1 2 3 4 => every time it's create a block scope but in var it's different 
// if we use var we get 5 5 5 5 5


// Q-6 --function hoisting

printName()
function printName(){
    console.log(" Hi, I'm Yash")
}


// we get o/p :  Hi, I'm Yash || in case of var it's different we can't get value before declare 


foo()
function foo(){
  console.log(1)
}

var foo=function (){
  console.log(2)
}
function foo(){
  console.log(3)
}
foo()

// we get 3 then 2


// Q-7 O/P based

var x=21

var fun=function(){
    console.log(x);
    var x=10;
}

// we get undefined
// in global scope we have value 21 but in our local scope x is already present

// Q-8 spread and rest operator 

const fn = (a,x,y,...numbers)=>{
    console.log(x,y,numbers)
};

fn(5,6,3,7,1,9) // we get 6 3  [7, 1, 9]


// Q-9 what is callback fun

// MDN : A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

document.addEventListener("click",function(){
    // callback function
})


// Q-10 Arrow function

// 1. syntax 
// 2. return in 1 line
// 3. arguments if we give an argument to function it will give an answer but in arrow function it will give an error
// 4. this keyword


// First-Class Functions: In JavaScript, functions are first-class citizens, which means they can be treated just like any other value, such as numbers, strings, or objects. They can be assigned to variables, passed as arguments to functions, returned from functions, and stored in data structures.


// Higher-Order Functions: A higher-order function is a function that takes one or more functions as arguments and/or returns a function as its result. It leverages the concept of first-class functions to enhance its functionality and provide flexibility in working with functions.

function mathOperation(operation, a, b) {
    return operation(a, b);
  }
  
  function add(x, y) {
    return x + y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  const result1 = mathOperation(add, 3, 5); // Result will be 8 (3 + 5)
  const result2 = mathOperation(multiply, 2, 4); // Result will be 8 (2 * 4)
  