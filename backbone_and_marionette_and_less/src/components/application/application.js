import Backbone from "backbone";

const getFilterFromHash = () => {
  return location.hash.lastIndexOf("/") !== -1
    ? location.hash.substring(location.hash.lastIndexOf("/") + 1)
    : "all";
};

const getExistingData = () => {
  let data = localStorage.getItem("todos");
  if (data !== null) {
    return JSON.parse(data);
  } else {
    return {
      todos: [],
      filter: getFilterFromHash()
  }
};

const saveTodos = (application) => {
  const data = JSON.stringify(application.toJSON())
  localStorage.setItem(
    "todos",
    data
  );
};

const todos = previousData.todos;
let filter = getFilterFromHash();

const Application = Backbone.Model.extend({
  defaults() {
    return {
      ...getExistingData(),
      filter: getFilterFromHash()
    };
  },
  addTodo(todoData) {
    const newTodos = this.get('todos').concat([todoData])
    this.set('todos', newTodos)
  },
  save() {
    saveTodos(this);
  }
});

export default Application;
