// Model for a group of Todo items
var TodoList = function() {
  this.todos = [];
  return this;
};

TodoList.prototype.addItem = function(text) {
  var newItem = new TodoItem(text);
  this.todos.push(newItem);
};

TodoList.prototype.removeItem = function(item) {
  for(var i = 0; i < this.todos.length; i++) {
    if(this.todos[i].id === item.id) {
      this.todos.splice(i, 1);
    }
  }
};

TodoList.prototype.getItemById = function(id) {
  for(var i = 0; i < this.todos.length; i++) {
    if(this.todos[i].id === id) {
      return this.todos[i];
    }
  }
  return null;
};

TodoList.prototype.getListLength = function() {
  return this.todos.length;
};

TodoList.prototype.getNthItem = function(n) {
  return this.todos[n];
};