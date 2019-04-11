import Marionette from "backbone.marionette";
import template from "./creation.hbs";

export default Marionette.ItemView.extend({
  template,
  tagName: "todo-creation"
});
