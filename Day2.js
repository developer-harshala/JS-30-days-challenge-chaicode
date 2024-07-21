// Operators
// Tasks/Activities:

// Activity 1: Arithmetic Operators
// Task 1 : Write a program to add two numbers and log the result to the console.
let number1 = 25
let number2 = 35

const AddNumbers = number1 + number2
console.log('AddNumbers', AddNumbers) //60

// Task 2 : Write a program to subtract two numbers and log the result to the console.
let number3 = 35
let number4 = 25

const SubtractNumbers = number3 - number4
console.log('SubtractNumbers', SubtractNumbers) //10

// Task 3 : Write a program to multiply two numbers and log the result to the console.
let number5 = 25
let number6 = 25

const MultiplyNumbers = number5 * number6
console.log('MultiplyNumbers', MultiplyNumbers) //625

// Task 4 : Write a program to divide two numbers and log the result to the console.
let number7 = 25
let number8 = 5

const DivideNumbers = number7 / number8
console.log('DivideNumbers', DivideNumbers) //5

// Task 5 : Write a program to find the remainder when one number is divided by another and log the result to the console.
let number9 = 25
let number10 = 25

const Modulus = number9 % number10
console.log('Modulus', Modulus) //0

// Activity 2 : Assignment Operators
// Task 6 : Use the += operator to add a number to variable and log the result to the console.
let a = 5
a += 10

console.log('+= operator', a) //15
// Task 7 : Use the -= operator to subtract a number to variable and log the result to the console.
let b = 10
b -= 5

console.log('-= operator', b) //5

// Activity 3 : Comparison Operators
// Task 8 : WAP to compare two numbers using > and < and log the result to the console.
let number11 = 25
let number12 = 15

console.log('compare>', number11 > number12) //true
console.log('compare<', number11 < number12) //false
// Task 9 : WAP to compare two numbers using >= and <= and log the result to the console.
let number13 = 50
let number14 = 100

console.log('compare>=', number13 >= number14) //false
console.log('compare<=', number13 <= number14) //true
// Task 10 : WAP to compare two numbers using == and === and log the result to the console.
let number15 = 50
let number16 = '50'

console.log('compare==', number15 == number16) //true
console.log('compare===', number15 === number16) //false

// Activity 4: Logical Operators
// Task 11: WAP that uses the && operator to combine two conditions and log the result to the console.
let alert1 = true
let alert2 = false

console.log('&& operator', alert1 && alert2) // false

// Task 12: WAP that uses the || operator to combine two conditions and log the result to the console.
let alert3 = true
let alert4 = false

console.log('|| operator', alert3 || alert4) // true
// Task 13: WAP that uses the ! operator to negate a condition and log the result to the console.
let alert5 = true

console.log('! operator', !alert5) // false

// Activity 5: Ternary Operators
// Task 14 : WAP that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let number17 = -5
let result = number17 >= 0 ? 'Positive' : 'Negative'
console.log(`The number ${number17} is ${result}.`)

// Feature Request
// 1. Arithmetic Operations Script : Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division,remainder) on two numbers and logs the results.
let num1 = 10
let num2 = 5

let addition = num1 + num2
let subtraction = num1 - num2
let multiplication = num1 * num2
let division = num1 / num2
let remainder = num1 % num2

console.log(`Addition: ${num1} + ${num2} = ${addition}`)
console.log(`Subtraction: ${num1} - ${num2} = ${subtraction}`)
console.log(`Multiplication: ${num1} * ${num2} = ${multiplication}`)
console.log(`Division: ${num1} / ${num2} = ${division}`)
console.log(`Remainder: ${num1} % ${num2} = ${remainder}`)

// 2. Comparison and Logical Operations Script: Write a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
let num3 = 10
let num4 = 5

// Comparison operations
let isEqual = num1 === num2
let isNotEqual = num1 !== num2
let isGreater = num1 > num2
let isGreaterOrEqual = num1 >= num2
let isLess = num1 < num2
let isLessOrEqual = num1 <= num2

// Logical operations
let andCondition = num1 > num2 && num1 !== num2
let orCondition = num1 < num2 || num1 === num2
let notCondition = !(num1 === num2)

console.log(`Is ${num1} equal to ${num2}? ${isEqual}`)
console.log(`Is ${num1} not equal to ${num2}? ${isNotEqual}`)
console.log(`Is ${num1} greater than ${num2}? ${isGreater}`)
console.log(`Is ${num1} greater than or equal to ${num2}? ${isGreaterOrEqual}`)
console.log(`Is ${num1} less than ${num2}? ${isLess}`)
console.log(`Is ${num1} less than or equal to ${num2}? ${isLessOrEqual}`)
console.log(
  `Is ${num1} greater than ${num2} AND not equal to ${num2}? ${andCondition}`
)
console.log(`Is ${num1} less than ${num2} OR equal to ${num2}? ${orCondition}`)
console.log(`Is it NOT true that ${num1} is equal to ${num2}? ${notCondition}`)
