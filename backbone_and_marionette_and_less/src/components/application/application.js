import Backbone from "backbone";

const Application = Backbone.Model.extend({
  defaults() {
    return {
      name: "Application",
      title: "HELLOWEORIASDF"
    };
  }
});

export default Application;
