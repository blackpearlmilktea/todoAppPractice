var nextTodoId = 1;

// Model for a single Todo item
var TodoItem = function(title) {
  this.id = nextTodoId;
  this.title = title;
  this.completed = false;

  nextTodoId += 1;

  return this;
};

TodoItem.prototype.toggleCompleted = function() {
  this.completed = !this.completed;
};

TodoItem.prototype.editItemText = function(newText) {
  this.title = newText;
};