var nextTodoId = 1;

// Model for a single Todo
var Todo = function(title) {
  this.id = nextTodoId;
  this.title = title;
  this.completed = false;

  nextTodoId += 1;

  return this;
};

Todo.prototype.toggleCompleted = function() {
  this.completed = !this.completed;
};

Todo.prototype.editTitle = function(newTitle) {
  this.title = newTitle;
};