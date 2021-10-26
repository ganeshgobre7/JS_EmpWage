let isAbsent=0;
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
let empWage=empHrs*wagePerHour;
console.log("Employee Wage is :",empWage);