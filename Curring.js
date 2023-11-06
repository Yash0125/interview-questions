// What is currying function in JavaScript ?

// It is a technique in functional programming, that transforms the function of multiple arguments into
// several functions of a single argument in sequence.

// It helps us to create a higher-order function
// It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
// It is very useful in building modular and reusable code
// It helps us to avoid passing the same variable multiple times
// It makes the code more readable

function calculateVolume(length, breadth, height) {
  return length * breadth * height;
}
console.log(calculateVolume(4, 5, 6)); //120

// This example explains the currying technique with the help of closures.

function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      return length * breadth * height;
    };
  };
}
console.log(calculateVolume(4)(5)(6));

// Que - 1 get sum(1)(2)(3)().....

let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

console.log(sum(1)(2)(3)(4)());
