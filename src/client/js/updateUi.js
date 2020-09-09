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
  const resultsContainer = document.getElementById("results");
  const loading = document.getElementById("loading");
  const inputContainer = document.getElementById("inputContainer");
  const logButton = document.getElementById("logtrip");
  const exportButton = document.getElementById("exportBtn");
  const resetButton = document.getElementById("resetBtn");

  //Grab HTML Optional Elements
  const notesContainer = document.getElementById("notes");
  const airline1Container = document.getElementById("airline1B");
  const fId1 = document.getElementById("fId1");
  const fDep1 = document.getElementById("fDep1");
  const fArr1 = document.getElementById("fArr1");
  const dAir1 = document.getElementById("dAir1");
  const aAir1 = document.getElementById("aAir1");

  const airline2Container = document.getElementById("airline2B");
  const fId2 = document.getElementById("fId2");
  const fDep2 = document.getElementById("fDep2");
  const fArr2 = document.getElementById("fArr2");
  const dAir2 = document.getElementById("dAir2");
  const aAir2 = document.getElementById("aAir2");

  const arrow1Container = document.getElementById("fArrow1");
  const arrow2Container = document.getElementById("fArrow2");
  const arrow3Container = document.getElementById("fArrow3");
  const arrow4Container = document.getElementById("fArrow4");
  const breakContainer = document.getElementById("airBreak");
  const break0Container = document.getElementById("airBreak0");
  const break1Container = document.getElementById("airBreak1");
  const break2Container = document.getElementById("airBreak2");
  const break3Container = document.getElementById("airBreak3");
  const break4Container = document.getElementById("airBreak4");
  const break5Container = document.getElementById("airBreak5");
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
  const opt = JSON.parse(localStorage.getItem("options"));
  const n = opt.notes;
  const air1 = opt.airline1;
  const air2 = opt.airline2;

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
      arrow1Container.classList.remove("d-none");
      arrow2Container.classList.remove("d-none");
      breakContainer.classList.remove("d-none");
      break1Container.classList.remove("d-none");
      break2Container.classList.remove("d-none");
      break3Container.classList.remove("d-none");
      airline1Container.innerHTML = ` ${air1} `;
      fId1.innerHTML = `| ${opt.flightNum1} `;
      fDep1.innerHTML = ` ${opt.fDepart1} `;
      fArr1.innerHTML = ` ${opt.fArrive1} `;
      dAir1.innerHTML = ` ${opt.airportA1} `;
      aAir1.innerHTML = ` ${opt.airportB1} `;
    }
    if (air2.length > 0) {
      arrow3Container.classList.remove("d-none");
      arrow4Container.classList.remove("d-none");
      break0Container.classList.remove("d-none");
      break4Container.classList.remove("d-none");
      break5Container.classList.remove("d-none");
      airline2Container.innerHTML = ` ${air2} `;
      fId2.innerHTML = `| ${opt.flightNum2} `;
      fDep2.innerHTML = ` ${opt.fDepart2} `;
      fArr2.innerHTML = ` ${opt.fArrive2} `;
      dAir2.innerHTML = ` ${opt.airportA2} `;
      aAir2.innerHTML = ` ${opt.airportB2} `;
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
