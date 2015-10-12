var TodoList = Backbone.Collection.extend({
  model: Todo,

  removeCompletedTodos: function() {
    this.reset(this.where({completed: false}));
    this.save();
  },

  save: function(){
    localStorage.setItem("todoList", JSON.stringify(this.models));
  }
});