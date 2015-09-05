// Model for a group of Todo items
var TodoList = function() {
  this.todos = [];
  return this;
};

TodoList.prototype.addTodo = function(title) {
  var newTodo = new Todo(title);
  this.todos.push(newTodo);
};

TodoList.prototype.removeTodo = function(todo) {
  this.todos = _.without(this.todos, todo);
};

TodoList.prototype.getListLength = function() {
  return this.todos.length;
};

TodoList.prototype.getNthTodo = function(n) {
  return this.todos[n];
};

TodoList.prototype.removeCompletedTodos = function() {
  this.todos = _.filter(this.todos, function(todo){ return !todo.completed });
};