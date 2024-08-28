// synchronous vs asynchronous programming

// js is synchronous programming and single threaded 
// synchronous programming

// console.log('script start');

// for(let i=0; i<10000; i++) {
//     console.log('inside loop');
// }

// console.log('script end');











// setTimeout --- e.g of asynchronous programming
// setTimeout gives ID

// console.log('script start');

// setTimeout(()=> {
//     console.log('hello world!');
// }, 1000);
// console.log('script end');




// console.log('script start');

// const id = setTimeout(()=>{
//     console.log('inside settimeout');
// }, 0);

// console.log('settimeout id',id);
// clearTimeout(id);
// console.log('script end');














// setInterval 

// console.log('script start');

// setInterval(()=> {
//     console.log(Math.random());
// }, 1000);

// console.log('script end'); 



// console.log('script start');

// setInterval(()=> {
//     for(let i=0; i<1000000; i++){
//         continue;
//     }
//     console.log(Math.floor(Math.random()));
// }, 500);

// console.log('script end'); 













// callback 

// function myFunc(callback) {
//     console.log('working on task 1');
//     callback();
// }

// myFunc(()=> {
//     console.log('working on task 2');
// });



// function getNums(n1, n2, onSuccess, onFailure) {
//     if(typeof n1 === 'number' && typeof n2 === 'number'){
//         onSuccess(n1, n2);
//     }else {
//         onFailure();
//     }
// }

// const a = Number(prompt('A'));
// const b = Number(prompt('B'));

// getNums(a, b, (a,b)=> {
//     console.log(a+b);
// }, ()=> {
//     console.log('invalid data type')
// })




