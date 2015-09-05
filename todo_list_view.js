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


//TODO this is a place where underscore is useful
TodoListView.prototype.removeCompletedItems = function() {
  // I have to store the indexes I want to remove
  // before removing any items because removing an item
  // changes the loop index
  var itemsToRemove = [];

  // First find the items to remove
  for(var i = 0; i < this.todoList.getListLength(); i++) {
    var item = this.todoList.getNthItem(i);
    if(item.completed) {
      itemsToRemove.push(item);
    }
  }

  // Second remove all the marked items
  for(var i =0; i < itemsToRemove.length; i++) {
    this.removeItem(itemsToRemove[i]);
  }
};
