// View of Todo List
var TodoListView = function() {
  this.todoList = new TodoList();
  return this;
};

TodoListView.prototype.render = function() {
  $("#todo-list").html("");
  for(var i = 0; i < this.todoList.getListLength(); i++) {
    var todoItemView = new TodoItemView(this.todoList.getNthItem(i));
    $("#todo-list").append(todoItemView.$element);
  }
};

TodoListView.prototype.addItem = function(text) {
  this.todoList.addItem(text);
  this.render();
};

TodoListView.prototype.removeItem = function(item) {
  this.todoList.removeItem(item);
  this.render();
};

TodoListView.prototype.removeCompletedItems = function() {
  var itemsToRemove = [];

  for(var i = 0; i < this.todoList.getListLength(); i++) {
    var item = this.todoList.getNthItem(i);
    if(item.completed) {
      itemsToRemove.push(item);
    }
  }
  for(var i =0; i < itemsToRemove.length; i++) {
    this.removeItem(itemsToRemove[i]);
  }
};
