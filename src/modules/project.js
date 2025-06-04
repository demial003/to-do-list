const createProj = (name, desc) => {
  let projs = [];

  const getProjs = () => {
    return projs;
  };

  const setProjs = (arr) => {
    projs = arr;
  };

  const getTodo = (name) => {
    for (let i = 0; i < projs.length; i++) {
      if (projs[i].name == name) {
        return projs[i];
      }
    }
    console.log("Item does not exist");
    return;
  };

  const addTodo = (todo) => {
    projs.push(todo);
  };

  const removeTodo = (name) => {
    for (let i = 0; i < projs.length; i++) {
      if (projs[i].name == name) {
        projs.splice(proj[i], 1);
      }
    }
    console.log("Item does not exist");
    return;
  };

  return {
    name,
    desc,
    getProjs,
    setProjs,
    getTodo,
    addTodo,
    removeTodo,
  };
};

export default createProj;
