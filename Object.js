// // Object
// // destructing, rest and spread operator

// // new Que
// const user ={
//     name:"Yash",
//     age:22,
// }

// user.name="Kumavat"
// delete user.age

// console.log(user); //{ name: 'Kumavat' }

// // ##new##
// const func=(function (a){
//     delete a
//     return a
// }

// )(5)

// console.log(func)// 5

// // it will return 5 because delete is use for when we have to delete value from object and here  a is variable

// // ## new ##

// const user ={
//     name:"Yash",
//     age:22,
//     "Hello, I'm Yash" : true,
// }

// console.log(user["Hello, I'm Yash"]) // true

// // we can also delete the property using delete

// // How to add key value in an object

// const property="firstname";
// const name="Yash Kumavat";

// const user={
//     [property]:name
// }

// console.log(user)// { firstname: 'Yash Kumavat' }

// // O/P based questions

// // question 1

// let obj={
//     a:"hello",
//     b:"good morning",
//     a:"good evening"
// }

// console.log(obj) // { a: 'good evening', b: 'good morning' }

// que-2 create multybytwo(obj) that multiplies
//       all numeric property value of nums by 2

// let num={
//     a:100,
//     b:200,
//     title:"my name",
// };

// multiplyBytwo(num);

// function multiplyBytwo(obj){
//     for(key in obj){
//         if(typeof obj[key]==="number"){
//             obj[key] *=2
//         }
//     }
// }

// console.log(num) // { a: 200, b: 400, title: 'my name' }

// // que-3 - o/p

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b]=123
// a[c]=456

// console.log(a) // 456

// // object not converted as key untill it's a string
// // a["[object,object]"]=123
// // a["[object,object]"]=456 so we get 456

// // Q-4 - what is JSON.strigify and JSON.parse ?

// const user ={
//     name:"Yash",
//     age:22,
// }

// const strObj= JSON.stringify(user)

// console.log(strObj)//{"name":"Yash","age":22 => convert object to string
// console.log(JSON.parse(strObj))// convert string to object

// // when we directly assign key to object in localstorage we get [object , object]. so Whenever we store value in local storage we convert object to string using stringify and then assign a key.

// // Q - 5 o/p

// console.log([..."hey"]) // [ 'h', 'e', 'y' ]

// const user={ name:"Yash", age : 21 };
// const admin={admin : true , ...user}

// console.log(admin) // { admin: true, name: 'Yash', age: 21 }

// const settings = {
//     username : "Yash",
//     level : 20,
//     health:90
// }

// const data = JSON.stringify(settings,["level","health"])
// console.log(data) // {"level":20,"health":90}

// // rest operator alwats comes at last.

// // Q-6 o/p

// let c = { greeting: "Hey" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting); // Hello

// // It's take reference of object

// console.log({ a: 1 } == { a: 1 }); //false
// console.log({ a: 1 } === { a: 1 }); // false

// let person={name:"Yash"}
// const members={person}
// person=null;

// console.log(members) // { person: { name: 'Yash' } }

// // when we do members={person} it will take member[0]=object 
// // if we do person.name=null , it will give { name: null }

// // o/p questions

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply(); // 20 
// multiply(); // 20
// multiply(value);  // 20 it's provide value. so it's store value as a 20.
//                  // so second time it's mutiply with 20*2=40 
// multiply(value);  // 40 

// // o/p question

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//       name: 'John',
//       age: 50
//     };

//     return person;
// }

// const personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?

// // { name: 'Alex', age: 25 }
// // { name: 'John', age: 50 }
// // func changeAgeAndReference willtake only age person is object so it will no bother abot person so it will give  { name: 'Alex', age: 25 }


// // Que -> shallow copy and deep copy

// // mdn shallow copy : A shallow copy of an object is a copy whose 
// //properties share the same references (point to the same underlying 
// //values) as those of the source object from which the copy was made.

// // mdn deep copy : A deep copy of an object is a copy whose properties do
// // not share the same references (point to the same underlying values) as 
// //those of the source object from which the copy was made.


// const user ={
//     name:"Yash",
//     age:22,
// }

// let objClone=Object.assign({},user) // method-1
// let objClone2=JSON.parse(JSON.stringify(user));// method-2


// interview questions of object

// Q-1 --  remove 3rd element

let a  = {​​​​​​'a' : 1, 'b' : 10, 'c' : 5, 'd' : 20}​​​​​​

delete a.c// and also delete a['c']

console.log(a)

// Q-2 -- give the greatest value


function greatestNumber(a){
    let max=0;
    for(let key in a){
        if(a[key]>max){
            max=a[key]
        }
    }
    return max
}

console.log(greatestNumber(a))

// Q-3 -- concat the array

let obj={'a' : [1,3,2], 'b' : [4,5,9], 'c' : [22,11,11], 'd' : 20}

function concatArray(obj){
    let outputArray=[];
    for(let key in obj){
        outputArray=outputArray.concat(obj[key])
    }
    return outputArray
}

console.log(concatArray(obj))


// Q-4 - get total of number

let array = [{a:5}, {b:10}, {c:15}];


function getTotal(array){
    let total=0
    for(let i = 0; i < array.length; i++){
        for(let key in array[i]){
            total = total + array[i][key]
        }
    }
    return total
}

console.log(getTotal(array))


// interview que from YT

// solve [1,2] 
// expected op=>[ { 1: 1, 2 : 2 } ]

let nums = [1,2]

var maxSubArray = function(nums) {
    return nums.map((el)=>{
        return {[el]:el}
    })
};

console.log(maxSubArray(nums))
