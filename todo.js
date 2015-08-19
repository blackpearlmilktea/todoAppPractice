function addEvents(){
  document.getElementById("todo-entry").addEventListener("keypress", enterToDo);
  document.getElementById("remove_completed").addEventListener("click", removeCompleted);
};

addEvents();

function enterToDo(e) {
  var todo_text = document.getElementById("todo-entry").value.trim()
  if (e.keyCode === 13 && todo_text !== ""){
    // construct the to do item if text entered

    var todo_item = document.createElement("li");
    var checkbox = document.createElement("input");
    var att = document.createAttribute("type");
    att.value = "checkbox";
    checkbox.setAttributeNode(att);
    checkbox.addEventListener("click", toggleComplete)
    var label = document.createElement("label");
    var text = document.createTextNode(todo_text);
    label.appendChild(text);
    todo_item.appendChild(checkbox);
    todo_item.appendChild(label);
    document.getElementById("todo-list").appendChild(todo_item);
    document.getElementById("todo-entry").value = "";
  }
};

//function for listening for checkbox event to change look of item
function toggleComplete() {
  var todo_text = this.parentElement;
  if (this.checked){
    todo_text.className = "complete";
  }
  else{
    todo_text.className = "";
  }
}


// function for removing items when link for remove completed checked
function removeCompleted() {
  var completed = document.getElementsByClassName('complete');
  while(completed.length !== 0){
    completed[0].parentElement.removeChild(completed[0]);
  }
}
