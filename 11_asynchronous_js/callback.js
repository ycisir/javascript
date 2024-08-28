// callbacks, callback hell, pyramid of doom
// asynchronous programming 


// callback hell

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');

// setTimeout(()=> {
//     heading1.textContent = 'one';
//     heading1.style.color = 'violet';

//     setTimeout(()=> {
//         heading2.textContent = 'two';
//         heading2.style.color = 'purple';
//     }, 1000);

//     setTimeout(()=> {
//         heading3.textContent = 'three';
//         heading3.style.color = 'red';
//     }, 1000);

// }, 1000);


// setTimeout(()=> {
//     heading4.textContent = 'four';
//     heading4.style.color = 'pink';

//     setTimeout(()=> {
//         heading5.textContent = 'five';
//         heading5.style.color = 'green';

//         setTimeout(()=> {
//             heading6.textContent = 'six';
//             heading6.style.color = 'blue';
//         }, 1000);

//     }, 1000);

// }, 1000);

// setTimeout(()=> {
//     heading7.textContent = 'seven';
//     heading7.style.color = 'brown';
// }, 1000);












// pyramid of doom also callback hell

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');

function changeText(element, text, color, time, onSuccess, onFailure) {
    setTimeout(()=>{
        if(element) {
            element.textContent = text;
            element.style.color = color;

            if(onSuccess){
                onSuccess();
            }
        }else {
            if(onFailure){
                onFailure();
            }
        }
    }, time)
}

changeText(heading1, 'one', 'violet', 1000, ()=> {
    changeText(heading2, 'two', 'purple', 2000, ()=> {
        changeText(heading3, 'three', 'green', 3000, ()=> {
            changeText(heading4, 'four', 'red', 4000, ()=> {
                changeText(heading5, 'five', 'yellow', 5000, ()=> {
                    changeText(heading6, 'six', 'blue', 6000, ()=> {
                        changeText(heading7, 'seven', 'cyan', 7000, ()=> {
                        }, ()=> {console.log('heading7 doesn\'t exist!');});
                    }, ()=> {console.log('heading6 doesn\'t exist!');});
                }, ()=> {console.log('heading5 doesn\'t exist!');});
            }, ()=> {console.log('heading4 doesn\'t exist!');});
        }, ()=> {console.log('heading3 doesn\'t exist!');});
    }, ()=> {console.log('heading2 doesn\'t exist!');});
}, ()=> {console.log('heading1 doesn\'t exist!');});