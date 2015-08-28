// Model for a group of Todo items
var TodoList = function(){
  this.todos = [];
  return this;
};

TodoList.prototype.addItem = function(item){
  this.todos.push(item);
};

TodoList.prototype.removeItem = function(item){
  for(var i = 0; i < this.todos.length; i++){
    if(this.todos[i].id === item.id){
      this.todos.splice(i, 1);
    }
  }
};

TodoList.prototype.getItem = function(id) {
  for(var i = 0; i < this.todos.length; i++){
    if(this.todos[i].id === id){
      return this.todos[i];
    }
  }
  return null;
};