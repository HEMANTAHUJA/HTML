//  this

// let user = {
//     username : 'hemant',
//     age : "40",
//     getUserDetails : function(){
//         console.log(this);
        // console.log('Hello,My username is ${this.username} and my age is ${this.age}');
    // }
    // this keyword is when used with object it gives the reference of that object and
    // in global it gives the blank space
// }

// console.log(this);

// user.getUserDetails();

// Constructors  -- functions

// function Person(name,age){
//          const personObj = {
//             username : name,
//             age : age,
//             greet : function(){
//                 console.log(`Hello , my name is ${this.username} and my age is ${this.age}`);

//             }
//          }
//          return personObj;
// }

// const person1 = Person("hemant","20");
// const person2 = Person("vinay","50");
// console.log(person1);
// console.log(person2);
// person1.greet();
// person2.greet();

// function Person(name,age){
//     // console.log(this);
//     this.name = name;
//     this.age = age;
//     // this.greet = function(){
//     //     console.log(`Hello , my name is ${this.username} and my age is ${this.age}`);
//     // }
// }
// Person.prototype.greet = function(){
//     console.log(`Hello , my name is ${this.username} and my age is ${this.age}`);
// }

// const person1 = new Person("hemant","20");
// const person2 = new Person("vinay","10");
// console.log(person1);
// console.log(person2);
// person1.greet();
// person2.greet();

// let arr = [10,20,30];
// console.log()

// after javascript es6 engine the classes concept is used
// classes 

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     greet(){
//         console.log(`Hello , my name is ${this.username} and my age is ${this.age}`);
//     }

// }

// const person1 = new Person("hemant","30");
// console.log(person1);

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     speak(){
//         console.log(`${this.name} makes a noise`)
//     }
// }

// class Dog extends Animal{
//     constructor(name){
//         super(name);
//         // super keyword is used to get the property of its parent class
//     }

//     speak(){
//         // function overriding , inherit , 
//         console.log(`${this.name} barks`); 
//     }
// }

// class Cat extends Animal{
//     constructor(name){
//         super(name);
//     }

//     speak(){
//         console.log(`${this.name} meows`);
//     }
// }
// in javascript there is no pure polymorphism not pure inheritance

class BankAccount{
    #balance = 0;
    // # is ised to define the propery of that class only 
    constructor(owner){
        this.owner = owner;
    }

    deposit(amount){
        thi1s.#balance += amount;
        console.log(`${this.owner} deposited ${amount} , current balance : ${this.#balance}`);
    }
}         
