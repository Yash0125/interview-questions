// Hoisting

console.log(count)
var count =1 ; // we get undefined

// In summary, the output is undefined because the variable count is declared using var, which is hoisted and initialized with undefined by default. At the time of console.log(count) execution, the variable has not yet been assigned a value, so it prints undefined.

console.log(count)
let count =1 ; // ReferenceError: Cannot access 'count' before initialization
// in case if let it's in temporal deadzone
// temporal deadzone=>Time b/w declaration and intialization of let and const variable
// temporal deadzone=>the varible are in scope but not yet declare 



// q-1
function abc(){
    console.log(a);
    var a=10;
}

abc()// undefined

// it's intialization the function but not variable


