import "../styles/styles.css";

const renderProject = (proj) => {
  const container = document.getElementById("container");
  const name = proj.name;
  const desc = proj.desc;

  const project = document.createElement("div");
  project.className = "project";
  container.appendChild(project);

  const nameDiv = document.createElement("div");
  nameDiv.className = "projectText";
  nameDiv.textContent = name;

  const descDiv = document.createElement("div");
  descDiv.className = "projectText";
  descDiv.textContent = desc;

  const btn = document.createElement("button");
  btn.id = "displayTodo";
  btn.textContent = "show todos";

  project.appendChild(nameDiv);
  project.appendChild(descDiv);
  project.appendChild(btn);
};

export default renderProject;
