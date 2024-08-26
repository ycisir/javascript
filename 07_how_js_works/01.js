// compilation 
// code execution 

// why compilation 


// how js code executes 

// what is global code execution context 
// what is local execution context 





// analyze this code 

// console.log(this); 
// console.log(window);
// console.log(fName); // undefined
// var fName = 'jack';










// analyze this code 

// console.log(this);
// console.log(window);
// console.log(myFun); 
// myFun() // hoisting
// console.log(fName); // undefined

// function myFun() {
//     console.log('this is function');
// }

// var fName = 'jack';
// var lName = 'sparrow';



// var fName = fName + ' ' + lName;
// console.log(fName);












// analyze this code 

// console.log(myFunc);
// var myFunc = function() {
//     console.log('this is function');
// }
// console.log(myFunc);













// analyze this code 

// same for const and both are hoisted
// tdz --- temporal dead zone 
// console.log(fName); // uninitialize error
// let fName = 'jack'; 
// console.log(fName);










// analyze this code 
// here fName uninitialized we can say this time is {tdz --- temporal dead zone}
// let fName = 'jack'; // now initialize with 'jack'
// console.log(fName);













// function execution context 

// let foo = 'foo';
// console.log(foo);

// function getFullName(fName, lName) {
//     console.log(arguments);
//     let var1 = 'variable inside function';
//     console.log(var1);
//     const fullName = fName + ' ' + lName;
//     return fullName;    
// }

// const personName = getFullName('jakc', 'sparrow');
// console.log(personName);










// lexical environment 

// const lName = 'sparrow'; // lexical env of 'printName'

// const printName = function() {
//     const fName = 'jack';
//     function print() {
//         console.log(fName);
//         console.log(lName);
//     }
//     print();
// }

// printName();