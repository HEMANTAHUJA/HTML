// conditional statements

// console.log(!0);
// if else, switch, ternary operator
// functions -> 
// Array , object 
// loops

// let count = 30;
  
// if(count==20){
//     console.log("the count is 20");
// }
// else{
//     console.log("the count is not 20");
// }

// if(count==20){
//     console.log("the count is 20");
// }
// else if(count >20){
//     console.log("the count is greater than 20");
// }else{
//     console.log("the count is less than 20");
// }


// let firstnumber = prompt("enter first number");
// to get input the prompt keyword is used

// console.log(firstnumber);

// let username = prompt("Enter username:");
// let password = prompt("Enter password");

// if(username === "admin" && password === 123){
//   alert("Auth Successful");
// }else{
//    alert("Auth failed");
// }

// if(username === "admin"){
//     if(password === 123){
//         console.log("Auth successful");
//     }else{
//         console.log("auth failed");
//     }
// }else{
//     console.log("auth failed");
// }

// let count = 100;

// count === 20? console.log("the count is 20") : console.log("count is not 20!");
// count === 20? console.log("the count is 20") : count > 20? console.loh("the count is grater than 20") : console.log("the count is less than 20");

//  let username = prompt("Enter username:");
//  let password = +prompt("Enter password");
// +promt is used to take number as input if we do not include + then it will take input as string

//  (username === "admin" && password === 123)? alert("Auth successful") : alert("Auth failed")

//  SWITCH CASES

// let dayNumber = 3;
// let dayName;

// switch(dayNumber){
//     case 1:
//         dayName = "Monday";
//         break;
//     case 2: 
//         dayName = "Tuesday";
//         break;
//     case 3: 
//         dayName = "Wednesday"; 
//         break; 
//     case 4: 
//         dayName = "Thrusday";  
//         break;
//     case 5: 
//         dayName = "Friday";
//         break;
//     case 6: 
//         dayName = "Saturday";
//         break;
//     case 7: 
//         dayName = "Sunday";
//         break;
//     default:
//         dayName = "Invalid day number";
// }

// console.log(dayName);

// function
// function declaration 

// function sum(){
//     console.log("this is sum function");
// }

// sum();

// funcion expression
// const sum = function(){
//     console.log("This is function expression")
// }


//  arrow functions

// let sum = ()=>{
//     console.log("This is arrow function");
// }


// sum();

// let add = (a,b)=>{
//     console.log(a+b);
// }
// add(2,5);

//  let add = (a,b)=>a+b;

//  let result = add(2,5);
//  console.log(result);

// 2nd difference between var let const

// global scope / local scope or functional scope 
// Es6 - block scope

// function func(){
// local scope or functional scope

// }

// if(true){

//     block scope the scopes other than function all scope are block scope
// }else{

// }

// var = global scope variable 
// let & count = block scope variable , local scope variable if the function case 
//{
// var a = 20;
// var a = 20;
// it will show error because it can be accessed only inside the block while var can be used as global scope variable
//}
// {
//     let a = "hemant";
//     console.log(a);
// }

// console.log(a);

// function sum(){
//     var a = 20;
//     return a;
// }

// console.log(a);

// Array and objects
// let arr = [10,20,30,40,50];

// console.log(arr[arr.length - 1]);

// let nesstedarr = [10,20,30,[1,2,3,4],[20,30,40,["aaa","aab",[true , false]]]];
// let newarr = nesstedarr[nesstedarr.length -1];
// let newarr2 = newarr[newarr.length-1];
// let newarr3 = newarr2[newarr2.length-1]
// console.log(newarr3[0]);
// let newarr = nesstedarr[nesstedarr.length-1][nesstedarr.length-1].length-1;
// console.log(newarr);

// console.log(arr.length);
// arr[arr.length] = "hemant";
// console.log(arr);

// objects 
let obj = {
    "firstname" : "hemant",
    "lastname" : "ahuja"
}
// obj.lastname = "samuel"
// to add new key use .section 
obj.section  = "FSD"

let firstName = "section";

let keyName = "address";

obj[keyName] = "jaipur"
console.log(obj);

