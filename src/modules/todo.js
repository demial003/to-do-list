const createTodo = (name, desc, dueDate, prio) => {
  let status = "active";
  const getStatus = () => {
    return status;
  };
  const toggle = () => {
    if (status === "active") {
      status = "completed";
    } else {
      status = "active";
    }
  };
  return { name, desc, dueDate, prio, toggle, getStatus };
};

export default createTodo;
