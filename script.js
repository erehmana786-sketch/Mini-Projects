let employees = [
  { name: "Sara",   dept: "IT",      salary: 80000  },
  { name: "Ali",    dept: "Sales",   salary: 50000  },
  { name: "Fatima", dept: "IT",      salary: 95000  },
  { name: "Ahmed",  dept: "HR",      salary: 60000  },
  { name: "Zara",   dept: "Sales",   salary: 55000  },
  { name: "Usman",  dept: "IT",      salary: 70000  }
];

// Employees of IT department
let itDeptEmp=employees.filter(val=>val.dept=="IT")
console.log("Employees of IT department: ",itDeptEmp);

// Employees those have 60,000+ salaries
let salary =employees.filter(val=>val.salary>=60000)
console.log("Employees those have 60,000+ salaries: ",salary);

// Raise salaries 10%
 let raisedSalaries=employees.map(val=>({
    ...val,
    salary:Math.floor(val.salary*1.10)
}))
console.log(`Raised salaries 10%: `,raisedSalaries);

// Employee who have highest salary
let highestSalary=employees.reduce((preSalary, newSalary)=>{
    return preSalary.salary > newSalary.salary ? preSalary:newSalary
})
console.log("Highest salary: ", highestSalary);

// Average salary of IT department
let totalSalary =0 
employees.filter(val=>val.dept=="IT")
.map(val=>{
    totalSalary=totalSalary+val.salary
})
let avgSalary= Math.floor(totalSalary/employees.length)
console.log("Average salary of IT department: ",avgSalary);

// How many employees in each department
let deptCounts = {};
employees.forEach(val => {
  let d = val.dept;
  deptCounts[d] = (deptCounts[d] || 0) + 1;
});
console.log(deptCounts);
// or 
let debtCount = {}
employees.forEach(val => {
if (debtCount[val.dept]) {
    debtCount[val.dept]++
} else {
     debtCount[val.dept]=1
}
    
});
console.log(debtCount);