// Main App View
var AppView = function(){
  //this.todoList = new TodoList();//TODO this could be stored in just TodoListView
  this.todoView = new TodoListView();
  return this;
}

AppView.prototype.load = function(){
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
    mainView.todoView.todoList.addItem(newTodo);
    mainView.todoView.render();
    document.getElementById("todo-entry").value = "";
  }
};


// function for changing todo text
function editText(){
  var todoText = this.parentElement;
  var id = parseInt(todoText.getAttribute('data-id'));
  var todoItem = mainView.todoView.todoList.getItem(id);
  this.innerHTML = '<input type="text" value="' + todoItem.title + '"></input>';
  var editField = this.children[0];
  editField.focus();
  editField.addEventListener("keypress", enterNewTodo);
  editField.addEventListener("blur", removeEditing);
};

function enterNewTodo(e){
  var todoText = this.value.trim();
  var ENTER_KEY = 13;
  if (e.keyCode === ENTER_KEY && todoText !== ""){
    var todoLabel = this.parentElement;
    var id = parseInt(todoLabel.parentElement.getAttribute('data-id'));
    var todoItem = mainView.todoView.todoList.getItem(id);
    todoItem.editItem(todoText);
    this.blur();
  };
};

function removeEditing(){
  var todoLabel = this.parentElement;
  var id = parseInt(todoLabel.parentElement.getAttribute('data-id'));
  var todoItem = mainView.todoView.todoList.getItem(id);
  todoLabel.children[0].remove();
  todoLabel.innerHTML = todoItem.title;
};

// function for removing items when button for remove completed clicked
function removeCompleted() {
  var list = mainView.todoView.todoList;
  var listToRemove = [];

  for(var i = 0; i < list.todos.length; i++){
    if(list.todos[i].completed){
      listToRemove.push(list.todos[i]);
    }
  }
  for(var i =0; i < listToRemove.length; i++){
    list.removeItem(listToRemove[i]);
  }
  mainView.todoView.render();
};

var mainView = new AppView();
mainView.load();