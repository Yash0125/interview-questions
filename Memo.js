// Memoization: it is an optimization technique that can be used to reduce 
// time consuming calculations by saving input to something called cache and
// returning the result from it.

let sum=0;

const calc =(n)=>{
    for(let i=0;i<=n;i++){
        sum += i
    }
    return sum
}

console.time()
console.log(calc(5));
console.timeEnd()

const memoize=(fun)=>{
    let cache={}
    return function (...args){
        let n=args[0];
        if(n in cache){//if  run only one time 
            return cache[n] // if value already , it will return 
        }else{
            // if it is not in cache , it will store then return
            console.log('calculating first time')
            let result=fun(n);
            cache[n]=result
            return result
        }
    }
}

// first time
console.time()
const efficient=memoize(calc);
console.log(efficient(5))// it will reduce the time
console.timeEnd()

// second time 
console.time()
console.log(efficient(5))// it will reduce the time
console.timeEnd()
// 15
// default: 5.614ms
// calculating first time
// 30
// default: 0.634ms
// 30
// default: 0.347ms