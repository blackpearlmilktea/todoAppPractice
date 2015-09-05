// Model for a group of Todo items
var TodoList = function() {
  this.todos = [];
  return this;
};

TodoList.prototype.addTodo = function(title) {
  var newTodo = new Todo(title);
  this.todos.push(newTodo);
};


// TODO This is a place where underscore is useful
TodoList.prototype.removeTodo = function(todo) {
  for(var i = 0; i < this.todos.length; i++) {
    if(this.todos[i].id === todo.id) {
      this.todos.splice(i, 1);
    }
  }
};

TodoList.prototype.getListLength = function() {
  return this.todos.length;
};

TodoList.prototype.getNthTodo = function(n) {
  return this.todos[n];
};