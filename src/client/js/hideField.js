function hideField(e) {
  e.preventDefault();

  const addFlight1 = document.getElementById("flight1Btn");
  const addFlight2 = document.getElementById("flight2Btn");
  const addNotes = document.getElementById("notesBtn");

  if (e.target == addFlight1) {
    const flightInfo1 = document.getElementById("flightInfo1");
    flightInfo1.classList.add("d-none");
    localStorage.removeItem("flight");
  }

  if (e.target == addFlight2) {
    const flightInfo2 = document.getElementById("flightInfo2");
    flightInfo2.classList.add("d-none");
    addFlight.classList.remove("disabledBtn");
  }

  if (e.target == addNotes) {
    console.log("notes close called");
    const notes = document.getElementById("notesField");
    notes.classList.add("d-none");
    document.getElementById("addNotes").classList.remove("disabledBtn");
  }
}

export { hideField };
