function add() {
  const newToDo = document.createElement("li");
  const content = document.getElementById("toDoInput").value;
  const toDoList = document.getElementById("toDoList");

  newToDo.textContent = content;
  if (content === '') {
    alert("You must write something!");
  } else {
    toDoList.appendChild(newToDo);
    newToDo.addEventListener("click", function(event){ 
      if (event.target.classList.contains("done")) {
        event.target.classList.remove("done")    
      }
      else {
        event.target.classList.add("done")
      }
    });
  }
}

document.getElementById("addBtn").addEventListener("click", add);
const toDoInput = document.getElementById("toDoInput");
toDoInput.addEventListener("keyup", function(event){
  if (event.key === "Enter") {
    add();
  }
});
