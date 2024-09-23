// Question 1: String Concatenation
// Task: Write a JavaScript program that takes a first name and a last name as input, concatenates them to form a full
// name, and then prints the full name.

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter your first name: ', function(firstName) {

//     rl.question('Enter your last name: ', function(lastName) {
        
//         let fullName = firstName + " " + lastName;

    
//         console.log("Full Name: " + fullName);

//         rl.close();
//     });
// });

// Question 2: If-Else Statements
// Task: Write a JavaScript program that checks if a number is positive, negative, or zero. Print 'Positive', 'Negative', or
// 'Zero' accordingly.

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter a number: ', function(number) {
 
//     number = parseFloat(number);

  
//     if (number > 0) {
//         console.log("Positive");
//     } else if (number < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }

//     rl.close();
// });


// Question 3: Loops
// Task: Write a JavaScript program that uses a `for` loop to print the numbers from 1 to 10.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Question 4: Functions
// Task: Write a JavaScript function called `greet` that takes a name as an argument and prints 'Hello, [name]!' to the
// console. Then, call the function with a sample name.

// function greet(name) {
//     console.log('Hello, ' + name + '!');
// }

// greet('Hemant');

// Question 5: Arrays
// Task: Write a JavaScript program that creates an array of 5 numbers, calculates the sum of all the numbers in the array,
// and prints the result.

let numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("The sum of the numbers is: " + sum);


