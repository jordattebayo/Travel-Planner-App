function addField(e) {
  e.preventDefault();

  const addFlight = document.getElementById("addFlight");
  const addNotes = document.getElementById("addNotes");

  if (e.target == addFlight) {
    if (localStorage.flight >= 1) {
      localStorage.flight = Number(localStorage.flight) + 1;
      const flightInfo2 = document.getElementById("flightInfo2");
      flightInfo2.classList.remove("d-none");
      addFlight.classList.add("disabledBtn");
    } else {
      const flightInfo1 = document.getElementById("flightInfo1");
      flightInfo1.classList.remove("d-none");
      localStorage.setItem("flight", 1);
    }
  }

  if (e.target == addNotes) {
    const notes = document.getElementById("notesField");
    notes.classList.remove("d-none");
    addNotes.classList.add("disabledBtn");
  }
}

export { addField };
