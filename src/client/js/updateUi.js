import { logTrip } from "./logtrip";

function updateUi() {
  //Grab HTML Elements to be updated
  const picContainer = document.getElementById("backgroundImg");
  const departContainer = document.getElementById("departing");
  const durationContainer = document.getElementById("duration");
  const durationNightsContainer = document.getElementById("durationNights");
  const daysUntilContainer = document.getElementById("daysUntil");
  const locationContainer = document.getElementById("location");
  const longContainer = document.getElementById("long");
  const latContainer = document.getElementById("lat");
  const weatherContainer = document.getElementById("weather");
  const notesContainer = document.getElementById("notes");
  const airline1Container = document.getElementById("airline1");
  const airline2Container = document.getElementById("airline2");
  const resultsContainer = document.getElementById("results");
  const loading = document.getElementById("loading");
  const inputContainer = document.getElementById("inputContainer");
  const logButton = document.getElementById("logtrip");
  const exportButton = document.getElementById("exportBtn");
  const resetButton = document.getElementById("resetBtn");
  const optionNotes = document.getElementById("optionalNotes");

  //convert dates
  const dDate = new Date(localStorage.getItem("depart"));

  //Assign localStorage data to Variables
  const pic = localStorage.getItem("picture");
  const depart = dDate.toDateString();
  const dur = localStorage.getItem("duration");
  const durNights = localStorage.getItem("durationNights");
  const days = localStorage.getItem("daysUntil");
  const loc = localStorage.getItem("location");
  const lon = localStorage.getItem("long");
  const lat = localStorage.getItem("lat");
  const w = localStorage.getItem("temp");
  const n = JSON.parse(localStorage.getItem("options")).notes;
  const air1 = JSON.parse(localStorage.getItem("options")).airline1;
  const air2 = JSON.parse(localStorage.getItem("options")).airline2;

  //Set variables to containers

  departContainer.innerHTML = ` ${depart}`;
  durationContainer.innerHTML = ` ${dur} `;
  durationNightsContainer.innerHTML = ` ${durNights} `;
  daysUntilContainer.innerHTML = ` ${days} `;
  locationContainer.innerHTML = ` ${loc} `;

  pic.length > 0
    ? (picContainer.style.backgroundImage = `url(${pic})`)
    : (picContainer.style.backgroundImage = `url(
        "http://place-puppy.com/800x800"
      )`);

  if (lon >= 0) {
    longContainer.innerHTML = ` ${lon} `;
  }
  if (lat >= 0) {
    latContainer.innerHTML = ` ${lat} `;
  }
  if (w.length > 0) {
    weatherContainer.innerHTML = ` ${w} `;
  }
  if (n || air1 || air2) {
    optionNotes.classList.remove("d-none");
    notesContainer.innerHTML = ` ${n} `;

    if (air1.length > 0) {
      airline1Container.innerHTML = ` ${air1} `;
    }
    if (air2.length > 0) {
      airline2Container.innerHTML = ` ${air2} `;
    }
  }

  //Show results container and hide tripLine
  inputContainer.classList.add("d-none");
  logButton.classList.add("d-none");
  resultsContainer.classList.remove("d-none");
  exportButton.classList.remove("d-none");
  resetButton.classList.remove("d-none");
  loading.classList.add("d-none");
}

export { updateUi };
