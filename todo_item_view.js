// View of an Individual Todo Item
var TodoItemView = function(todoItem){
  this.todo = todoItem;
  var todoView = document.createElement("li");
  todoView.setAttribute("data-id", todoItem.id);
  todoView.innerHTML = '<input type="checkbox"/><label></label>';
  if(todoView.completed){
    todoView.children[0].checked = true;
    todoView.setAttribute("class", "complete");
  };
  //TODO Refering to things by array index gets confusing quickly
  //if you can refer to them by name it is way less confusing.
  // might not be legal syntax
  //todo_item.checkbox.addEventListner() reads cleaner.
  todoView.children[0].addEventListener("click", this.toggleComplete);
  todoView.children[1].appendChild(document.createTextNode(todoItem.title));
  todoView.children[1].addEventListener("dblclick", this.editText);
  return todoView;
};

// TodoItemView.prototype.render = function(){

// };

// TODO toggleComplete and editText should move to todolistview
//function for listening for checkbox event to change look of item
TodoItemView.prototype.toggleComplete = function() {
  var todoText = this.parentElement;
  var id = parseInt(todoText.getAttribute('data-id'));
  //this should get the todo id with
  var todoItem = Controller.todoList.getItem(id);
  if (this.checked){
    todoText.className = "complete";
    todoItem.toggleCompleted();
  }
  else{
    todoText.className = "";
    todoItem.toggleCompleted();
  }
};
