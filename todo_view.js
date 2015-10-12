var TodoView = Backbone.View.extend({
  model: Todo,
  tagName: 'li',
  template: '<input class="completed-checkbox" type="checkbox" {{#completed}}checked{{/completed}}/>' +
            '<label class="todo-title">{{title}}</label>',

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
    this.model.toggleCompleted();
    this.$el.toggleClass("complete");
    this.model.collection.save();
  },

  editTitle: function() {
    var newTemplate = '<input type="text" value="{{title}}"/>';
    this.$el.html(Mustache.render(newTemplate, this.model.attributes));
    var $editField = this.$el.find("input");
    $editField.focus();
    $editField.on("keypress", this.enterNewTodo.bind(this));
    $editField.on("blur", this.render.bind(this));
  },

  enterNewTodo: function(e) {
    var $editField = this.$el.find("input");
    var newTodoTitle = $editField.val().trim();
    var ENTER_KEY = 13;
    if (e.keyCode === ENTER_KEY && newTodoTitle !== "") {
      this.model.editTitle(newTodoTitle);
      this.model.collection.save();
      $editField.blur();
    };
  }
});