
// console.log(a);
// console.log(sum());

// var a = 20;
// let a = 20;
// let b = 1000;

// function sum(){
//     let x = 200;
//     let y = 300;
//     return x + y;

// }
// let sum = function(){

//         let x = 200;
//     let y = 300;
//     return x + y;
// }

// let c = 100;

// console.log(a,b,c);

// sum();

// timers function

// let timeout = setTimeout(()=>{
//     console.log("Hello techno");

// },5000);

// let interval = setInterval(()=>{
//     console.log(Math.random());
// },2000);

// document.getElementById("button").addEventListener("click",function(){
//     console.log("stop button clicked");
//     clearInterval(interval);
// });

// document.getElementById("timeout").addEventListener("click",function(){
//     console.log("stop timeout button clicked");
//     clearTimeout(timeout);
// });

// Async Js

// javascript is synchronus langauage but sometimes it behave as asynchronus 

// let a = 20;
// let b = 30;
// console.log(a+b);

// setTimeout(()=>{
//     console.log("hello techno")
// ,0})

// console.log(a);

// setTimeout(() => {
//     console.log("second timeout");
// }, 2000);
// console.log(b);
// whenever timeout is touched by javascript it will transfer it into worker thread and perform other task and then timeout function

// promises

// call backs

// function step1(callback){
//     setTimeout(()=>{
//         console.log("step 1 completed");
//         callback();
//     },1000)
// }
// function step2(callback){
//     setTimeout(()=>{
//         console.log("step 2 completed");
//         callback();
//     },1000)
// }
// function step3(callback){
//     setTimeout(()=>{
//         console.log("step 3 completed");
//         callback();
//     },1000)
// }

// call back hell this is not appropriate way 
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("all steps completed");
//         })
//     })
// })

// promises
// promise is a ibject which contain multiple values like promise state 

// function fetchdata(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
            // let data = {
            //     firstNamr : "hemant",
            //     lastName : "ahuja"
            // };
            //   return reject(data);
//             try{
//    let data = {
//                 firstNamr : "hemant",
//                 lastName : "ahuja"
//             };
//               return resolve(data);
//             } catch (error) {
//                return reject(error);
//             }
//         },2000);
        // let data = {
        //     firstNamr : "hemant",
        //     lastName : "ahuja"
        // };
        // return resolve(data);
//     })
// }

// let fetchedata = fetchdata();
// console.log(fetchdata);

// promise states - pemding , fufilled , rejested 
// pending  -- fulfilled 
// pending -- rejected
// fetchedata
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// });
// if the state from pending to fufilled then it uses then block and if its rejected then it goes to catch block

// https://fakestoreapi.com/products

// function fetchproductdata(){
//        let data = fetch("https://fakestoreapi.com/products");
//     //    console.log("Next step after fetching");
//        return data;
// }

// let fetchedproduct = fetchproductdata();
// console.log(fetchedproduct);

// fetchedproduct
// .then((res)=>{
//      return res.json();
//     // console.log(res.json());
//     // json is used to get the data in radable format
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// document.getElementById("product-button").addEventListener("click",function(){
//     fetch("https://fakestoreapi.com/products")
//     .then((res)=>res.json())
//     .then((data)=>{
//         data.foreach((item)=>{
//             let newDiv = document.createElement("div");
//             newDiv.innerHTML = '<img style=;
//             let mydiv = document.getElementById("products");
//             mydiv.appendChild(newDiv);
//         })
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// })