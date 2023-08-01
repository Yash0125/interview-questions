// This

// Expain 'this' keyword

this.a = 5;

console.log(this); // window object
console.log(this.a); // 5

this.a = 5;
function getParam() {
  console.log(this.a);
}

getParam(); // we get 5

const getParam = () => {
  console.log(this.a);
};

getParam(); // we get 5

let user = {
  name: "yash",
  age: 22,
  getDetails() {
    console.log(this.name);
  },
};

// user.getDetails() // yash

let user = {
  name: "yash",
  age: 22,
  getDetails() {
    console.log(this);
  },
};

// user.getDetails() // in this case we get whole object

// In case of normal function
let user = {
  name: "yash",
  age: 22,
  childObj: {
    newName: "kumavat",
    getDetails() {
      console.log(this.newName, "and ", this.name);
    },
  },
};

user.childObj.getDetails(); //  kumavat and  undefined

class user {
  constructor(n) {
    this.name = n;
  }

  getName() {
    console.log(this.name);
  }
}

const User = new user("Yash");
console.log(User); // we get object with name Yash and also get getName() methos
User.getName(); // yash
// constructor do is that creat a new object with use of that

// O/P Que for interview

let user = {
  firstName: "yash k",
  age: 22,
  getName() {
    const firstName = "Yash";
    return this.firstName;
  },
};

console.log(user.getName()); // yash k

const user = {
  name: "Yash Kumavat",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(user.logMessage, 1000); // we will get nothing

// O/P based question - ask in interview (car24)

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  substract(a) {
    this.substract -= a;
    return this;
  },
};

const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);
