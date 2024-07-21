// Variables and Data Types
// Tasks/Activities:

// Activity 1: Variable Declaration
// Task 1 : Declare a variable using var , assign it a number and log the value to the console.
var NumVariable = 100
console.log(NumVariable)
// Task 2 : Declare a variable using let , assign it a string and log the value to the console.
let strVariable = 'JavaScript'
console.log(strVariable)

// Activity 2 : Constant Declaration
// Task 3 : Declare a variable using const , assign it a boolean value and log the value to the console.
const boolVariable = true
console.log(boolVariable)

// Activity 3 :Data Types
// Task 4: Create a variables of different data types (number,string,boolean,object,array) and log each variable's type using the typeof operator.
let numberVariable = 5
let stringVariable = 'JS'
let booleanVariable = true
let nullVariable = null
let undefinedVariable
let bigIntVariable = 12345n
let symbolVariable = Symbol('unique')
let objvariable = { firstName: 'First', lastName: 'Last' }
let aryVariable = [2, 4, 6, 8, 10]
let funcVariable = function () {
  return 'I am a function'
}

console.log('numberVariable Type', typeof numberVariable)
console.log('stringVariable Type', typeof stringVariable)
console.log('nullVariable Type', typeof nullVariable)
console.log('undefinedVariable Type', typeof undefinedVariable)
console.log('bigIntVariable Type', typeof bigIntVariable)
console.log('symbolVariable Type', typeof symbolVariable)
console.log('objvariable Type', typeof objvariable)
console.log('aryVariable Type', typeof aryVariable) // Output: "object"
console.log('Is aryVariable an array?', Array.isArray(aryVariable)) // Output: true
console.log('funcVariable Type', typeof funcVariable)

// Activity 4:Reassigning Variables
// Task 5:Declare a variable using let, assign it an initial value , reassign a new value and log both values to the console.
let initialValue = 'Hello'
console.log('Initial Value', initialValue)
initialValue = 'Hello JavaScript'
console.log('Reassign Value', initialValue)

// Activity 5: Understanding const
// Task 6 : Try reassigning a variable declared with const and observe the error.
const a = 5
// a = 50
console.log('const variable', a)
// error >> a = 50
// ^

// TypeError: Assignment to constant variable.

// Feature Request
// 1. variable Types Console Log: write a script that declares variables of different data types and logs both the value and type of each variable to the console.
// Declare variables of different data types
let numberVar = 42
let stringVar = 'Hello, World!'
let booleanVar = true
let nullVar = null
let undefinedVar
let objectVar = { name: 'Alice', age: 30 }
let arrayVar = [1, 2, 3, 4, 5]
let functionVar = function () {
  return 'I am a function'
}
let bigIntVar = 1234567890123456789012345678901234567890n
let symbolVar = Symbol('unique')

// Log the value and type of each variable
console.log('Value:', numberVar, 'Type:', typeof numberVar) // Number
console.log('Value:', stringVar, 'Type:', typeof stringVar) // String
console.log('Value:', booleanVar, 'Type:', typeof booleanVar) // Boolean
console.log('Value:', nullVar, 'Type:', typeof nullVar) // typeof null is an odd case; it returns "object"
console.log('Value:', undefinedVar, 'Type:', typeof undefinedVar) // Undefined
console.log('Value:', objectVar, 'Type:', typeof objectVar) // Object
console.log('Value:', arrayVar, 'Type:', typeof arrayVar) // Array, typeof array is "object"
console.log('Value:', functionVar, 'Type:', typeof functionVar) // Function
console.log('Value:', bigIntVar, 'Type:', typeof bigIntVar) // BigInt
console.log('Value:', symbolVar, 'Type:', typeof symbolVar) // Symbol

// 2. Reassignment Demo : Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.
let letVariable = 'Initial value with let' // Declare
console.log('letVariable before reassignment:', letVariable)
letVariable = 'Reassigned value with let' // Reassign
console.log('letVariable after reassignment:', letVariable)

const constVariable = 'Initial value with const' // Declare
console.log('constVariable before reassignment:', constVariable)

try {
  constVariable = 'Reassigned value with const'
} catch (error) {
  console.log('Error when reassigning constVariable:', error.message) // Attempt to reassign
}

// Declare an object with const and mutate its properties
const constObject = { key: 'value' }
console.log('constObject before mutation:', constObject)
// Mutate the properties of the const object
constObject.key = 'new value'
console.log('constObject after mutation:', constObject)

// note:While you cannot reassign a const variable to a new object, you can still modify the properties of the object it references.
