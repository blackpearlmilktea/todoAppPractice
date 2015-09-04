// View of an Individual Todo Item
var TodoItemView = function(todoItem) {
  this.todo = todoItem;
  this.template = this.getTemplate();
  this.addEvents();
  return this;
};

TodoItemView.prototype.getTemplate = function() {
  var todoView = $('<li><input type="checkbox"/><label></label></li>').attr("data-id", this.todo.id);
  if(this.todo.completed) {
    todoView.find("input").attr("checked", true);
    todoView.attr("class", "complete");
  };
  todoView.find("label").text(this.todo.title);
  return todoView;
};

TodoItemView.prototype.addEvents = function() {
  this.template.find("input").on("click", this.toggleComplete.bind(this));
  this.template.find("label").on("dblclick", this.editText.bind(this));
};

//function for listening for checkbox event to change look of item
TodoItemView.prototype.toggleComplete = function() {
  var checkbox = this.template.find("input")[0];
  if (checkbox.checked) {
    this.template.attr("class", "complete");
    this.todo.toggleCompleted();
  }
  else {
    this.template.removeAttr("class", "complete");
    this.todo.toggleCompleted();
  }
};

// function for changing todo text
TodoItemView.prototype.editText = function() {
  this.template.html('<input type="text" value="' + this.todo.title + '"></input>');
  var editField = this.template.find("input");
  editField.focus();
  editField.on("keypress", this.enterNewTodo.bind(this));
  editField.on("blur", this.removeEditing.bind(this));
};

// function for entering in the new todo text upon Enter key press
TodoItemView.prototype.enterNewTodo = function(e) {
  var editField = this.template.find("input");
  var newTodoText = editField.val().trim();
  var ENTER_KEY = 13;
  if (e.keyCode === ENTER_KEY && newTodoText !== "") {
    this.todo.editItemText(newTodoText);
    editField.blur();
  };
};

TodoItemView.prototype.removeEditing = function() {
  // bug here need to fix.
  this.template.html(this.getTemplate());
  this.addEvents();
};