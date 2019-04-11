import Backbone from "backbone";

const Todo = Backbone.Model.extend({
  defaults() {
    return {
      id: Math.random(),
      text: "",
      completed: false
    };
  }
});

export default Todo;
