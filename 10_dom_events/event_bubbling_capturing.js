// event bubbling / propogation 

// const grandParent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// child.addEventListener('click', (e)=>{
//     console.log('click on child')
// })

// parent.addEventListener('click', (e)=>{
//     console.log('click on parent')
// })

// grandParent.addEventListener('click', (e)=>{
//     console.log('click on grandParent')
// })














// capturing events 

// const grandParent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// child.addEventListener('click', (e)=>{
//     console.log('captured child')
// }, true)

// parent.addEventListener('click', (e)=>{
//     console.log('captured parent')
// }, true)

// grandParent.addEventListener('click', (e)=>{
//     console.log('captured grandParent')
// }, true)


// not capture 

// child.addEventListener('click', (e)=>{
//     console.log('bubbling on child')
// })

// parent.addEventListener('click', (e)=>{
//     console.log('bubbling on parent')
// })

// grandParent.addEventListener('click', (e)=>{
//     console.log('bubbling on grandParent')
// })
















// event delegation

const grandParent = document.querySelector('.grandparent');

// means no need to add event on everyone just add to grandparent or body so it will uses it for child also
grandParent.addEventListener('click', (e)=>{
    console.log(e.target);
})