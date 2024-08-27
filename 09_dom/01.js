// DOM 
// document object model 

// console.log(window.document);
// console.dir(window.document);


// events 
// 1- click 
// 2- submit 
// 3- scroll 









// elements that returns object
// 1- document.getElementById('id') 
// 2- document.querySelector('#id', '.class')
// 3- document.querySelectorAll('.class')










// change text 
// textContent, innerText 

// const header = document.getElementById('heading');
// console.log(header.textContent); // give actual content if it's hidden
// header.textContent = 'Schedule your tasks';

// console.log(header.innerText); //give only visible content












// change the style of elements 

// const header = document.querySelector('.section-todo h2')
// // console.log(header.style);
// header.style.color = '#eee';
// header.style.backgroundColor = '#333';











// get and set attributes 

// const inputElement = document.querySelector('.form-todo input');
// console.log(inputElement.getAttribute('type'));

// inputElement.setAttribute('placeholder', 'Add your tasks here');
// console.log(inputElement.getAttribute('placeholder'));










// get multiple elements using getElements by classname 
// give arr like objects --- html-collections

// const items = document.getElementsByClassName('classname'); 




// get multiple elements items using querySelectorAll
// give arr like objects --- nodelist

// const items = document.querySelectorAll('.classname'); 












// loops 
// simple for loop
// for of loop
// for each --- can't use to iterate through {html collection}

// const items = document.querySelectorAll('.classname'); 
// const items = document.getElementsByTagName('a'); 

// for(let i=0; i<items.length; i++) {
//     const navItem = items[i];
//     navItem.style.backgroundColor = '#333';
// }












// innerHtml 

// const container = document.querySelector('.container h2');
// console.log(container.innerHTML)

// container.innerHTML = '<h2>Schedule your plan</h2>'









// class list 

// const sectionTodo = document.querySelector('.section-todo');
// // console.log(sectionTodo.classList)

// sectionTodo.classList.add('some-class'); // adding class to html
// console.log(sectionTodo.classList);


// sectionTodo.classList.remove('container'); // removing class
// console.log(sectionTodo.classList);

// console.log(sectionTodo.classList.contains('container')); // check class exist or not


// if class exist then toggle remove it and if not then toggle add it 
// sectionTodo.classList.toggle('classname') // toggle the class












// creating html element in js 

// const todoList = document.querySelector('.todo-list');
// // console.log(todoList)
// todoList.innerHTML += '<li>added new item</li>'

// when to use and not to use innerhtml
// 1- performance issue --- not use if want to add element
// 2- use if you want to change then content











// right way to add element 

// document.createElement() 
// append --- add at start
// prepend --- add at end
// remove 

// const todoList = document.querySelector('.todo-list');
// const newItem = document.createElement('li');
// const newItemText = document.createTextNode('Newly added items');
// newItem.append(newItemText);
// todoList.append(newItem);


// const newItem = document.createElement('li');
// newItem.textContent = 'another task added';
// const todoList = document.querySelector('.todo-list');
// todoList.appendChild(newItem);


// const todo1 = document.querySelector('.todo-list li');
// // console.log(todo1.textContent);
// todo1.remove();
// console.log(todo1.textContent);









// before / after 

// const todoList = document.querySelector('.todo-list');
// const newItem = document.createElement('li');
// newItem.textContent = 'new task';
// todoList.before(newItem); // add before {ul tag}


// const todoList = document.querySelector('.todo-list');
// const newItem = document.createElement('li');
// newItem.textContent = 'new task';
// todoList.after(newItem); // add after {ul tag}











// Element.instertAdjacentHTML(where, html) 
// beforebegin
// afterbegin
// beforeend
// afterend

// const todoList = document.querySelector('.todo-list');
// todoList.insertAdjacentHTML('beforeend', '<li>New task</li>');
// todoList.insertAdjacentHTML('beforebegin', '<li>New task</li>');













// const ul = document.querySelector('.todo-list');
// const li = document.createElement('li');
// li.textContent = 'new task';
// ul.append(li); // at a time it will append or prepend
// ul.prepend(li);







// static vs live list 

// queryselectorAll gives static list --- node list
// getElementbysomething give live list --- html collections











// get the dimensions of elements 

const sectionTodo = document.querySelector('.todo-list');
const info = sectionTodo.getBoundingClientRect();
console.log(info);