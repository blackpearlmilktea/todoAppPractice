// TODO:
// SUPER MEGA EXTRA CREDIT make a branch that converts to Backbone!!!!
// Local Storage extra extra
// review javascript syntax


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
  tagName: 'li',
  template: '<input class="completed-checkbox" type="checkbox" {{#completed}}checked{{/completed}}/>' +
            '<label class="todo-title">{{title}}</label>',

  initialize: function() {
    this.$el.attr("data-id", this.model.id);
  },

  render: function() {
    this.$el.html(Mustache.render(this.template, this.model.attributes));
    return this;
  },

  events: {
    'click .completed-checkbox': 'toggleCompleted',
    'dblclick .todo-title': 'editTitle'
  },

  toggleCompleted: function() {
    this.model.toggleCompleted();
    this.$el.toggleClass("complete");
  },

  editTitle: function() {

  },

  enterNewTodo: function(e) {

  },

  removeEditing: function() {

  }
});