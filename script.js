let todo = [];

function addTodo() {
  todo.push({
    title: document.querySelector("input").value,
  });
  addComponent(todo.length - 1);
  document.querySelector("input").value = "";
}

function deleteTodo(index) {
  todo.splice(index, 1);
  removeComponent(index);
}

function editTodo(index) {
  const newTitle = prompt("Edit your todo:", todo[index].title);
  if (newTitle !== null && newTitle.trim()) {
    todo[index].title = newTitle;
    updateComponent(index);
  }
}

function addComponent(index) {
  const element = createdComponent(todo[index], index);
  document.querySelector("#todoLists").appendChild(element);
}

function removeComponent(index) {
  const list = document.querySelector("#todoLists");
  const itemToRemove = list.children[index];
  list.removeChild(itemToRemove);

  for (let i = index; i < list.children.length; i++) {
    const li = list.children[i];
    const deleteBtn = li.querySelector(".deleteBtn");
    const editBtn = li.querySelector(".editBtn");

    deleteBtn.setAttribute("onclick", `deleteTodo(${i})`);
    editBtn.setAttribute("onclick", `editTodo(${i})`);
  }
}

function updateComponent(index) {
  const list = document.querySelector("#todoLists");
  const li = list.children[index];
  const h3 = li.querySelector("h3");

  h3.innerHTML = todo[index].title;
}

function createdComponent(todo, index) {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

  li.setAttribute("class", "listItem");
  editBtn.setAttribute("class", "editBtn");
  deleteBtn.setAttribute("class", "deleteBtn");

  editBtn.setAttribute("onclick", `editTodo(${index})`);
  deleteBtn.setAttribute("onclick", `deleteTodo(${index})`);

  editBtn.innerHTML = "Edit";
  deleteBtn.innerHTML = "Delete";
  h3.innerHTML = todo.title;
  li.appendChild(h3);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  return li;
}
