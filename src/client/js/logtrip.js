function logTrip(event) {
  event.preventDefault();

  let arrival = document.getElementById("arrive").value;
  let depart = document.getElementById("depart").value;
  let location = document.getElementById("destination").value;

  Client.checkInput(arrival, depart, location);
  Client.getOptions();
  Client.tripDate(arrival, depart);
  Client.getLocation();

  setTimeout(() => {
    Client.getWeather();
    Client.getPicture();
  }, 1000);
  setTimeout(Client.updateUi, 2000);
}

export { logTrip };
