var nextTodoId = 1;

var Todo = Backbone.Model.extend({
  defaults: {
    id: '',
    title: '',
    completed: false
  },
  initialize: function(){
    this.set({id: nextTodoId});
    nextTodoId += 1;
  },
  toggleCompleted: function() {
    this.completed = !this.completed;
  },
  editTitle: function(newTitle) {
    this.title = newTitle;
  }
});