import "../styles/styles.css";

const renderHome = () => {
  const container = document.createElement("div");
  container.id = "container";
};

const newProjBtn = () => {
  const container = document.getElementById("container");
  const newProject = document.createElement("button");
  newProject.id = "newProj";
  newProject.textContent = "Create Project";
  container.appendChild(newProject);
};

export { renderHome, newProjBtn };
