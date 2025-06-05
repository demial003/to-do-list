import createTodo from "./modules/todo.js";
import createProj from "./modules/project.js";
import { renderHome, newProjBtn } from "./modules/home.js";
import todoForm from "./modules/todoForm.js";

renderHome();
newProjBtn();
todoForm();

const btn = document.getElementById("newProj");

btn.addEventListener("click", () => {
  let testProj = createProj("testing", "test project");

  for (let i = 0; i < 5; i++) {
    let temp = createTodo("todo " + i, "testing", i, i + 1);
    testProj.addTodo(temp);
  }

  console.log(testProj.getProjs());
});

const form = document.getElementById("todoForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name");
  const desc = document.getElementById("desc");
  const dueDate = document.getElementById("dueDate");
  const prio = document.getElementById("prio");

  const todo = createTodo(name.value, desc.value, dueDate.value, prio.value);
});
