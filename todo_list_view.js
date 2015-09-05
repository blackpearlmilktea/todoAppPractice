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


//TODO this is a place where underscore is useful
TodoListView.prototype.removeCompletedTodos = function() {
  // I have to store the indexes I want to remove
  // before removing any items because removing an item
  // changes the loop index
  var todosToRemove = [];

  // First find the items to remove
  for(var i = 0; i < this.todoList.getListLength(); i++) {
    var todo = this.todoList.getNthTodo(i);
    if(todo.completed) {
      todosToRemove.push(todo);
    }
  }

  // Second remove all the marked items
  for(var i = 0; i < todosToRemove.length; i++) {
    this.removeTodo(todosToRemove[i]);
  }
};
