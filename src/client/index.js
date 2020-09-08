import "./styles/styles.scss";
import { addField } from "./js/addField";
import { hideField } from "./js/hideField";
import { darkMode } from "./js/darkMode";
import { logTrip } from "./js/logtrip";
import { getOptions } from "./js/getOptions";
import { checkInput } from "./js/checkInput";
import { getLocation } from "./js/getLongLat";
import { getWeather } from "./js/getWeather";
import { tripDate } from "./js/tripDate";
import { getPicture } from "./js/getPicture";
import { updateUi } from "./js/updateUi";
import { reset } from "./js/reset";
import { undo } from "./js/undo";

export {
  addField,
  hideField,
  logTrip,
  checkInput,
  getOptions,
  getLocation,
  tripDate,
  getWeather,
  getPicture,
  updateUi,
  reset,
  undo,
};

//Clear out flight from local storage for returning users
Object.entries(localStorage).forEach(([key, val]) => {
  if (!val.includes("flight")) delete localStorage[key];
});

//Dark mode toggle
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

toggleSwitch.addEventListener("change", darkMode, true);
