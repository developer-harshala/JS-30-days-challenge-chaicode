// Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// Task 1 : Write a program to check if a number is positive,negative or zero and log the result to the console.
let num = -5
if (num > 0) {
  console.log('This number is positive')
} else {
  console.log('This number is negative or zero')
}

// Task 2 : Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 18
if (age >= 18) {
  console.log('A person is eligible to vote')
} else {
  console.log('A person is not eligible to vote')
}

// Activity 2 : Nested If-Else Statements
// Task 3 : WAP to find the largest of three numbers using nested if-else statements.
let a = 10
let b = 5
let c = 7
let largest

if (a >= b && a >= c) {
  largest = a
} else if (b >= a && b >= c) {
  largest = b
} else {
  largest = c
}

console.log('The largest number is ' + largest)

// Activity 3 : Switch Case
// Task 4 : WAP that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday'
    break
  case 1:
    day = 'Monday'
    break
  case 2:
    day = 'Tuesday'
    break
  case 3:
    day = 'Wednesday'
    break
  case 4:
    day = 'Thursday'
    break
  case 5:
    day = 'Friday'
    break
  case 6:
    day = 'Saturday'
}

console.log("Today's Day is " + day)

// Task 5 : WAP that uses a switch case to assign a grade ("A","B","C","D","F") based on a score and log the grade to the console.
let score = 60
let grade
switch (true) {
  case score >= 85:
    grade = 'A'
    break
  case score >= 65:
    grade = 'B'
    break
  case score >= 50:
    grade = 'C'
    break
  case score >= 36:
    grade = 'D'
    break
  case score <= 35:
    grade = 'F'
    break
}

console.log('Grade is ' + grade)

// Activity 4: Conditional (Ternary) Operator
// Task 6: WAP that uses the ternary operator to check if a number is even or odd and log the result to the console.
const number = 5
const result = number % 2 == 0 ? 'even' : 'odd'

console.log(`The number is ${result}.`)

// Activity 5: Combining (Ternary) Operator
// Task 14 : WAP to check if a year is a leap year using multiple conditions (divisible by 4,but not 100 unless also divisible by 400) and log the result to the console.
const year = 2024
const isLeapYear =
  (0 == year % 4 && 0 != year % 100) || 0 == year % 400
    ? 'leap Year'
    : 'not a leap year'
console.log(`${year} is ${isLeapYear}`)

// Feature Request
// 1. Number Check Script : Write a script that checks if a number is positive, negative or zero using if-else statements and log the result.
let numCheck = 10

if (numCheck > 0) {
  console.log(numCheck + ' is positive.')
} else if (numCheck < 0) {
  console.log(numCheck + ' is negative.')
} else {
  console.log(numCheck + ' is zero.')
}

// 2. Voting Eligibility Script : Create a script to check if a person is eligible to vote based on their age and log the result.
let ageCheck = 18

if (ageCheck >= 18) {
  console.log('You are eligible to vote.')
} else {
  console.log('You are not eligible to vote.')
}

// 3. Day of the week Script : Write a script that uses a switch case to determine the day of the week based on a number and logs the day name.
let dayNumber = 3 // Change this value to test different days (0 for Sunday, 1 for Monday, ..., 6 for Saturday)

let dayName

switch (dayNumber) {
  case 0:
    dayName = 'Sunday'
    break
  case 1:
    dayName = 'Monday'
    break
  case 2:
    dayName = 'Tuesday'
    break
  case 3:
    dayName = 'Wednesday'
    break
  case 4:
    dayName = 'Thursday'
    break
  case 5:
    dayName = 'Friday'
    break
  case 6:
    dayName = 'Saturday'
    break
  default:
    dayName = 'Invalid day number'
}

console.log(dayName)

// 4.Grade Assignment Script : Create a script that uses a switch case to assign a grade based on a score and logs the grade.
let scoreCheck = 85
let gradeCheck

switch (true) {
  case scoreCheck >= 90 && scoreCheck <= 100:
    gradeCheck = 'A'
    break
  case scoreCheck >= 80 && scoreCheck < 90:
    gradeCheck = 'B'
    break
  case scoreCheck >= 70 && scoreCheck < 80:
    gradeCheck = 'C'
    break
  case scoreCheck >= 60 && scoreCheck < 70:
    gradeCheck = 'D'
    break
  case scoreCheck >= 0 && scoreCheck < 60:
    gradeCheck = 'F'
    break
  default:
    gradeCheck = 'Invalid score'
}

console.log('Your grade is: ' + gradeCheck)

// 5.Leap year check script : Write a script that checks if the year is a leap year using multiple conditions and logs the result.
let yearCheck = 2024 // Change this value to test different years

if ((yearCheck % 4 === 0 && yearCheck % 100 !== 0) || yearCheck % 400 === 0) {
  console.log(yearCheck + ' is a leap year.')
} else {
  console.log(yearCheck + ' is not a leap year.')
}
