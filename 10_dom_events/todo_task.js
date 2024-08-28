const todoForm = document.querySelector('.form-todo');
const todoInput = document.querySelector('.form-todo input[type=\'text\']');
const todoList = document.querySelector('.todo-list');

todoForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const newTodo = todoInput.value;
    if(todoInput.value) {
        const newLi = document.createElement('li');
        const newLiInnerHtml = `
        <span class="text">${newTodo}</span>
        <div class="todo-btns">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>
        `;
        newLi.innerHTML = newLiInnerHtml;
        todoList.append(newLi);
    }
    
    todoInput.value = '';
})

todoList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('done')) {
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = 'line-through';
    }

    if(e.target.classList.contains('remove')) {
        const targetLi = e.target.parentNode.parentNode;
        targetLi.remove();
    }
})