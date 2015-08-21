var GlobalId = 0;

//Model
var TodoItem = function(title) {
  GlobalId += 1;
  this.id = GlobalId;
  this.title = title;
  this.completed = false;

  return this;
}

TodoItem.prototype.toggleCompleted = function(){
  this.completed = !this.completed;
}

var TodoList = function(){
  this.todos = [];
  return this;
}

TodoList.prototype.addItem = function(item){
  this.todos.push(item);
}

TodoList.prototype.removeItem = function(item){
  for(var i = 0; i < this.todos.length; i++){
    if(this.todos[i].id === item.id){
      this.todos.splice(i, 1);
    }
  }
}

TodoList.prototype.getItem = function(id) {
  for(var i = 0; i < this.todos.length; i++){
    if(this.todos[i].id === id){
      return this.todos[i];
    }
  }
  return null;
}

// View
var ToDoView = function(todolist){
  this.todoList = todolist;
  return this;
}

ToDoView.prototype.render = function(){
  var list = document.getElementById("todo-list");
  list.innerHTML = "";
  for(var i = 0; i < this.todoList.todos.length; i++){
    var item = new ToDoItemView(this.todoList.todos[i]);
    list.appendChild(item)
  }
}

var ToDoItemView = function(todoItem){
  var todo_item = document.createElement("li");
  var dataAtt = document.createAttribute("data-id");
  dataAtt.value = todoItem.id;
  todo_item.setAttributeNode(dataAtt);
  var checkbox = document.createElement("input");
  var att = document.createAttribute("type");
  att.value = "checkbox";
  checkbox.setAttributeNode(att);
  checkbox.addEventListener("click", toggleComplete)
  var label = document.createElement("label");
  var text = document.createTextNode(todoItem.title);
  label.appendChild(text);
  todo_item.appendChild(checkbox);
  todo_item.appendChild(label);
  return todo_item;
}


// Controller
var TodoController = function(){
  this.todoList = new TodoList();
  this.todoView = new ToDoView(this.todoList);
  return this;
}

TodoController.prototype.load = function(){
  this.todoView.render();
  addEvents();
}

// Events

function addEvents(){
  document.getElementById("todo-entry").addEventListener("keypress", enterToDo);
  document.getElementById("remove_completed").addEventListener("click", removeCompleted);
};

function enterToDo(e) {
  var todo_text = document.getElementById("todo-entry").value.trim()
  if (e.keyCode === 13 && todo_text !== ""){
    var newTodo = new TodoItem(todo_text);
    Controller.todoList.addItem(newTodo);
    Controller.todoView.render();
    document.getElementById("todo-entry").value = "";
  }
};

//function for listening for checkbox event to change look of item
function toggleComplete() {
  var todo_text = this.parentElement;
  var id = parseInt(todo_text.getAttribute('data-id'));
  var todoItem = Controller.todoList.getItem(id);
  if (this.checked){
    todo_text.className = "complete";
    todoItem.toggleCompleted();
  }
  else{
    todo_text.className = "";
    todoItem.toggleCompleted();
  }
}

// function for removing items when link for remove completed checked
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