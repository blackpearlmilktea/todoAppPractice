// View of an Individual Todo Item
var TodoItemView = function(todoItem) {
  this.todo = todoItem;
  this.template = this.getTemplate();
  return this;
};

TodoItemView.prototype.render = function() {
  var todoView = document.createElement("li");
  todoView.setAttribute("data-id", this.todo.id);
  todoView.innerHTML = '<input type="checkbox"/><label></label>';
  var checkbox = todoView.getElementsByTagName("input")[0];
  var label = todoView.getElementsByTagName("label")[0];
  if(this.todo.completed){
    checkbox.checked = true;
    todoView.setAttribute("class", "complete");
  };
  checkbox.addEventListener("click", this.toggleComplete.bind(this));
  label.appendChild(document.createTextNode(this.todo.title));
  //label.addEventListener("dblclick", this.editText.bind(this));
  // Add new View to list
  var list = document.getElementById("todo-list");
  list.appendChild(todoView);
};

TodoItemView.prototype.getTemplate = function() {
  var todoView = document.createElement("li");
  todoView.setAttribute("data-id", this.todo.id);
  todoView.innerHTML = '<input type="checkbox"/><label></label>';
  var checkbox = todoView.getElementsByTagName("input")[0];
  var label = todoView.getElementsByTagName("label")[0];
  if(this.todo.completed){
    checkbox.checked = true;
    todoView.setAttribute("class", "complete");
  };
  checkbox.addEventListener("click", this.toggleComplete.bind(this));
  label.appendChild(document.createTextNode(this.todo.title));
  //label.addEventListener("dblclick", this.editText.bind(this));
  return todoView;
};

// TODO toggleComplete and editText should move to todolistview
//function for listening for checkbox event to change look of item
TodoItemView.prototype.toggleComplete = function() {
  var checkbox = this.template.getElementsByTagName("input")[0];
  if (checkbox.checked){
    this.template.className = "complete";
    this.todo.toggleCompleted();
  }
  else{
    this.template.className = "";
    this.todo.toggleCompleted();
  }
};


// function for changing todo text
// function editText(){
//   var todoText = this.parentElement;
//   var id = parseInt(todoText.getAttribute('data-id'));
//   var todoItem = mainView.todoListView.todoList.getItem(id);
//   this.innerHTML = '<input type="text" value="' + todoItem.title + '"></input>';
//   var editField = this.children[0];
//   editField.focus();
//   editField.addEventListener("keypress", enterNewTodo);
//   editField.addEventListener("blur", removeEditing);
// };

// function enterNewTodo(e){
//   var todoText = this.value.trim();
//   var ENTER_KEY = 13;
//   if (e.keyCode === ENTER_KEY && todoText !== ""){
//     var todoLabel = this.parentElement;
//     var id = parseInt(todoLabel.parentElement.getAttribute('data-id'));
//     var todoItem = mainView.todoListView.todoList.getItem(id);
//     todoItem.editItem(todoText);
//     this.blur();
//   };
// };

// function removeEditing(){
//   var todoLabel = this.parentElement;
//   var id = parseInt(todoLabel.parentElement.getAttribute('data-id'));
//   var todoItem = mainView.todoListView.todoList.getItem(id);
//   todoLabel.children[0].remove();
//   todoLabel.innerHTML = todoItem.title;
// };