// Controller
var TodoController = function(){
  this.todoList = new TodoList();
  this.todoView = new TodoView(this.todoList);
  return this;
}

TodoController.prototype.load = function(){
  this.todoView.render();
  addEvents();
}

// Events
// TODO: Should these methods be part of the view or the controller?
// Also your controller and view are slightly redundant since this is a small app.
// maybe you only need one class.
function addEvents(){
  document.getElementById("todo-entry").addEventListener("keypress", enterToDo);
  document.getElementById("remove_completed").addEventListener("click", removeCompleted);
};

function enterToDo(e) {
  var todoText = document.getElementById("todo-entry").value.trim();
  var ENTER_KEY = 13;
  if (e.keyCode === ENTER_KEY && todoText !== ""){
    var newTodo = new TodoItem(todoText);
    Controller.todoList.addItem(newTodo);
    Controller.todoView.render();
    document.getElementById("todo-entry").value = "";
  }
};

//function for listening for checkbox event to change look of item
function toggleComplete() {
  var todoText = this.parentElement;
  var id = parseInt(todoText.getAttribute('data-id'));
  var todoItem = Controller.todoList.getItem(id);
  if (this.checked){
    todoText.className = "complete";
    todoItem.toggleCompleted();
  }
  else{
    todoText.className = "";
    todoItem.toggleCompleted();
  }
}

// function for removing items when button for remove completed clicked
function removeCompleted() {
  var list = Controller.todoList;
  var listToRemove = [];

  for(var i = 0; i < list.todos.length; i++){
    if(list.todos[i].completed){
      listToRemove.push(list.todos[i]);
    }
  }
  for(var i =0; i < listToRemove.length; i++){
    list.removeItem(listToRemove[i]);
  }
  Controller.todoView.render();
}

var Controller = new TodoController();
Controller.load();