import createTodo from "./modules/todo.js";
import createProj from "./modules/project.js";
import { renderHome, newProjBtn } from "./modules/home.js";
import renderTodoForm from "./modules/todoForm.js";
import renderProjForm from "./modules/projectForm.js";
import renderProject from "./modules/renderProject.js";
import renderTodo from "./modules/renderTodo.js";

renderHome();
newProjBtn();

// const btn = document.getElementById("newProj");

document.addEventListener("click", (e) => {
  if (e.target.id === "newProj") {
    renderProjForm();
    const projForm = document.getElementById("projForm");

    projForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("projName");
      const desc = document.getElementById("projDesc");
      const proj = createProj(name.value, desc.value);
      const todo = createTodo("x", "x", 12, 12);
      proj.addTodo(todo);
      renderProject(proj);
      storeProj(proj);
      projForm.remove();
    });
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.classList.contains("createTodo")) {
    renderTodoForm();

    const todoForm = document.getElementById("todoForm");
    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("todoName");
      const desc = document.getElementById("todoDesc");
      const dueDate = document.getElementById("dueDate");
      const prio = document.getElementById("prio");
      const todo = createTodo(
        name.value,
        desc.value,
        dueDate.value,
        prio.value
      );
      const pName = btn.parentNode.id;
      const proj = callProj(pName);
      proj.addTodo(todo);
      storeProj(proj);
      todoForm.remove();
    });
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target;
  if (e.target.classList.contains("displayTodo")) {
    const pName = btn.parentNode.id;
    const proj = callProj(pName);
    proj.getProjs().forEach((todo) => {
      renderTodo(todo);
    });
  }
});

const callProj = (name) => {
  const nameProjs = name + "Projs";
  const newProj = createProj(
    JSON.parse(localStorage.getItem(name)).name,
    JSON.parse(localStorage.getItem(name)).desc
  );
  newProj.setProjs(JSON.parse(localStorage.getItem(nameProjs)));
  return newProj;
};

const storeProj = (proj) => {
  localStorage.setItem(proj.name, JSON.stringify(proj));
  localStorage.setItem(proj.name + "Projs", JSON.stringify(proj.getProjs()));
};
