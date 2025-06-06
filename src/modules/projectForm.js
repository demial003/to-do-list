import "../styles/styles.css";

const render = () => {
  const container = document.getElementById("container");
  const form = document.createElement("form");
  form.id = "projForm";
  container.appendChild(form);

  const name = document.createElement("input");
  name.type = "text";
  name.id = "projName";
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "projName");
  nameLabel.textContent = "name";
  form.appendChild(nameLabel);
  form.appendChild(name);

  const desc = document.createElement("input");
  desc.type = "text";
  desc.id = "projDesc";
  const descLabel = document.createElement("label");
  descLabel.setAttribute("for", "projDesc");
  descLabel.textContent = "description";
  form.appendChild(descLabel);
  form.appendChild(desc);

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.id = "submitProject";
  form.appendChild(submit);
};

export default render;
