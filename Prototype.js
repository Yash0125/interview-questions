// In simple word we can say thay one object tring to access  a methods and property of other object

let arr=[ "Yash" , "Kumavat"]

let object={
    name:"yash",
    city:"Ghani",
    getIntro:function(){
        console.log(this.name + "from" + this.city)
    }
}

/// Whenever we creating an array or object browser attached a some property which is in array fromat like toString(), fill() ect.. this we get to prototype.


Function.prototype.myBind=function(){
    console.log("mybind")
}

function fun(){

}

// arr.__proto__=Array.prototype
// arr.__proto__.__proto__=Object.prototype
// arr.__proto__.__proto__.__proto__=null

// if we do like fun.mybind mehod we get access to console.log("mybind")