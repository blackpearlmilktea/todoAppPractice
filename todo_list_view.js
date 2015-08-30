// View of Todo List
var TodoListView = function() {
  this.todoList = new TodoList();
  return this;
};

TodoListView.prototype.render = function() {
  var list = document.getElementById("todo-list");
  list.innerHTML = "";
  for(var i = 0; i < this.todoList.getLength(); i++) {
    var todoItemView = new TodoItemView(this.todoList.getItem(i));
    list.appendChild(todoItemView.template);
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

  for(var i = 0; i < this.todoList.getLength(); i++){
    var item = this.todoList.getItem(i);
    if(item.completed){
      itemsToRemove.push(item);
    }
  }
  for(var i =0; i < itemsToRemove.length; i++){
    this.removeItem(itemsToRemove[i]);
  }
};
