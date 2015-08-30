// View of Todo List
var TodoListView = function(){
  this.todoList = new TodoList();
  return this;
};

TodoListView.prototype.render = function(){
  var list = document.getElementById("todo-list");
  list.innerHTML = "";
  for(var i = 0; i < this.todoList.todos.length; i++){
    var item = new TodoItemView(this.todoList.todos[i]);
    item.render();
  }
};
