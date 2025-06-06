import createTodo from "./modules/todo.js";
import createProj from "./modules/project.js";
import { renderHome, newProjBtn } from "./modules/home.js";
import renderTodoForm from "./modules/todoForm.js";
import renderProjForm from "./modules/projectForm.js";
import renderProject from "./modules/renderProject.js";
import renderTodo from "./modules/renderTodo.js";

renderHome();
newProjBtn();
renderTodoForm();

const btn = document.getElementById("newProj");

btn.addEventListener("click", () => {
  renderProjForm();
  const projForm = document.getElementById("projForm");

  projForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("projName");
    const desc = document.getElementById("projDesc");
    const proj = createProj(name.value, desc.value);
    const todo = createTodo("x", "x", 12, 12);
    proj.addTodo(todo);
    console.log(proj);
    renderProject(proj);
    const nameProjs = name + "Projs";
    localStorage.setItem(name, JSON.stringify(proj));
    localStorage.setItem(nameProjs, JSON.stringify(proj.getProjs()));

    const btn2 = document.getElementById("displayTodo");
    btn2.addEventListener("click", () => {
      const newProj = createProj(
        JSON.parse(localStorage.getItem(name)).name,
        JSON.parse(localStorage.getItem(name)).desc
      );
      newProj.setProjs(JSON.parse(localStorage.getItem(nameProjs)));
      newProj.getProjs().forEach((todo) => {
        renderTodo(todo);
      });
    });
  });
});

const todoForm = document.getElementById("todoForm");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("todoName");
  const desc = document.getElementById("todoDesc");
  const dueDate = document.getElementById("dueDate");
  const prio = document.getElementById("prio");

  const todo = createTodo(name.value, desc.value, dueDate.value, prio.value);
});
