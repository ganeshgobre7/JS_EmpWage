let isAbsent = 0;
let empCheck = Math.floor(Math.random() * 2);
if (empCheck == isAbsent) {
    console.log("Employee is PRESENT");
}
else {
    console.log("Employee is ABSENT");
}

//UC-2

const partTime = 1;
const fullTime = 2;
const partTimeHours = 4;
const fullTimeHours = 8;
const wagePerHour = 20;
let empHrs = 0;

let Check = Math.floor(Math.random() * 3);
switch (Check) {
    case partTime:
        empHrs = partTimeHours;
        break;
    case fullTime:
        empHrs = fullTimeHours;
        break;
    default:
        empHrs = 0;
}
let empWage = empHrs * wagePerHour;
console.log("Employee Wage is :", empWage);
//UC-3
function getWorkingHours(Check) {
    switch (Checks) {
        case partTime:
            return partTimeHours;
        case fullTime:
            return fullTimeHours;
        default:
            return 0;
    }    
}
let Checks=Math.floor(Math.random()*3);
let empHours=getWorkingHours(Checks);
console.log("Employee Hours is :",empHrs);

//UC-4

const numOfWorkingDays=20;
let Hours=0;
for(let day=0; day< numOfWorkingDays;day++){
    let Echeck=Math.floor(Math.random()*3);
    Hours+=getWorkingHours(Echeck);
}
let EmpWage=Hours*wagePerHour;
console.log("Total Hours :"+EmpWage);