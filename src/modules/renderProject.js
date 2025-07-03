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

  project.appendChild(nameDiv);
  project.appendChild(descDiv);
  project.appendChild(btn);
  project.appendChild(btn2);
};

export default renderProject;
