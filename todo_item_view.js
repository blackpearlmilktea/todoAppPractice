// View of an Individual Todo Item
var TodoItemView = function(todoItem){
  this.todo = todoItem;
  return this;
};

TodoItemView.prototype.render = function(){
  var todoView = document.createElement("li");
  todoView.setAttribute("data-id", this.todo.id);
  todoView.innerHTML = '<input type="checkbox"/><label></label>';
  var checkbox = todoView.getElementsByTagName("input")[0];
  var label = todoView.getElementsByTagName("label")[0];
  if(this.todo.completed){
    checkbox.checked = true;
    todoView.setAttribute("class", "complete");
  };
  checkbox.addEventListener("click", this.toggleComplete.bind(this));
  label.appendChild(document.createTextNode(this.todo.title));
  //label.addEventListener("dblclick", this.editText.bind(this));
  // Add new View to list
  var list = document.getElementById("todo-list");
  list.appendChild(todoView);
};

// TODO toggleComplete and editText should move to todolistview
//function for listening for checkbox event to change look of item
TodoItemView.prototype.toggleComplete = function() {
  var view = document.getElementByAtt
  var todoText = this.parentElement;
  if (this.checked){
    todoText.todo.className = "complete";
    todoItem.toggleCompleted();
  }
  else{
    todoText.className = "";
    todoItem.toggleCompleted();
  }
};
