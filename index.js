let items = JSON.parse(localStorage.getItem('items')) || [];

window.onload = loadList;
function loadList() {
  const itemsElements = items.map(item => {
    const newElement = document.createElement('li');
    newElement.textContent = item;

    let span = document.createElement('span');
    let txt= document.createTextNode('delete');
    span.classList.add("material-symbols-outlined", "deleteBtn")
    span.appendChild(txt);
    newElement.appendChild(span);

    span.addEventListener('click', function() {
      let div = this.parentElement;
      div.style.display = "none";
      items.splice(items.indexOf(div.textContent), 1);
      localStorage.setItem('items', JSON.stringify(items));
    });
    return newElement;
  });
  itemsElements.forEach(item => document.getElementById('myList').appendChild(item));
}

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

  span.addEventListener('click', function() {
    let div = this.parentElement;
    div.style.display = "none";
    items.splice(items.indexOf(div.textContent), 1);
    localStorage.setItem('items', JSON.stringify(items));
  });

  items.push(input);
  localStorage.setItem('items', JSON.stringify(items));
};

document.getElementById('addBtn').addEventListener('click', add);
document.addEventListener('keypress', function (key) {
  if (key.key === 'Enter') {
    add();
  }
});

let mylist = document.querySelectorAll('ul');
mylist.forEach(list => list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("done");
  }
}, false));

let close = document.getElementsByClassName("deleteBtn");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
    items.splice(i, 1);
    localStorage.setItem('items', JSON.stringify(items));
  }
}

var myNodeList = document.getElementsByTagName('LI');
var k;
for (k = 0; k < myNodeList.length; k++) {
  let span = document.createElement("span")
  let txt = document.createTextNode("delete");
  span.classList.add("material-symbols-outlined", "deleteBtn")
  span.appendChild(txt);
  myNodeList[k].appendChild(span);
}

