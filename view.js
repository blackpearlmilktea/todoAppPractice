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
  var dataAtt = document.createAttribute("data-id");
  dataAtt.value = todoItem.id;
  todo_item.setAttributeNode(dataAtt);
  todo_item.innerHTML = '<input type="checkbox"/><label></label>';
  todo_item.children[0].addEventListener("click", toggleComplete);
  todo_item.children[1].appendChild(document.createTextNode(todoItem.title));
  return todo_item;
};