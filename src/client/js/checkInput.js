function checkInput(x, y, z, n) {
  let a = x;
  let d = y;
  let loc = z.toLowerCase();
  let inputNotes = n;
  const hint = document.getElementById("hintContainer");
  const loading = document.getElementById("loading");
  const t = document.getElementById("tripLine");

  if (a.length == 0 || d.length == 0 || loc.length == 0) {
    hint.classList.remove("hide");
    throw "Please fill out arrival, departure and location fields";
  } else {
    loading.classList.remove("hide");
    hint.classList.add("hide");
    t.classList.add("hide");
    localStorage.clear();
    localStorage.setItem("arrive", a);
    localStorage.setItem("depart", d);
    localStorage.setItem("location", loc);
    localStorage.setItem("notes", inputNotes);
    return console.log("items set!");
  }
}

export { checkInput };
