import Marionette from "backbone.marionette";
import template from "./editing.hbs";

export default Marionette.ItemView.extend({
  template,
  tagName: "todo-editing"
});
