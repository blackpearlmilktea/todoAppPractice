// View of Todo List
var TodoView = function(todolist){
  this.todoList = todolist;
  return this;
};

TodoView.prototype.render = function(){
  var list = document.getElementById("todo-list");
  list.innerHTML = "";
  for(var i = 0; i < this.todoList.todos.length; i++){
    var item = new TodoItemView(this.todoList.todos[i]);
    list.appendChild(item);
  }
};

// View of an Individual Todo Item
var TodoItemView = function(todoItem){
  var todo_item = document.createElement("li");
  todo_item.setAttribute("data-id", todoItem.id);
  todo_item.innerHTML = '<input type="checkbox"/><label></label>';
  if(todoItem.completed){
    todo_item.children[0].checked = true;
    todo_item.setAttribute("class", "complete");
  };
  todo_item.children[0].addEventListener("click", toggleComplete);
  todo_item.children[1].appendChild(document.createTextNode(todoItem.title));
  return todo_item;
};