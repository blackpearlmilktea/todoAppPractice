var nextTodoId = 1;

var Todo = Backbone.Model.extend({
  defaults: {
    id: '',
    title: '',
    completed: false
  },

  initialize: function() {
    this.set({id: nextTodoId});
    nextTodoId += 1;
  },

  toggleCompleted: function() {
    this.set('completed', !this.get('completed'));
  },

  editTitle: function(newTitle) {
    this.set('title', newTitle);
  }
});