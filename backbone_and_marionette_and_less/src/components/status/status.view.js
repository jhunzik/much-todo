import Marionette from "backbone.marionette";
import template from "./status.hbs";

export default Marionette.ItemView.extend({
  template,
  tagName: "todo-status"
});
