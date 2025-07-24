import "../styles/styles.css";

const render = (proj) => {
  proj.getProjs().forEach((todo) => {
    const container = document.getElementById("container");
    const name = todo.name;
    const desc = todo.desc;
    const dueDate = todo.dueDate;
    const prio = todo.prio;

    const todoDiv = document.createElement("div");
    todoDiv.className = proj.name + "todo";
    todoDiv.classList.add("todo");
    todoDiv.id = "active";
    container.appendChild(todoDiv);

    const todoNameDiv = document.createElement("div");
    todoNameDiv.className = "todoText1";
    todoNameDiv.textContent = name;

    const todoDescDiv = document.createElement("div");
    todoDescDiv.className = "todoText2";
    todoDescDiv.textContent = desc;

    const dueDateDiv = document.createElement("div");
    dueDateDiv.className = "todoText3";
    dueDateDiv.textContent = dueDate;

    const prioDiv = document.createElement("div");
    prioDiv.className = "todoText4";
    prioDiv.textContent = prio;

    const btn = document.createElement("button");
    btn.className = "completeTodo";
    btn.textContent = "complete todo";

    todoDiv.appendChild(todoNameDiv);
    todoDiv.appendChild(todoDescDiv);
    todoDiv.appendChild(dueDateDiv);
    todoDiv.appendChild(prioDiv);
    todoDiv.appendChild(btn);
  });
};

export default render;
