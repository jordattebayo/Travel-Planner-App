import { undo } from "./undo";

function reset(event) {
  event.preventDefault();

  const resultsContainer = document.getElementById("results");
  const inputContainer = document.getElementById("inputContainer");
  const undoContainer = document.getElementById("undo");
  const logButton = document.getElementById("logtrip");

  resultsContainer.classList.add("d-none");
  inputContainer.classList.remove("d-none");
  logButton.classList.remove("d-none");
  undoContainer.classList.remove("d-none");
  inputContainer.reset();
}

export { reset };
