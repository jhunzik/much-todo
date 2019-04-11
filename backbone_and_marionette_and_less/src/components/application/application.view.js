import Marionette from "backbone.marionette";
import template from "./application.hbs";
import ApplicationModel from "./application";
import StatusView from "../status/status.view";
import ControlsView from "../controls/controls.view";
import editingView from "../editing/editing.view";
import creationView from "../creation/creation.view";

const model = new ApplicationModel();

export default Marionette.LayoutView.extend({
  tagName: "todo-application",
  template,
  model,
  regions: {
    status: "> .status",
    controls: "> .controls",
    editing: "> .editing",
    creation: "> .creation"
  },
  onBeforeShow() {
    this.status.show(new StatusView({}));
    this.controls.show(new ControlsView({}));
    this.editing.show(new editingView({}));
    this.creation.show(new creationView({}));
  }
});
