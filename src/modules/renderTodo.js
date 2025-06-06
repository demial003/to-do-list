import "../styles/styles.css";

const render = (todo) => {
  const container = document.getElementById("container");
  const name = todo.name;
  const desc = todo.desc;
  const dueDate = todo.dueDate;
  const prio = todo.prio;

  const todoDiv = document.createElement("div");
  todoDiv.className = "todo";
  container.appendChild(todoDiv);

  const nameDiv = document.createElement("div");
  nameDiv.className = "todoText";
  nameDiv.textContent = name;

  const descDiv = document.createElement("div");
  descDiv.className = "todoText";
  descDiv.textContent = desc;

  const dueDateDiv = document.createElement("div");
  nameDiv.className = "todoText";
  nameDiv.textContent = dueDate;

  const prioDiv = document.createElement("div");
  descDiv.className = "todoText";
  descDiv.textContent = prio;

  todoDiv.appendChild(nameDiv);
  todoDiv.appendChild(descDiv);
  todoDiv.appendChild(dueDateDiv);
  todoDiv.appendChild(prioDiv);
};

export default render;
