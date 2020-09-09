function tripDate(x, y) {
  const oneDay = 1000 * 60 * 60 * 24;
  let now = new Date().getTime();
  let arrive = Date.parse(x);
  let depart = Date.parse(y);
  let diff = depart - arrive;
  let days = diff / oneDay;
  let nights;
  let tripCountDown = Math.floor((arrive - now) / oneDay);

  localStorage.setItem("duration", days);
  localStorage.setItem(
    "durationNights",
    days >= 0 ? (nights = 1) : (nights = days - 1)
  );
  localStorage.setItem("daysUntil", tripCountDown);
  return tripCountDown;
}

export { tripDate };
