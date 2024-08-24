// let myDiv = document.getElementById("main");

// myDiv.id="container";
// myDiv.className="head";
// myDiv.style.width="200px";
// myDiv.style.height="200px";
// myDiv.style.backgroundColor="green";

// console.log(myDiv.getAttribute("id"));
// console.log(myDiv.getAttribute("class"));
// console.log(myDiv.getAttribute("style"));

// myDiv.setAttribute("id","test");
// console.log(myDiv.getAttribute("id"));

// myDiv.setAttribute("style","backgroundColor :red");

// let obj ={
//     id :"main",
//     style : {
//         width : "200px",
//         height : "200px",
//         backgroundColor : "green"
//     }
// }

// obj.id = "container";
// obj.style.borderRadius = "200px";


// // setAttribute
// obj.id = "head";
// obj.style ={
//     backgroundColor : "red"
// }

// innerhtml , innertext , innercontent

// console.log(myDiv.innerHTML);
// console.log(myDiv.innerText);
// console.log(myDiv.textContent) console the hidden text also

// let myDiv = document.getElementsByTagName("div");
// console.log(myDiv);

// let colorarr = ["red","green","blue","yellow","brown","black",
//     "orange","white"
// ]
// for(let i=0;i<myDiv.length;i++){
//     myDiv[i].style.padding ="20px";
//     myDiv[i].style.margin = "10px";
//     myDiv[i].style.backgroundColor = colorarr[i];
//     myDiv[i].style.borderRadius = "10px";

// }

// let myDiv = document.querySelector("div")
// myDiv.mz

// let neewDiv = document.createElement("div");
// neewDiv.innerHTML = "hello techno";
// neewDiv.style.backgroundColor="brown";

// let myDiv2 = document.getElementById("main");
// let myDiv3 = document.getElementById("container");

// document.body.insertBefore(neewDiv,myDiv3)

// events

// document.getElementById("button").onclick = function(){
//     let newDiv = document.createElement("div");
//     newDiv.style.width="200px";
//     newDiv.style.height="200px";
//     newDiv.style.backgroundColor="yellow";
//     document.body.appendChild(newDiv);

// }

// document.getElementById("button").addEventListener("click",function(){
//         let newDiv = document.createElement("div");
//     newDiv.style.width="200px";
//     newDiv.style.height="200px";
//     newDiv.style.backgroundColor="yellow";
//     document.body.appendChild(newDiv);
// })

// document.getElementById("box").addEventListener("mouseenter",function(){
//     document.getElementById("box").style.backgroundColor="blue";
// })
let obj = {};
function getValue(a){
    obj[a.target.name] = a.target.value;

}
// document.getElementById("name").addEventListener("change",function(){
//     // let fieldvalue = document.getElementById("name").value;
//     // console.log(fieldvalue);
//     console.log(Event)
// })
document.getElementById("name").addEventListener("change",function(event
){
   getValue(event)
});
