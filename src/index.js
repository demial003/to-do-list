import createTodo from "./modules/todo.js";
import createProj from "./modules/project.js";
import { renderHome, newProjBtn } from "./modules/home.js";

renderHome();
newProjBtn();

const btn = document.getElementById("newProj");

btn.addEventListener("click", () => {
  let testProj = createProj("testing", "test project");

  for (let i = 0; i < 5; i++) {
    let temp = createTodo("todo " + i, "testing", i, i + 1);
    testProj.addTodo(temp);
  }

  console.log(testProj.getProjs());
});
