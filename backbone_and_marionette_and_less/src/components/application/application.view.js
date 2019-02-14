import Marionette from "backbone.marionette";
import template from "./application.hbs";
import ApplicationModel from "./application";
import ExampleView from "../example/example.view";

const model = new ApplicationModel();

export default Marionette.LayoutView.extend({
  template,
  regions: {
    example: "> div > .example"
  },
  model,
  initialize() {
    this.listenTo(this.model, "change:clicked", this.handleClicked);
  },
  handleClicked() {
    alert("hey ");
  },
  onBeforeShow() {
    this.example.show(
      new ExampleView({
        model: this.model,
        otherThing: "hey there friend"
      })
    );
  }
});
