function logTrip(event) {
  event.preventDefault();

  let arrival = document.getElementById("arrive").value;
  let depart = document.getElementById("depart").value;
  let location = document.getElementById("destination").value;
  let notes = document.getElementById("inputNotes").value;

  Client.checkInput(arrival, depart, location, notes);
  Client.tripDate(arrival, depart);
  Client.getLocation();

  setTimeout(() => {
    Client.getWeather();
    Client.getPicture();
  }, 2000);
  setTimeout(Client.updateUi, 3000);
}

export { logTrip };
