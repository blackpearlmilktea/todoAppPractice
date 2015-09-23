// View for the Todo List

var TodoListView = Backbone.View.extend({
  tagName: 'ul',
  id: 'todo-list',

  initialize: function(todoList) {
    this.todoList = todoList;
    this.todoList.on('add', _.bind(this.appendTodoView, this));
    // so might listen for reset on todolist, so need to add html = "" to render
  },

  render: function() {
    this.todoList.each(function(todo){this.appendTodoView(todo)}, this);
  },

  appendTodoView: function(newTodo) {
    this.$el.append(new TodoView({model: newTodo}).render().el);
  },

  removeCompletedTodos: function() {

  }
});


// var TodoListView = function() {
//   this.todoList = new TodoList();
//   return this;
// };

// TodoListView.prototype.render = function() {
//   $("#todo-list").html("");
//   for(var i = 0; i < this.todoList.getListLength(); i++) {
//     var todoView = new TodoView(this.todoList.getNthTodo(i));
//     $("#todo-list").append(todoView.$element);
//   }
// };

// TodoListView.prototype.addTodo = function(title) {
//   this.todoList.addTodo(title);
//   this.render();
// };

// TodoListView.prototype.removeTodo = function(todo) {
//   this.todoList.removeTodo(todo);
//   this.render();
// };

// TodoListView.prototype.removeCompletedTodos = function() {
//   this.todoList.removeCompletedTodos();
//   this.render();
// };
