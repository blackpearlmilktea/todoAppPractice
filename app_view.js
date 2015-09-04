// Main App View
var AppView = function(){
  this.todoListView = new TodoListView();
  return this;
}

AppView.prototype.load = function(){
  this.todoListView.render();
  this.addEvents();
}

//can remove unneeded comments when code explains clearly
// Events for Textfield and Remove Completed button
AppView.prototype.addEvents = function() {
  // be consistent about dash and underscore naming
  document.getElementById("todo-entry").addEventListener("keypress", this.enterToDo.bind(this));
  document.getElementById("remove_button").addEventListener("click", this.removeCompleted.bind(this));
};

// function for adding new items when they are entered in textfield
AppView.prototype.enterToDo = function(e) {
  var todoText = document.getElementById("todo-entry").value.trim();
  var ENTER_KEY = 13;
  if (e.keyCode === ENTER_KEY && todoText !== ""){
    // AppView tells todoListView to add an item
    this.todoListView.addItem(todoText);
    document.getElementById("todo-entry").value = "";
  }
};

// function for removing items when button for remove completed clicked
AppView.prototype.removeCompleted = function() {
  this.todoListView.removeCompletedItems();
};

var mainView = new AppView();
mainView.load();