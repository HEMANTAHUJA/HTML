// Dte , rest, spread, dom

let date = new Date();


// console.log(typeof data);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());

// console.log(date.getTime());
// console.log(date.getHours());
// console.log(date.getFullYear());
// console.log(date.toTimeString());
// console.log(date.toDateString());
// console.log(date.toLocaleTimeString());


// Destructing

// let arr = [10];
// let arr = [10 , 20];

// let num = arr[2]

// let [num1, ...num3]=arr;
// let [num1,num2=100]=arr;

// ... is rest operator at the time of destructing it is used as rest opertor
// console.log(num1);
// console.log(num3);
// console.log(num1,num2);

// object Destructinguring

// let obj = {

//     firstName : "Hemant",
//     lastName  : "Ahuja",
//     address  : "jaipur",
//     gender : "male"

// }

// let { firstName:a , address} = obj;

// console.log(a);

// let obj1 = {}

// obj.firstName = "Vinay"
// obj1[firstName] = "XYZ";
// obj1[address] = "abc"

// console.log(obj1);

// let arr1 = [10,20,30];
// let arr2 = arr1;

// arr2.push(1000);

// console.log()
// let num1 = 30;

// let arr1 = [10,20,30];
// let arr2 = [10,20,30];

// arr2.push(1000);

// console.log(arr1 === arr2);

// Spread opeartor

// let arr1 = [10,20,30];
// ... is working as spread operator
// let arr2 = [...arr1]  

// arr2.push(1000);

// console.log(arr1);
// console.log(arr2);

// let arr1 = [10,20,30];
// let arr2 = [30,40,50];

// let arr3 = [...arr1 , 100, ...arr2 , 20, 1000];
// console.log(arr3);

let obj1 = {
    firstname : "hemant",
    lastname : "ahuja"
}

let obj2 ={
      firstname : "vinay",
    //   the firstname is replaced by the onj2 firstname
      address : "udaipur",
      gender : "male"
}

let obj3 = {...obj2 , ...obj1, section: "FSD"};
console.log(obj3);
