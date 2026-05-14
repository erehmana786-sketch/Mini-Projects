let students = [
  { name: "Sara",   marks: 88 },
  { name: "Ali",    marks: 42 },
  { name: "Fatima", marks: 95 },
  { name: "Ahmed",  marks: 61 },
  { name: "Zara",   marks: 73 }
];

// List of pass students 
let passStudents=students.filter(val=>val.marks>=50)
console.log("Pass Students: ", passStudents);

// List of fail students 
let failStudents=students.filter(val=>val.marks<50)
console.log("Fail Students: ", failStudents);

// Add grades of students in list 
let getGrade=students.map(val=>{
    if (val.marks>=90) {
        return `Name: ${val.name}, Marks: ${val.marks}, Grade: A`
    } 
    else if(val.marks>=80){
        return `Name: ${val.name}, Marks: ${val.marks}, Grade:B`
    }
    else if(val.marks>=70){
        return `Name: ${val.name}, Marks: ${val.marks}, Grade:C`
    }
    else if(val.marks>=50){
        return `Name: ${val.name}, Marks: ${val.marks}, Grade:D`
    }
    else if(val.marks<50){
        return `Name: ${val.name}, Marks: ${val.marks}, Grade:Fail`
    }
})
console.log(getGrade);

// Find the Student that have highest Marks in Class
// using find() method 
let maxMarks = 0
students.forEach(val=>{
    if (val.marks>maxMarks) {
        maxMarks=val.marks
    }
})
let highestMarks = students.find(val=>val.marks===maxMarks)
console.log("Highest Marks: ", highestMarks);

// using reduce() method 
// let highestMarks=students.reduce((pre,curr)=>{
//     return pre.marks > curr.marks ? pre : curr
// })
// console.log("Topper student: ", highestMarks);

// Find class average marks 
let totalMarks = 0
students.forEach(val=>{
   totalMarks=totalMarks+val.marks
})
let averageMarks = totalMarks/students.length
console.log("Average marks:", averageMarks);