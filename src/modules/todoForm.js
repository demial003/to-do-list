import "../styles/styles.css";

const render = () => {
  const container = document.getElementById("container");
  const form = document.createElement("form");
  form.id = "todoForm";
  container.appendChild(form);

  const name = document.createElement("input");
  name.type = "text";
  name.id = "name";
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  nameLabel.textContent = "name";
  form.appendChild(nameLabel);
  form.appendChild(name);

  const desc = document.createElement("input");
  desc.type = "text";
  desc.id = "desc";
  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "desc");
  descLabel.textContent = "description";
  form.appendChild(descLabel);
  form.appendChild(desc);

  const dueDate = document.createElement("input");
  dueDate.type = "date";
  dueDate.id = "dueDate";
  const dueLabel = document.createElement("label");
  dueLabel.setAttribute("for", "dueDate");
  dueLabel.textContent = "due date";
  form.appendChild(dueLabel);
  form.appendChild(dueDate);

  const priority = document.createElement("input");
  priority.type = "number";
  priority.id = "prio";
  const prioLabel = document.createElement("label");
  prioLabel.setAttribute("for", "prio");
  prioLabel.textContent = "priority";
  form.appendChild(prioLabel);
  form.appendChild(priority);

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "submit";
  form.appendChild(submit);
};

const createTodoItem = () => {
  const form = document.getElementById("todoForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name");
    const desc = document.getElementById("desc");
    const dueDate = document.getElementById("dueDate");
    const prio = document.getElementById("prio");

    const todo = createTodo(name.value, desc.value, dueDate.value, prio.value);
  });
};

export default render;
