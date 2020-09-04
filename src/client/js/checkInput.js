function checkInput(x, y, z) {
  let a = x;
  let d = y;
  let loc = z.toLowerCase();
  const hint = document.getElementById("hintContainer");
  const loading = document.getElementById("loading");

  if (a.length == 0 || d.length == 0 || loc.length == 0) {
    hint.classList.remove("d-none");
    throw "Please fill out arrival, departure and location fields";
  } else {
    loading.classList.remove("d-none");
    hint.classList.add("d-none");
    localStorage.clear();
    localStorage.setItem("arrive", a);
    localStorage.setItem("depart", d);
    localStorage.setItem("location", loc);
    return console.log("Good to go!");
  }
}

export { checkInput };
