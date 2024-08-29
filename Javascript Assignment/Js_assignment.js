// 1. Basic Function:
// Write a function named `sayHello` that takes no parameters and returns the string "Hello, World!".

// function sayHello() {
//     return "Hello, World!";
// }
// console.log(sayHello());  

// 2. Function with Parameters:
// Create a function `doubleNumber` that takes a number as an argument and returns the number
// multiplied by 2.

// function doubleNumber(number) {
//     return number * 2;
// }
// console.log(doubleNumber(5));  
// console.log(doubleNumber(12)); 

// 3. Simple Return Function:
// Write a function `addTwoNumbers` that accepts two numbers as arguments and returns their sum.

// function addTwoNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(addTwoNumbers(3, 7));  
// console.log(addTwoNumbers(10, 15)); 

// 4. Arrow Function:
// Convert the `doubleNumber` function from question 2 into an arrow function.

// function doubleNumber(number) {
//     return number * 2;
// }
// const doubleNumber = (number) => number * 2;
// console.log(doubleNumber(5));  
// console.log(doubleNumber(12)); 

// 5. Arithmetic Operator:
// Create a function `subtractTen` that takes a number as an argument and returns the result of
// subtracting 10 from it.

// function subtractTen(number) {
//     return number - 10;
// }
// console.log(subtractTen(20)); 
// console.log(subtractTen(5));   

// 6. Comparison Operator:
// Write a function `isGreaterThanFive` that takes a number as an argument and returns `true` if the
// number is greater than 5, otherwise `false`.

// function isGreaterThanFive(number) {
//     return number > 5;
// }
// console.log(isGreaterThanFive(7)); 
// console.log(isGreaterThanFive(3));  

// 7. Logical Operator:
// Write a function `isBetweenOneAndTen` that takes a number as an argument and returns `true` if
// the number is between 1 and 10 (inclusive), otherwise `false`.

// function isBetweenOneAndTen(number) {
//     return number >= 1 && number <= 10;
// }
// console.log(isBetweenOneAndTen(5));  
// console.log(isBetweenOneAndTen(0));  
// console.log(isBetweenOneAndTen(10)); 
// console.log(isBetweenOneAndTen(11)); 

// 8. If-Else Statement:
// Write a function `isEven` that takes a number as an argument and returns "Even" if the number is
// even, and "Odd" if the number is odd.

// function isEven(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// console.log(isEven(4)); 
// console.log(isEven(7));  

// 9. Ternary Operator:
// Write a function `checkAge` that takes an age as an argument and returns "Adult" if the age is 18
// or above, and "Minor" if the age is below 18. Implement this using the ternary operator.

// function checkAge(age) {
//     return age >= 18 ? "Adult" : "Minor";
// }
// console.log(checkAge(20)); 
// console.log(checkAge(16));  

// 10. Switch Statement:
// Create a function `getDayType` that takes a number (1-7) as an argument and returns:
// - "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
// - "Weekday" if the number is between 1 and 5.
// Use a `switch` statement to implement this logic.

function getDayType(day) {
    switch (day) {
        case 6:
        case 7:
            return "Weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        default:
            return "Invalid day"; 
    }
}
console.log(getDayType(3));  
console.log(getDayType(6));  
console.log(getDayType(7));   
console.log(getDayType(0));  

