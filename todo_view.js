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
    if(this.model.get("completed")){
      this.$el.addClass("complete");
    }
    return this;
  },

  events: {
    'click .completed-checkbox': 'toggleCompleted',
    'dblclick .todo-title': 'editTitle'
  },

  toggleCompleted: function() {
    this.toggleLocalTodoCompleted();
    this.model.toggleCompleted();
    this.$el.toggleClass("complete");
  },

  editTitle: function() {
    var newTemplate = '<input type="text" value="{{title}}"/>';
    this.$el.html(Mustache.render(newTemplate, this.model.attributes));
    var editField = this.$el.find("input");
    editField.focus();
    editField.on("keypress", this.enterNewTodo.bind(this));
    editField.on("blur", this.removeEditing.bind(this));
  },

  enterNewTodo: function(e) {
    var editField = this.$el.find("input");
    var newTodoTitle = editField.val().trim();
    var ENTER_KEY = 13;
    if (e.keyCode === ENTER_KEY && newTodoTitle !== "") {
      this.editLocalTodoTitle(newTodoTitle);
      this.model.editTitle(newTodoTitle);
      editField.blur();
    };
  },

  removeEditing: function() {
    this.render();
  },

  editLocalTodoTitle: function (newTitle) {
    var localTodoList = JSON.parse(localStorage.getItem("todoList"));
    var todoToChange = _.findIndex(localTodoList, this.model.attributes);
    localTodoList[todoToChange].title = newTitle;
    localStorage.setItem("todoList", JSON.stringify(localTodoList))
  },

  toggleLocalTodoCompleted: function () {
    var localTodoList = JSON.parse(localStorage.getItem("todoList"));
    var todoToChange = _.findIndex(localTodoList, this.model.attributes);
    if (todoToChange !== -1) {
      localTodoList[todoToChange].completed = !localTodoList[todoToChange].completed;
      localStorage.setItem("todoList", JSON.stringify(localTodoList));
    }
  }
});