// closures 
// closure - 30-40% 
// analyze - 70-80% 
// real example - 100% 


// function can return function 

// function printFullName(fName, lName) {
//     // lexical environment === local memory
//     function printName() {
//         console.log(fName, lName);
//     }
//     return printName; // return with local memory variables i.e {closure}
//     // fName, lName --- local memory variable
// }

// const getName = printFullName('jack', 'sparrow');

// getName();



// analyzing the code 

// function myFunction(power) {
//     return function(number) {
//         return number ** power;
//     }
// }

// same as above 
// const myFun = power => number => number**power;

// const sqr = myFunction(2);
// const ans = sqr(2);
// console.log(ans)


// const cube = myFunction(3);
// const ans = cube(2);
// console.log(ans)