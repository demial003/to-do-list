import "../styles/styles.css";

const render = () => {
  const container = document.getElementById("container");
  const form = document.createElement("form");
  form.id = "todoForm";
  container.appendChild(form);

  const name = document.createElement("input");
  name.type = "text";
  name.id = "todoName";
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "todoName");
  nameLabel.textContent = "name";
  form.appendChild(nameLabel);
  form.appendChild(name);

  const desc = document.createElement("input");
  desc.type = "text";
  desc.id = "todoDesc";
  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "todoDesc");
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
  submit.id = "submitTodo";
  form.appendChild(submit);
};

export default render;
