var TodoListView = Backbone.View.extend({
  tagName: 'ul',
  id: 'todo-list',

  initialize: function(todoList) {
    this.todoList = todoList;
    this.todoList.on('add', _.bind(this.appendTodoView, this));
    this.todoList.on('reset', _.bind(this.removeCompletedTodos, this));
  },

  render: function() {
    this.todoList.each(function(todo){this.appendTodoView(todo)}, this);
  },

  appendTodoView: function(newTodo) {
    this.$el.append(new TodoView({model: newTodo}).render().el);
  },

  removeCompletedTodos: function() {
    this.$el.html("");
    this.render();
  }
});