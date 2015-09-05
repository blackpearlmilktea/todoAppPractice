// Main App View
var AppView = function() {
  this.todoListView = new TodoListView();
  return this;
};

AppView.prototype.load = function() {
  this.todoListView.render();
  this.addEvents();
};

AppView.prototype.addEvents = function() {
  $("#todo-entry").on("keypress", this.enterTodo.bind(this));
  $("#remove-button").on("click", this.removeCompleted.bind(this));
};

AppView.prototype.enterTodo = function(e) {
  var todoTitle = $("#todo-entry").val().trim();
  var ENTER_KEY = 13;
  if (e.keyCode === ENTER_KEY && todoTitle !== "") {
    this.todoListView.addTodo(todoTitle);
    $("#todo-entry").val("");
  }
};

AppView.prototype.removeCompleted = function() {
  this.todoListView.removeCompletedTodos();
};

var mainView = new AppView();
mainView.load();