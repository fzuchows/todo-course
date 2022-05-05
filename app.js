// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions

/**
 * Add a Todo as <li> to the list
 * @param {*} event 
 */
function addTodo(event) {
  event.preventDefault();
  // console.log('heeelllooooooo');

  // Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");
  // Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  // Add newTodo to todoDiv
  todoDiv.appendChild(newTodo);
  // Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  // Check mark button
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete-btn');
  todoDiv.appendChild(deleteButton);
  // Append to Todo List
  todoList.appendChild(todoDiv);
  // Clear Todo input value
  todoInput.value = "";
}

/**
 * Function related to delete check
 */
function deleteCheck(e) {
  const item = e.target;
  //console.log("deleteCheck: ", e.target);
  //console.log(item.classList[0]);
  // Delete ToDo
  if(item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    todo.remove();
  }
}