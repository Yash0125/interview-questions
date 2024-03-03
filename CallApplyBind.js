// // Call

// var obj = {name : "Yash"};
// function sayHello(){
//   return "Hello " + this.name;
// }

// console.log(sayHello()); // hello
// console.log(sayHello.call(obj)); // hello Yash

// // apply

// function sayHello(day,status){
//     return "Hello " + this.name + " today is " + day + " and feel "+ status;
//   }

//   var obj = {name : "Yash"};

//   sayHello.apply(obj,["tuesday", "good"]); // 'Hello Yash today is tuesday'

// // Bind

// function sayHello(){
//     return "Hello " + this.name;
//   }

//   var obj = {name : "Yash"};

//   const helloFn = sayHello.bind(obj);

//   console.log(helloFn()); // Hello yash


// Ques on o/p

// const age = 10;
// var person = {
//     name: "Yash",
//   age: 20,
//   getAge: function(){
//     return this.age;
//   }
// }

// var person2 = {age:  22};
// person.getAge.call(person2); // 22 same for apply and for bing it's return a function

// var status = '😎';

// setTimeout(() => {
//   const status = '😍';

//   const data = {
//     status: '🥑',
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); // 🥑
//   console.log(data.getStatus.call(this));// 😎 this belongs to the window/globle scope so we get 😎
// }, 0);


// const animals = [
//     { species: 'Lion', name: 'King' },
//     { species: 'Whale', name: 'Queen' }
//   ];
  
//   function printAnimals(i) {
//       this.print = function() {
//         console.log('#' + i + ' ' + this.species
//                     + ': ' + this.name);
//       }
//       this.print();
//     }
  
// printAnimals() // #undefined undefined: undefined

// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i); // #0 Lion: King #1 Whale: Queen
//   }
  

// //bind chaining is not working


// // polyfill for call method

// let car={
//     color: "red",
//     company : "farrari"
// }

// function purchaseCar(currency, price) {
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
// }

// Function.prototype.myCall=function (context={},...args) {
//     if(typeof this !== "function"){
//         throw new Error(this + "I am not a function")
//     }

//     context.fn=this;
//     context.fn(...args)
// }

// purchaseCar.myCall(car,"Rs.","5Cr.") // I have purchased red - farrari car for Rs. 5Cr.

// // for apply do change ...args = args=[] and in calling a function givr prameters in array.

// // polyfill for apply 

// let car={
//     color: "red",
//     company : "farrari"
// }

// function purchaseCar(currency, price) {
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
// }

// Function.prototype.myApply=function (context={},args=[]) {
//     if(typeof this !== "function"){
//         throw new Error(this + "It's not callable")
//     }

//     if(!Array.isArray(args)){
//         throw new TypeError("non-object")
//     }
//     context.fn=this;
//     context.fn(...args)
// }

// purchaseCar.myApply(car,["Rs.","5Cr."]) // I have purchased red - farrari car for Rs. 5Cr.

// // polyfill of bind

// let car={
//     color: "red",
//     company : "farrari"
// }

// function purchaseCar(currency, price) {
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
// }

// Function.prototype.myBind=function (context={},...args) {
//     if(typeof this !== "function"){
//         throw new Error(this + "I am not a function")
//     }

//     context.fn=this;
//     return function(...newArgs){
//         return context.fn(...args,...newArgs)
//     }
// }

// const newFunc=purchaseCar.myBind(car)
// console.log(newFunc("Rs" ,"5Cr."))

