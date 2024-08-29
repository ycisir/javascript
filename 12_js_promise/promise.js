// promise is asynchronous task
// it add in Microtask queue
// promise represents future value 
// in execution call stack gives first priority to {Microtask queue} against {call back}  
// {then} method always return promise 


// console.log('script start');

// const bucket = ['salt', 'vegetables', 'rice', 'chips', 'coffe'];

// const friedRicePromise = new Promise((resolve, reject)=>{
//     if(bucket.includes('rice') && bucket.includes('vegetables') && bucket.includes('salt')){
//         resolve('fried rice');
//     }else {
//         reject('could not do it');
//     }
// })


// produce 


// consume 
// friedRicePromise.then((yourPromise)=>{
//     // when promise resolved 
//     console.log('lets eat',yourPromise);
// }, (err)=>{
//     // when promise reject 
//     console.log(err);
// })


// optimize 
// friedRicePromise.then((yourPromise)=>{
//     // when promise resolved 
//     console.log('lets eat',yourPromise);
// }).catch((err)=>{
//     // when promise reject 
//     console.log(err)
// })


// setTimeout(()=>{
//     console.log('inside settimeout');
// }, 1000);


// for(let i=0; i<100; i++) {
//     console.log(i);
// }

// console.log('script end');
















// function returning promise 

// function ricePromise() {
//     const bucket = ['salt', 'vegetables', '', 'chips', 'coffe'];
//     return new Promise((resolve, reject)=>{
//         if(bucket.includes('rice') && bucket.includes('vegetables') && bucket.includes('salt')){
//             resolve({value:'fried rice'});
//         }else {
//             reject({value:'could not do it'});
//         }
        
//     })
// }

// ricePromise().then((promiseValue)=>{
//     console.log('lets eat',promiseValue.value);
// }).catch((err)=>{
//     console.log(err.value);
// })















// promise and setTimeout 

// function ricePromise() {
//     const bucket = ['salt', 'vegetables', 'rice', 'chips', 'coffe'];
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(bucket.includes('rice') && bucket.includes('vegetables') && bucket.includes('salt')){
//                 resolve({value:'fried rice'});
//             }else {
//                 reject({value:'could not do it'});
//             }
//         }, 2000)        
//     })
// }

// ricePromise().then((promiseValue)=>{
//     console.log('lets eat',promiseValue.value);
// }).catch((err)=>{
//     console.log(err.value);
// })



















// promise resolve
// promise chaining 

// function myPromise() {
//     return new Promise((resolve, reject)=>{
//         resolve('foo');
//     })
// }

// myPromise().then(promiseValue=>{
//     console.log(promiseValue);
//     promiseValue+='bar';
//     return promiseValue; // if cant return then it {undefined}
//     // return Promise.resolve(promiseValue); // same as above return
// }).then(promiseValue=>console.log(promiseValue));