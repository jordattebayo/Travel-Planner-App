import { updateUi } from "./updateUi";

function undo(event) {
  event.preventDefault();

  Client.updateUi();
}

export { undo };
