var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },

  toggleCompleted: function() {
    this.set('completed', !this.get('completed'));
  },

  editTitle: function(newTitle) {
    this.set('title', newTitle);
  }
});