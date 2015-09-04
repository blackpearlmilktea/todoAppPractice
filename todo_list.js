// Model for a group of Todo items
var TodoList = function() {
  this.todos = [];
  return this;
};

//TODO use title or text consistently
TodoList.prototype.addItem = function(text) {
  var newItem = new TodoItem(text);
  this.todos.push(newItem);
};


// TODO This is a place where underscore is useful
TodoList.prototype.removeItem = function(item) {
  for(var i = 0; i < this.todos.length; i++) {
    if(this.todos[i].id === item.id) {
      this.todos.splice(i, 1);
    }
  }
};

TodoList.prototype.getListLength = function() {
  return this.todos.length;
};

TodoList.prototype.getNthItem = function(n) {
  return this.todos[n];
};