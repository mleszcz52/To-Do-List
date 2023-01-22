function add() {
  const newElement = document.createElement('li');
  const input = document.getElementById('input').value;
  const list = document.getElementById('myList');
  newElement.textContent = input;

  if (input === '') {
    alert('You need to write something!');
    return;
  }
  else {
    list.appendChild(newElement);
  }
  document.getElementById("input").value = "";

  let span = document.createElement('span');
  let txt= document.createTextNode('delete');
  span.classList.add("material-symbols-outlined", "deleteBtn")
  span.appendChild(txt);
  newElement.appendChild(span);

  for(i=0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
}};

let close = document.getElementsByClassName("deleteBtn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

var myNodeList = document.getElementsByTagName('LI');
var i;
for (i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("span")
  let txt = document.createTextNode("delete");
  span.classList.add("material-symbols-outlined", "deleteBtn")
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}



let mylist = document.querySelectorAll('ul');
mylist[i].addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("done");
  }
}, false);

document.getElementById('addBtn').addEventListener('click', add);