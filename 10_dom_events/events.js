// click event 

// const firstBtn = document.querySelector('#one');
// firstBtn.addEventListener('click', ()=> {
//     console.log('clicked btn 1')
// })


// const allBtns = document.querySelectorAll('button');
// console.log(allBtns)


// arrow function cant work here 
// for(let btn of allBtns) {
//     btn.addEventListener('click', function() {
//         console.log(this.textContent);
//     })
// }


// for(let i=0; i<allBtns.length; i++) {
//     allBtns[i].addEventListener('click', function() {
//         console.log(this.textContent);
//     })
// }


// allBtns.forEach((btn)=>{
//     btn.addEventListener('click', function() {
//         console.log(this.textContent);
//     })
// })















// event object 

// const allBtns = document.querySelectorAll('.my-buttons button');

// for(let btn of allBtns) {
//     btn.addEventListener('click', (e)=> {
//         num = 0;
//         for(let i = 0; i<1000000000; i++) {
//             num+=i;
//         }
//         console.log(e.currentTarget.textContent, num);
//         // console.log(e.target);
//     })
// }















// const allBtns = document.querySelectorAll('.my-buttons button');

// allBtns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         e.target.style.backgroundColor = '#333';
//         e.target.style.color = '#fff';
//     })
// })












// const allBtns = document.querySelectorAll('.my-buttons button');

// allBtns.forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         e.target.style.backgroundColor = '#333';
//         e.target.style.color = '#fff';
//     })
// })












// keypress event 

// const body = document.body;

// body.addEventListener('keypress', (e)=>{
//     console.log(e.key);
// })














// mouseover event 

// const btn = document.querySelector('#one');

// btn.addEventListener('mouseover', ()=>{
//     console.log('mouseover event occured');
// })

// btn.addEventListener('mouseleave', ()=>{
//     console.log('mouseleave event occured');
// })