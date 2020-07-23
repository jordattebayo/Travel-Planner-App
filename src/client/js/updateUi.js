function updateUi() {
  //Grab HTML Elements to be updated
  const picContainer = document.getElementById("pic");
  const arriveContainer = document.getElementById("arrival");
  const departContainer = document.getElementById("departing");
  const durationContainer = document.getElementById("duration");
  const daysUntilContainer = document.getElementById("daysUntil");
  const locationContainer = document.getElementById("location");
  const longContainer = document.getElementById("long");
  const latContainer = document.getElementById("lat");
  const weatherContainer = document.getElementById("weather");
  const notesContainer = document.getElementById("notes");
  const resultsContainer = document.getElementById("results");
  const tripLine = document.getElementById("tripLine");
  const loading = document.getElementById("loading");

  //convert dates
  const aDate = new Date(localStorage.getItem("arrive"));
  const dDate = new Date(localStorage.getItem("depart"));

  //Assign localStorage data to Elements
  picContainer.src = localStorage.getItem("picture");
  arriveContainer.innerHTML = aDate;
  departContainer.innerHTML = dDate;
  durationContainer.innerHTML = " " + localStorage.getItem("duration") + " ";
  daysUntilContainer.innerHTML = " " + localStorage.getItem("daysUntil") + " ";
  locationContainer.innerHTML = " " + localStorage.getItem("location") + " ";
  longContainer.innerHTML = " " + localStorage.getItem("long") + " ";
  latContainer.innerHTML = " " + localStorage.getItem("lat") + " ";
  weatherContainer.innerHTML = " " + localStorage.getItem("temp") + " ";
  notesContainer.innerHTML = " " + localStorage.getItem("notes") + " ";

  //Show results container and hide tripLine
  resultsContainer.classList.remove("hide");
  loading.classList.add("hide");
  tripLine.classList.add("hide");
}

export { updateUi };
