// "use strict"
// use strict is used to define strict mode in javascript
// loops , strict mode , console types, array methods

// for , while,do while

// let count = 1;
// let a =30;
// b = 30;
// console.log(b);

// function sum(){
//     if you want strict mode inside particular block
//     "use strict"
//     console.log("sum function");
// }

// sum();

// while(count<=30){
//     console.log(count);
//     count++;
// }

// do{
//     console.log(count);
//     count++;
// }while(count<=5);
// in do while the loop run atleast for one time 

// for(let i=0;i<=10;i++){
//       console.log(i);
// }

// for(i=0;i>0;i++){
//     console.log(i);
// }

// let arr = [10,20,30,40,50,60,70,80]

// for(let i=0;i<  arr.length;i++){
//     console.log(arr[i]);
// }


// for of and for in loop

// let items = ["first","second",3,4,"fifth"];

// for(let item of items){
//     console.log(item);
// }

// for(let index in items){
//     console.log(index);
//     console.log(items[index]);
// }

// strict mode 

// types of console

console.log("log statement");
console.error("this is an error console");
console.warn("this is an warning console");

console.assert(5>10,"5 is not greater than 10");
console.assert(10>5,"10 is not greater than 5");

let  personn = {
    name : "hemant",
    age : "19",
    address : {
        city :"udaipur",
        zipcode : "313001"
    },
    hobbies : ["Riding","travelling"]
}
console.dir(personn);

let data =[
    {
        name:"hemant",address : "bangalore",dept : "fsd"
    },
    {
        name:"ariiin",address : "bangalore",dept : "fsd"
        },
        {
            name:"attif",address : "bangalore",dept : "fsd"
            }
            ]

console.table(data);

console.group("group");
console.log("message 1");
console.log("message 2");
console.groupEnd();

console.count("counter");
console.count("counter");
console.count("counter");

// let arr =[10,20,30,40];
// let result=arr.push(1000); //to push the element
// console.log(result); //indexing btaega

// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// let arr =[10,20,30];
// console.log(arr.unshift(1000))
// console.log(arr); //unshift is used to add the element at 0 th index(returns array lenth)

// console.log(arr.shift()) //to remove the element from 0 the index
// console.log(arr);

// let arr1=[20,30];
// let arr2=[10,40];
// let result=arr1.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(result); 

// slice , splice
// let arr4 = [10,20,30,40,50,60];

// let slicedarr = arr.slice(2,5);
// console.log(arr);
// console.log(slicedarr);
// console.log(arr4.splice(2,2));
// arr4.splice(2,2,"Hemant","ahuja");
// to add new element just add , and write the content to add
// console.log(arr4);


// includes

// let result = arr4.includes(40);
// include return true if the content include in the array
// console.log(result);

// reverse 
// arr4.reverse();
// console.log(arr4);

// let arr5 = [10,20,30,40,50,60];

// let result1 = arr5.join("++");
// console.log(result1);
// console.log(typeof result1);
// join is used to convert the variables into string


let arraynest = [10,20,[30,[40]]];
let resultnest = arraynest.flat(2);
console.log(resultnest);
// flat is used to flat or convert the array from nested array to simple array

let arr = [10,20,30,40,50,60];

 let newArr = arr.map((item, i)=>{
    if(item == 30){
        // return item;
        // if the condition does not match it will give undefined but the length is exact as before arary
    return i*item;
    }
})
console.log(newArr);
console.log(arr);
// function inside the parameter of main function is annousmous and map is high order function

// map return a new array with the same length as original 

// foreach 

let result = arr.forEach((item , i)=>{
    console.log(i)
    // return item;
})
console.log(result);
