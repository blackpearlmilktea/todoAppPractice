function addEvents(){
  document.getElementById("todo-entry").addEventListener("keypress", enterToDo);
}

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
    var span = document.createElement("span");
    var text = document.createTextNode(todo_text);
    span.appendChild(text);
    todo_item.appendChild(checkbox);
    todo_item.appendChild(span);
    document.getElementById("todo-list").appendChild(todo_item);
    document.getElementById("todo-entry").value = "";
  }

  //function for listening for checkbox event to change look of item

  // function for removing items when link for remove completed checked
}