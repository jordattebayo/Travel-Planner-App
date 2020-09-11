function getOptions() {
  const optObj = {};

  optObj.notes = document.getElementById("inputNotes").value;

  optObj.airline1 = document.getElementById("airline1").value;
  optObj.flightNum1 = document.getElementById("flightNumber1").value;
  optObj.fDepart1 = document.getElementById("flightDepart1").value;
  optObj.fArrive1 = document.getElementById("flightArrive1").value;
  optObj.airportA1 = document.getElementById("airportA1").value;
  optObj.airportB1 = document.getElementById("airportB1").value;

  optObj.airline2 = document.getElementById("airline2").value;
  optObj.flightNum2 = document.getElementById("flightNumber2").value;
  optObj.fDepart2 = document.getElementById("flightDepart2").value;
  optObj.fArrive2 = document.getElementById("flightArrive2").value;
  optObj.airportA2 = document.getElementById("airportA2").value;
  optObj.airportB2 = document.getElementById("airportB2").value;

  localStorage.setItem("options", JSON.stringify(optObj));
}

export { getOptions };
