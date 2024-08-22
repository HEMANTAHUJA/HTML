// let arr = [10,20,30,40,50];

// let filteredArr = arr.filter((item)=>item>30);

// console.log(filteredArr);

// reduce
// let arr = [10,20,30,40,50];
// let sum = arr.reduce((acc, curr)=>acc+curr,1000);
// we can set the value of current
// reduce is used to short or reduce 

//      acc      curr
//       0       10
    //   10      20
    //   30      30
    //   60      40
    //   100     50
    //   150
    // in this it returning the value of accumulator to the sum variable
// console.log(sum);

// let founditem = arr.find((item)=>item>20);
// console.log(founditem);

// find is used to find the particular item and it return only one item when the condition is satisfied

// let findelementindex = arr.findIndex((item)=>item>30);
// console.log(findelementindex);
// it is used to find the index of the item which satisfies the condition

// let arr2 = [11,13,15,40,50];
// let hasEven = arr2.some((item)=>item%2==0);
// if any one condition satisfies in some then it return true 
// console.log(hasEven);

// let evenArr = arr2.every((item)=>item%2===0);
// console.log(evenArr);

// objects methods

// let obj = {
//     firstname : "hemant",
//     lastname : "ahuja"
// }
// in object we use Object constructor while in array we use array name 
// let keys = Object.keys(obj);
// console.log(keys);

// let values = Object.values(obj);
// console.log(values);
// it will give the values of the keys

// let entries = Object.entries(obj);
// console.log(entries);
// and it will return the keys along with values

// obj.firstname = "hemant";
// obj.address = "udaipur";
// console.log(obj);

// const object1 ={
//       firstname1 : "hemant",
//       lastname1  : "ahuja"
// }
// console.log(object1);

// Object.seal(object1);

// object1.firstname1="gamer";
// seal can let you change the values but cant let you b add new property or value
// while freeze cant let you change the value or add new property or value
// console.log(object1);

// console.log(object1.hasOwnProperty("gender"));
// hasownproperty is used to find is that passed property is existed in the object if exist then it return true otherwise false

// Sttring methods

// let str = "hello world! get";

// let char = str.charAt(7);
// console.log(char);
// charat is used which return the value at index we have to pass index no. as parameter

// let newstr = str.concat(" techno");
// console.log(newstr);
// concat is used to add new string in the existing string or variable

// let hasworld = str.includes("World");
// console.log(hasworld);
// .includes gives true if the given string existed in the string values and false if not and they are case sensitive

// let index = str.indexOf("ld");
// console.log(index);
// let index1 = str.lastIndexOf("g");
// console.log(index1);
// indexof is returning the index of the string value passsed of full string

// let str = "hello world!";
// let slicedstr = str.slice(3,8);
// console.log(slicedstr);
// slice is used to get the value or string from one index to other index we have to pass index no. as parameter

// let substr = str.substring(4,8);
// console.log(substr);
// substring work just like slice in slice the -string is accepted and start form end but 
// substring takes - value index as 0 this is the difference between slice and substring 

// let newstr = str.toUpperCase();
// console.log(newstr);
// it converts the whole string into uppercase while lowercase is used to convert
// whole string into lower case letters


// let str = "     hello world!   ";
// console.log(str.length);
// let trimmedstr = str.trim();
// console.log(trimmedstr);
// console.log(trimmedstr.length);
// trim is used to remove the unwanted free spaces form the string 


// let str = "hello world!";
// slice can be used in array and string both while splice can only be used with array
// while split is used only with string

// let splitedstr = str.split(" ");
// console.log(splitedstr);
// split is used to split the string by passing the value like space,etc and put them in a array

// let str = "hello world!";
// let newstr = str.replace("world" , "techno");
// console.log(newstr);
// replace method is used to replace a value or string with other value or string

// let newstrr = str.repeat(3);
// console.log(newstrr);
// repeat method is used to repeaat the string value by passsing the no. of times to repeat


// ** MATH OBJECT **

// let num = Math.random();
// console.log(num);
// random method with math object is used to get random numbers from between 0 to 1

// let num = 10.2345;
// console.log(Math.round(num));
// floor and seal are used to get the floating point numbers to their if floor then it 
// will get the num to floor and seal to its highest peak
// while round is used to roundoff the num value

// console.log(Math.pow(2,3));
// console.log(Math.sqrt(16));

// let num = Math.random();
// generating four digit otp
let num = Math.floor(Math.random() * (9000)) + 1000;
console.log(num);