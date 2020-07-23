function tripDate(x, y) {
  const oneDay = 1000 * 60 * 60 * 24;
  let now = new Date().getTime();
  let arrive = Date.parse(x);
  let depart = Date.parse(y);
  let diff = depart - arrive;
  let days = diff / oneDay;
  let tripCountDown = Math.floor((arrive - now) / oneDay);

  //maybe add in a nights counter in the future...
  localStorage.setItem("duration", days);
  localStorage.setItem("daysUntil", tripCountDown);
  return tripCountDown;
}

export { tripDate };
