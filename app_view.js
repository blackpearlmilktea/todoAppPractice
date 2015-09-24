// Main App View
var AppView = Backbone.View.extend({
  el: '#todo-list-app',

  template: '<h1>Todo List</h1>' +
            '<input type="text" id="todo-entry" placeholder="Enter a todo item"/>' +
            '<div id="todo-list-container"></div>' +
            '<button id="remove-button">Remove completed items</button>',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    this.todoList = new TodoList();
    var localTodoList = JSON.parse(localStorage.getItem("todoList"));
    if (this.todoList.isEmpty() && localTodoList != null) {
      this.todoList.reset(localTodoList)
    }
    this.todoListView = new TodoListView(this.todoList);
    this.todoListView.render();
    $('#todo-list-container').append(this.todoListView.$el);
  },

  events: {
    'keypress #todo-entry': 'enterTodo',
    'click #remove-button': 'removeCompleted'
  },

  enterTodo: function(e) {
    var todoTitle = $("#todo-entry").val().trim();
    var ENTER_KEY = 13;
    if (e.keyCode === ENTER_KEY && todoTitle !== "") {
      var newTodo = new Todo({title: todoTitle});
      this.todoList.add([newTodo]);
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      $("#todo-entry").val("");
    }
  },

  removeCompleted: function() {
    this.todoList.removeCompletedTodos();
  }
});

var mainView = new AppView();