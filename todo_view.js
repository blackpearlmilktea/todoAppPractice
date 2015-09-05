// TODO:
// Use underscore to replace your search and replace code.
// Then use mustache templates to replace HTML creating code.
// Read about CSS selector speed.
// SUPER MEGA EXTRA CREDIT make a branch that converts to Backbone!!!!


// View of an Individual Todo Item
var TodoView = function(todo) {
  this.todo = todo;
  this.$element = this.$buildElement();
  this.addEvents();
  return this;
};

// TODO This is a place where Mustache templates are useful.
TodoView.prototype.$buildElement = function() {
  var $todoView = $('<li><input type="checkbox"/><label></label></li>')
    .attr("data-id", this.todo.id);

  if(this.todo.completed) {
    $todoView.find("input").attr("checked", true);
    $todoView.attr("class", "complete");
  };

  $todoView.find("label").text(this.todo.title);
  return $todoView;
};

TodoView.prototype.addEvents = function() {
  this.$element.find("input").on("click", this.toggleComplete.bind(this));
  this.$element.find("label").on("dblclick", this.editTitle.bind(this));
};

//function for listening for checkbox event to change look of item
TodoView.prototype.toggleComplete = function() {
  this.$element.toggleClass("complete");
  this.todo.toggleCompleted();
};

// function for changing todo text
TodoView.prototype.editTitle = function() {
  // TODO This is an injection attack
  // This is where to use mustache
  this.$element.html('<input type="text" value="' + this.todo.title + '"></input>');
  var editField = this.$element.find("input");
  editField.focus();
  editField.on("keypress", this.enterNewTodo.bind(this));
  editField.on("blur", this.removeEditing.bind(this));
};

// function for entering in the new todo text upon Enter key press
TodoView.prototype.enterNewTodo = function(e) {
  var editField = this.$element.find("input");
  var newTodoTitle = editField.val().trim();
  var ENTER_KEY = 13;
  if (e.keyCode === ENTER_KEY && newTodoTitle !== "") {
    this.todo.editTitle(newTodoTitle);
    editField.blur();
  };
};

TodoView.prototype.removeEditing = function() {
  this.$element.replaceWith(this.$buildElement());
  this.addEvents();
};