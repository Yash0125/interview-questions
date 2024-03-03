// // promises in js

// console.log("start")

// function printName(username){
//     setTimeout(() => {
//         return `Hi, I'm ${username}`
//     }, 1000);
// }

// const message=printName("Yash")

// console.log(message)

// console.log("end")

// // we will get start , undefined , end how  we can run this code . so we have to pass callback


// console.log("start")

// function printName(username,cb){
//     setTimeout(() => {
//         cb(`Hi, I'm ${username}`)
//     }, 1000);
// }

// const message=printName("Yash", function (message) {
//     console.log(message)
// })

// console.log("end")


// // now we get 
// // start
// // end
// // Hi, I'm Yash


// console.log("start")

// function printName(username,cb){
//     setTimeout(() => {
//         cb(`Hi, I'm ${username}`)
//     }, 1000);
// }

// function printCity(city,cb) {
//     setTimeout(() => {
//         cb(`I'm from ${city}`)
//     }, 1000);
// }

// const message=printName("Yash", function (message) {
//     console.log(message)
//     printCity("Surat , Gujarat",(action)=>{
//         console.log(action)
//     })
// })

// console.log("end")

// // start
// // end
// // Hi, I'm Yash
// // I'm from Surat , Gujarat


// // if we are doing same ,callback is increase. And code increase horizontaly and vertically and this is called callback hell or pyramid of dum.
// // MDN : The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.


// console.log("start");

// const promise=new Promise((resolve , reject)=>{
//     setTimeout(() => {
//         const result=true;
//         if(result) resolve("I'm resolved")
//         else reject(" I'm rejected")
//     }, 2000);
// })

// promise.then((res)=>{
//     console.log(res)
// }).catch((rej)=>{
//     console.log(rej)
// })

// console.log("end");

// console.log(promise) // Promise {<pending>}

// // start,end ,I'm resolved

// // promise 3 stat=> pending , fullfiled , rejected



// // Promise.all=> we have to give promise in array . if all promise are resolve , it's give the result . If any one is fali , it will give an error Error: Promise failled



// // Promise.race => it will give first promise. it's not care about reject or resolve . It will give first promise.


// // Promise.allSettled => if any one is fail or resolve , even it's give o/p in array format. It's shows promises in array form.


// // Promise.any => Only give first fullfilled promise. if all promise fail , it will give an error.



// // Output Questions

// // 1

// console.log("start")

// const promise1=new Promise((resolve,rejected)=>{
//     console.log(1);
//     resolve(2)
// })

// promise1.then((res)=>{
//     console.log(res)
// })

// console.log("end")

// // start
// // 1
// // end 
// // 2

// // When js engine intializing the code after start it will initialize the promise and find the synchronous fist and execute then go for async into microtask queue

// // 2

// console.log("start")

// const promise1=new Promise((resolve,rejected)=>{
//     console.log(1);
//     resolve(2)
//     console.log(3);
// })

// promise1.then((res)=>{
//     console.log(res)
// })

// console.log("end")

// // start
// // 1
// // 3
// // end
// // 2 - comes in promise - microtask


// // ex- 3

// console.log("start")

// const promise1=new Promise((resolve,rejected)=>{
//     console.log(1);
//     console.log(3);
// })

// promise1.then((res)=>{
//     console.log("result"+res)
// })

// console.log("end")

// // start
// // 1
// // 3
// // end
// // it will not print result because if there not any resolve and reject then romise1.then will not run.

// // 4

// console.log("start")

// const fn=()=>
// new Promise((resolve,rejected)=>{
//     console.log(1);
//     resolve("success")
// })

// console.log("middle")

// fn().then((res)=>{
//     console.log(res)
// })

// console.log("end")
// // start
// // middle
// // 1
// // end
// // success

// // In case of function it will call after middle so first start,middle then fn() call 1 will o/p then resolve in -microtask queue then end and success

// // Q5. Output
// function job() {
//     return new Promise(function (res, rej) {
//         rej();
//     })
// }

// let p1 = job();

// p1
//     .then(function () {
//         console.log("success1")
//     })
//     .then(function () {
//         console.log("success2")
//     })
//     .then(function () {
//         console.log("success3")
//     })
//     .catch(function () {
//         console.log("error1");
//     })
//     .then(function () {
//         console.log("success 4");
//     }) // Erro1, success 4