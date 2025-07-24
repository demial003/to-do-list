import "../styles/styles.css";

const renderProject = (proj) => {
  const container = document.getElementById("container");
  const name = proj.name;
  const desc = proj.desc;

  const project = document.createElement("div");
  project.className = "project";
  project.id = name;
  container.appendChild(project);

  const nameDiv = document.createElement("div");
  nameDiv.className = "projectText";
  nameDiv.textContent = name;

  const descDiv = document.createElement("div");
  descDiv.className = "projectText";
  descDiv.textContent = desc;

  const btn = document.createElement("button");
  btn.className = "createTodo";
  btn.textContent = "create todo";

  const btn2 = document.createElement("button");
  btn2.className = "displayTodo";
  btn2.textContent = "show todos";

  const btn3 = document.createElement("button");
  btn3.className = "hideTodo";
  btn3.textContent = "hide todos";

  const btn4 = document.createElement("button");
  btn4.className = "deleteProj";
  btn4.textContent = "delete proj";

  project.appendChild(nameDiv);
  project.appendChild(descDiv);
  project.appendChild(btn);
  project.appendChild(btn2);
  project.appendChild(btn3);
  project.appendChild(btn4);
};

export default renderProject;
