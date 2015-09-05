// View for the Todo List
var TodoListView = function() {
  this.todoList = new TodoList();
  return this;
};

TodoListView.prototype.render = function() {
  $("#todo-list").html("");
  for(var i = 0; i < this.todoList.getListLength(); i++) {
    var todoView = new TodoView(this.todoList.getNthTodo(i));
    $("#todo-list").append(todoView.$element);
  }
};

TodoListView.prototype.addTodo = function(title) {
  this.todoList.addTodo(title);
  this.render();
};

TodoListView.prototype.removeTodo = function(todo) {
  this.todoList.removeTodo(todo);
  this.render();
};

TodoListView.prototype.removeCompletedTodos = function() {
  this.todoList.removeCompletedTodos();
  this.render();
};
