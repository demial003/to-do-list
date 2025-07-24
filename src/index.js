import createTodo from "./modules/todo.js";
import createProj from "./modules/project.js";
import { renderHome, newProjBtn } from "./modules/home.js";
import renderTodoForm from "./modules/todoForm.js";
import renderProjForm from "./modules/projectForm.js";
import renderProject from "./modules/renderProject.js";
import renderTodo from "./modules/renderTodo.js";

renderHome();
newProjBtn();

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
      renderTodo(proj);
      const btn2 = document.querySelector(".displayTodo");
      btn2.disabled = true;
    });
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.classList.contains("displayTodo")) {
    const pName = btn.parentNode.id;
    const proj = callProj(pName);

    renderTodo(proj);

    btn.disabled = true;
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.classList.contains("hideTodo")) {
    const btn2 = document.querySelector(".displayTodo");
    btn2.disabled = false;
    const pName = btn.parentNode.id;
    const todos = document.querySelectorAll("." + pName + "todo");
    todos.forEach((todo) => {
      todo.remove();
    });
  }
});

const callProj = (name) => {
  console.log(name);
  const nameProjs = name + "Projs";
  const newProj = createProj(
    JSON.parse(localStorage.getItem(name)).name,
    JSON.parse(localStorage.getItem(name)).desc
  );

  const projList = JSON.parse(localStorage.getItem(nameProjs));
  projList.forEach((todo) => {
    const temp = createTodo(todo.name, todo.desc, todo.dueDate, todo.prio);
    newProj.addTodo(temp);
  });

  return newProj;
};

const storeProj = (proj) => {
  localStorage.setItem(proj.name, JSON.stringify(proj));
  localStorage.setItem(proj.name + "Projs", JSON.stringify(proj.getProjs()));
};

document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.classList.contains("deleteProj")) {
    const pName = btn.parentNode.id;
    localStorage.removeItem(pName);
    localStorage.removeItem(pName + "Projs");
    btn.parentNode.remove();
  }
});

document.addEventListener("click", (e) => {
  const btn = e.target;
  if (btn.classList.contains("completeTodo")) {
    if (btn.parentNode.id === "active") {
      btn.parentNode.id = "completed";
    } else {
      btn.parentNode.id = "active";
    }
  }
});
