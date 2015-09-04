// View of an Individual Todo Item
// TODO standardize on the name "todo" or "todoItem"
var TodoItemView = function(todoItem) {
  this.todo = todoItem;
  this.template = this.getTemplate();
  this.addEvents();
  return this;
};

//TODO This is a place where Mustache templates are useful.
TodoItemView.prototype.getTemplate = function() {
  var todoView = document.createElement("li");
  todoView.setAttribute("data-id", this.todo.id);
  todoView.innerHTML = '<input type="checkbox"/><label></label>';
  var checkbox = todoView.getElementsByTagName("input")[0];
  var label = todoView.getElementsByTagName("label")[0];
  if(this.todo.completed) {
    checkbox.setAttribute("checked", true);
    todoView.setAttribute("class", "complete");
  };
  label.appendChild(document.createTextNode(this.todo.title));
  return todoView;
};

TodoItemView.prototype.addEvents = function() {
  var checkbox = this.template.getElementsByTagName("input")[0];
  var label = this.template.getElementsByTagName("label")[0];
  checkbox.addEventListener("click", this.toggleComplete.bind(this));
  label.addEventListener("dblclick", this.editText.bind(this));
};

//function for listening for checkbox event to change look of item
TodoItemView.prototype.toggleComplete = function() {
  var checkbox = this.template.getElementsByTagName("input")[0];
  if (checkbox.checked) {
    this.template.setAttribute("class", "complete");
    this.todo.toggleCompleted();
  }
  else {
    this.template.removeAttribute("class", "complete");
    this.todo.toggleCompleted();
  }
};

// function for changing todo text
TodoItemView.prototype.editText = function() {
  this.template.innerHTML = '<input type="text" value="' + this.todo.title + '"></input>';
  var editField = this.template.getElementsByTagName("input")[0];
  editField.focus();
  editField.addEventListener("keypress", this.enterNewTodo.bind(this));
  editField.addEventListener("blur", this.removeEditing.bind(this));
};

// function for entering in the new todo text upon Enter key press
TodoItemView.prototype.enterNewTodo = function(e) {
  var editField = this.template.getElementsByTagName("input")[0];
  var newTodoText = editField.value.trim();
  var ENTER_KEY = 13;
  if (e.keyCode === ENTER_KEY && newTodoText !== "") {
    this.todo.editItemText(newTodoText);
    editField.blur();
  };
};

TodoItemView.prototype.removeEditing = function() {
  this.template.innerHTML = this.getTemplate().innerHTML;
  this.addEvents();
};