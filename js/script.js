const addToButton = document.getElementById("addToDo");
const toDoContainer = document.getElementById("toDoOutput");
const inputTodo = document.getElementById("inputTodo");

addToButton.addEventListener("click", function () {
  var container = document.createElement("div");
  container.classList.add("todo-item");
  container.innerText = inputTodo.value;
  toDoOutput.appendChild(container);
  inputTodo.value = "";

  container.addEventListener("click", function () {
    container.style.textDecoration = "line-through";
  });
  container.addEventListener("dblclick", function () {
    toDoOutput.removeChild(container);
  });
});
