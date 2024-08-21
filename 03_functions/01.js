// function helloWorld() {
//     console.log('Hello world!');
// }

// helloWorld();


// function sum(a,b) {
//     return a+b;
// }

// const a = 2
// const b = 3
// const ans = sum(a,b)
// console.log('answer is',ans)



// function isEven(num) {
//     if(num%2==0) {
//         return true;
//     }
//     return false;
// }

// console.log(isEven(4))


// const arr = [1, 3, 6, 8, 11]
// function find(arr, key) {
//     for(let i=0; i<arr.length; i++) {
//     if(arr[i] === key)
//         return i;
//     }
//     return -1;
// }

// console.log(find(arr, 15))





// function expression
// const isEven = function(num) {
//     return num%2===0;
// }
// console.log(isEven(11))




// arrow function
// const arr = [1, 3, 6, 8, 11]
// const find = (arr, key) => {
//     for(let i=0; i<arr.length; i++) {
    //     if(arr[i] === key)
    //         return i;
    //     }
    //     return -1;
    // }
        
// console.log(find(arr, 33))


// const isEven = num => num%2 === 0;
// console.log(isEven(11))





// hoisting
// hello();
// function hello() {
//     console.log('hello')
// }

// console.log(hello)
// var hello = 'hello'
// console.log(hello)





// func inside func
// const root = () =>{
//     console.log('/ ')
//     const home = () => {
//         console.log('/home ')

//         const docs = () =>{
//             console.log('/home/docs')
//         }
//         docs();
//     }
//     home();
// }

// root();





// lexical env of root func
// const root = () =>{
//     // lexical env of home func
//     const id = 'root'
//     console.log('root access by',id)
//     console.log('/ ')
//     const home = () => {
//         // const id = 'user'
//         console.log('home access by',id)
//         console.log('/home ')

//         const docs = () =>{
//             console.log('/home/docs')
//         }
//         docs();
//     }
//     home();
// }

// root();






// block vs scope
// let ans const are block scope
// var is function scope

// {
//     const a = 12;
// }
// console.log(a)





// default parameters
// const sum = (a, b=0) => {
//     return a+b;
// }

// console.log(sum(5));
// console.log(sum(5,4));





// rest parameters
// const sum = (a, b, ...c) => {
//     console.log(a, b, c);
// }

// console.log(sum(5,4, 4,56,7));

// const add = (...arr) => {
//     let ans=0;
//     for(let i of arr) {
//         ans+=i;
//     }
//     return ans;
// }

// console.log(add(2,3,5,10));





// parameter destructing
// const person = {
//     name: 'test',
//     age: 11
// }

// const disp = (obj) => {
//     console.log('name:',obj.name);
//     console.log('age:',obj.age);
// }

// disp(person)


// const disp = ({name, age}) => {
//     console.log('name:',name);
//     console.log('age:',age);
// }
// disp(person);




// higher order function
// callback function
// const home = () => {
//     console.log('Home directory')
// }

// const root = (callback) => {
//     console.log('Root directory')
//     callback();
// }

// root(home);





// function returning function
// const func = () => {
//     // const hello = () => {
//     //     return "Hello"
//     // }

//     const hello = () => {
//         console.log('Hello')
//     }
//     return hello;
// }

// const h = func();

// if return
// console.log(h());

// h();