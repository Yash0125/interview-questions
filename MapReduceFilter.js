// What is map ?

// Is use for creating a new array from existing one by applying function to each one of element of the array.

const nums = [1, 2, 3, 4];

const MultiplyTwo = nums.map((num, i, arr) => {
  return num * 2;
});

console.log(MultiplyTwo); //[ 2, 4, 6, 8 ]
// take 3 parameters : z1. num:element 2. i:index 3. arr : array

// Filter - filter a value with a new array

const nums = [1, 2, 3, 4];

const moreThanTwo = nums.filter((num)=>{
    return num > 2;
})

console.log(moreThanTwo) // [ 3, 4 ]

// Reduce - take 2 things =>1. intial value and 2. callback function.

const nums = [1, 2, 3, 4];

const sum=nums.reduce((acc,cuur,i,arr)=>{
    return acc + curr
},0)

console.log(sum) // 10

// take 4 parameters
// 1. accumulator : result of the previous computation. (!computation) ? first array element value : previous computation
// 2. curr : current value
// 3. i: index
// 4. arr: array

// Polifill for map()

Array.prototype.myMap=function (cb) {
    let temp=[];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))

    }
    return temp
}

const nums = [1, 2, 3, 4];

const MultiplyTwo = nums.myMap((num, i, arr) => {
  return num * 2;
});

console.log(MultiplyTwo); // [ 2, 4, 6, 8 ]

// Polifill for Filter()

Array.prototype.myFilter=function (cb) {
    let temp=[];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i])

    }
    return temp
}

const nums = [1, 2, 3, 4];

const moreThanTwo = nums.myFilter((num)=>{
    return num > 2;
})

console.log(moreThanTwo) // [ 3, 4 ]

// Polifill for Reduce()

//arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const nums = [1, 2, 3, 4];

const sum=nums.myReduce((acc,curr,i,arr)=>{
    return acc + curr
},0)

console.log(sum) // 10

// map vs foreach

const arr = [2, 5, 3, 4, 7];

const mapResult= arr.map((ar)=>{
    return ar + 2;
})

const forEachResult=arr.forEach((ar,i)=>{
    arr[i] = ar + 3
})

console.log(mapResult,forEachResult,arr) // [ 4, 7, 5, 6, 9 ] undefined [ 5, 8, 6, 7, 10 ]

// map is create a new array and give a result and foreach change in original array. In this case , foreach change arr value after operations and map give new array mapResult.

// In map you can chain a method like .filter.reduce and in foreach you can't do it.

// Output based questions

let students = [
  { name: "John", rollNumber: 101, marks: 85 },
  { name: "Emily", rollNumber: 102, marks: 92 },
  { name: "Michael", rollNumber: 103, marks: 78 },
  { name: "Sophia", rollNumber: 104, marks: 95 },
  { name: "William", rollNumber: 105, marks: 88 },
];

// Q1 - return a students name in uppercase or capital

const results = students.map((i) => {
  return i.name.toUpperCase();
});
console.log(results); // [ 'JOHN', 'EMILY', 'MICHAEL', 'SOPHIA', 'WILLIAM' ]

// Q2 - return only details of those who scored more than 90 marks

const details = students.filter((stu) => stu.marks > 90);
console.log(details);

// [
//   { name: 'Emily', rollNumber: 102, marks: 92 },
//   { name: 'Sophia', rollNumber: 104, marks: 95 }
// ]

// Q3 - return marks more than 90 and rollnumber > 103

const filterByMarkRoll = students.filter(
  (stu) => stu.rollNumber > 103 && stu.marks > 90
);

console.log(filterByMarkRoll); // [ { name: 'Sophia', rollNumber: 104, marks: 95 } ]

// Q4 - sum of marks of all students

const sumOfMark = students.reduce((acc, curr) => {
  return acc + curr.marks;
}, 0);

console.log(sumOfMark); // 438

// Q5 - names of students who scored more then 90

const names = students.filter((stu) => stu.marks > 90).map((stu)=>stu.name)
console.log(names) // [ 'Emily', 'Sophia' ]


// Q6 - return total marks for student with marks > 90 after 5 marks have been added to those who scored less than 90

const totalMarks=students.map((stu)=>{
    if(stu.marks < 90){
        stu.marks+=5
    }
    return stu
}).filter((stu)=>stu.marks>90).reduce((acc,curr)=>acc + curr.marks,0)

console.log(totalMarks)// 280
