// TODO:
// SUPER MEGA EXTRA CREDIT make a branch that converts to Backbone!!!!


// View of an Individual Todo Item
// var TodoView = function(todo) {
//   this.todo = todo;
//   this.$element = this.$buildElement();
//   this.addEvents();
//   return this;
// };

// TodoView.prototype.$buildElement = function() {
//   var template = '<li data-id={{id}} {{#completed}}class="complete"{{/completed}}>' +
//                  '<input type="checkbox" {{#completed}}checked{{/completed}}/>' +
//                  '<label>{{title}}</label></li>'
//   var element = Mustache.render(template, this.todo);
//   return $(element);
// };

// TodoView.prototype.addEvents = function() {
//   this.$element.find("input").on("click", this.toggleComplete.bind(this));
//   this.$element.find("label").on("dblclick", this.editTitle.bind(this));
// };

// TodoView.prototype.toggleComplete = function() {
//   this.$element.toggleClass("complete");
//   this.todo.toggleCompleted();
// };

// TodoView.prototype.editTitle = function() {
//   var template = '<input type="text" value="{{title}}"/>'
//   var newElement = Mustache.render(template, this.todo);
//   this.$element.html(newElement);
//   var editField = this.$element.find("input");
//   editField.focus();
//   editField.on("keypress", this.enterNewTodo.bind(this));
//   editField.on("blur", this.removeEditing.bind(this));
// };

// TodoView.prototype.enterNewTodo = function(e) {
//   var editField = this.$element.find("input");
//   var newTodoTitle = editField.val().trim();
//   var ENTER_KEY = 13;
//   if (e.keyCode === ENTER_KEY && newTodoTitle !== "") {
//     this.todo.editTitle(newTodoTitle);
//     editField.blur();
//   };
// };

// TodoView.prototype.removeEditing = function() {
//   var newElement = this.$buildElement();
//   this.$element.replaceWith(newElement);
//   this.$element = newElement;
//   this.addEvents();
// };

var TodoView = Backbone.View.extend({
  model: Todo,
  tagName: "li",
  template: '<li data-id={{id}} {{#completed}}class="complete"{{/completed}}>' +
            '<input type="checkbox" {{#completed}}checked{{/completed}}/>' +
            '<label>{{title}}</label></li>'

});