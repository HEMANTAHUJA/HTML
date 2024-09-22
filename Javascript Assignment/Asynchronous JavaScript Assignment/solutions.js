// 1. **Basic `setTimeout`:**
// - Write a function called `delayedMessage` that takes a message and a delay (in milliseconds) as arguments. Use
// `setTimeout` to log the message to the console after the specified delay.
// function delayedMessage(message, delay) {
//     setTimeout(() => {
//         console.log(message);
//     }, delay);
// }

// delayedMessage("This message is delayed by 5 seconds!", 5000);


// 2. **Basic setInterval:**
// - Create a function called countdown that takes a number as an argument. Use setInterval to log the countdown
// from that number to zero, decrementing by 1 every second. Stop the interval when it reaches zero.

// function countdown(start) {
//     let current = start;

//     const intervalId = setInterval(() => {
//         console.log(current);
        
//         current--;
//         if (current < 0) {
//             clearInterval(intervalId);
//             console.log("Countdown finished!");
//         }
//     }, 1000); 
// }

// countdown(5);


// 3. **Clearing Intervals:**
// - Extend the countdown function from the previous question to also accept a callback function that gets executed
// when the countdown reaches zero. Ensure the interval is cleared after the countdown completes.

// function countdown(start, callback) {
//     let current = start;

//     const intervalId = setInterval(() => {
//         console.log(current);
        
//         current--;

//         if (current < 0) {
//             clearInterval(intervalId);
//             console.log("Countdown finished!");
//             if (typeof callback === "function") {
//                 callback();
//             }
//         }
//     }, 1000);
// }

// countdown(5, () => {
//     console.log("This is the callback function executing after the countdown.");
// });





// 4. **Using Promises with setTimeout:**
// - Write a function called wait that returns a Promise. The Promise should resolve after a delay (in milliseconds) that is
// passed as an argument to the function. Test this function by logging a message to the console once the promise
// resolves.

// function wait(milliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Waited for ${milliseconds} milliseconds.`);
//         }, milliseconds);
//     });
// }

// wait(2000) 
//     .then((message) => {
//         console.log(message);
//     });





// 5. **Promise-based Countdown:**
// - Refactor the countdown function to return a Promise that resolves when the countdown completes. Use the wait
// function from the previous question to handle the delay between countdown steps.

// function wait(milliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, milliseconds);
//     });
// }

// function countdown(start) {
//     return new Promise(async (resolve) => {
//         for (let current = start; current >= 0; current--) {
//             console.log(current);
//             await wait(1000); 
//         }
//         console.log("Countdown finished!");
//         resolve(); 
//     });
// }

// countdown(5).then(() => {
//     console.log("This is executed after the countdown is complete.");
// });





// 6. **Chaining Promises:**
// - Create a function delayedLogSequence that takes an array of messages and delays (in milliseconds). The function
// should use Promises to log each message to the console in sequence, waiting for the specified delay between each log.
// function wait(milliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, milliseconds);
//     });
// }

// function delayedLogSequence(messages) {
//     return messages.reduce((promiseChain, { message, delay }) => {
//         return promiseChain.then(() => {
//             console.log(message);
//             return wait(delay); 
//         });
//     }, Promise.resolve());
// }

// const messages = [
//     { message: "First message", delay: 1000 }, 
//     { message: "Second message", delay: 2000 },
//     { message: "Third message", delay: 1500 },  
// ];

// delayedLogSequence(messages).then(() => {
//     console.log("All messages have been logged in sequence.");
// });



// 7. **Using `async/await` with Promises:**
// - Rewrite the `delayedLogSequence` function using `async/await` instead of chaining `.then()` methods. Ensure the
// function logs each message with the specified delay.
// function wait(milliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, milliseconds);
//     });
// }

// async function delayedLogSequence(messages) {
//     for (const { message, delay } of messages) {
//         console.log(message);
//         await wait(delay);    
//     }
//     console.log("All messages have been logged in sequence.");
// }

// const messages = [
//     { message: "First message", delay: 1000 },
//     { message: "Second message", delay: 2000 },
//     { message: "Third message", delay: 1500 },
// ];

// delayedLogSequence(messages);






// 8. **Combining `setTimeout` and Promises:**
// - Create a function called `randomDelayMessage` that logs a message to the console after a random delay between 1
// and 5 seconds. Use `setTimeout` and a Promise to implement this.
// function randomDelayMessage(message) {
//     return new Promise((resolve) => {
//         const randomDelay = Math.floor(Math.random() * 4000) + 1000;
        
//         setTimeout(() => {
//             console.log(message);
//             resolve(); 
//         }, randomDelay);
//     });
// }

// randomDelayMessage("This message is logged after a random delay.").then(() => {
//     console.log("Message has been logged.");
// });



// 9. **Using `setInterval` with Promises:**
// - Write a function called `repeatAction` that takes an action (a function), an interval (in milliseconds), and a duration (in
// milliseconds). Use `setInterval` to repeatedly execute the action at the specified interval, but stop after the specified
// duration. Return a Promise that resolves when the repeating action stops.
// function repeatAction(action, interval, duration) {
//     return new Promise((resolve) => {
//         const intervalId = setInterval(() => {
//             action(); 
//         }, interval);

//         setTimeout(() => {
//             clearInterval(intervalId); 
//             resolve(); 
//         }, duration);
//     });
// }
// const action = () => {
//     console.log("Action executed!");
// };

// repeatAction(action, 1000, 5000) 
//     .then(() => {
//         console.log("Repeating action has stopped.");
//     });


