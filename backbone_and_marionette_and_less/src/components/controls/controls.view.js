import Marionette from "backbone.marionette";
import template from "./controls.hbs";

export default Marionette.ItemView.extend({
  template,
  tagName: "todo-controls"
});
