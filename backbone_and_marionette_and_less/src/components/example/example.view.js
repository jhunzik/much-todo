import Marionette from "backbone.marionette";
import template from "./example.hbs";

export default Marionette.LayoutView.extend({
  template,
  events: {
    click: "handleClick"
  },
  handleClick() {
    this.model.set("clicked", true);
  },
  serializeData() {
    const toJSON = this.model.toJSON();
    return {
      derivedTitle: toJSON.title.toLowerCase()
    };
  }
});
