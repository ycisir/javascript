import render from "./render.js";
import store from "./store.js";
import { addTodo, deleteTodo, toggleCompleted } from "./store.js";

window.addEventListener('todoschange', ()=> {
  // console.log('event fired!!!');
  render();
});

// trying to get store items from local storage
const storeFromLocalStorage = JSON.parse(localStorage.getItem('store'));
if(storeFromLocalStorage?.todos.length > 0) {
  store.todos = storeFromLocalStorage.todos
}
// render();


// adding todo item
const form = document.querySelector('#form');
const todoTitleInput = document.querySelector('.todo-title-input');

form.addEventListener('submit', (e)=> {
  e.preventDefault();

  if(todoTitleInput.value) {
    const todoTitle = todoTitleInput.value;
    const newTodo = {id: crypto.randomUUID(), title: todoTitle, completed: false};
    addTodo(newTodo);
    todoTitleInput.value = '';
  }
})


// removing todo item
const todos = document.querySelector('.todos');
todos.addEventListener('click', (e)=> {
  const target = e.target;
  if(target.classList.contains('delete-todo-button')) {
    const id = target.closest('.todo').dataset.id;
    deleteTodo(id);
  }
})


// completed todo
todos.addEventListener('change', (e)=> {
  const target = e.target;
  if(target.classList.contains('todo-checkbox')){
    const id = target.closest('.todo').dataset.id;
    const completed = target.checked;
    toggleCompleted(id, completed);
  }
})
