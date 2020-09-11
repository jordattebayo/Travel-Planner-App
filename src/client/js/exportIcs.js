//I really owe https://codepen.io/vlemoine/pen/MLwygX?editors=0010 for this function

function exportIcs(e) {
  e.preventDefault();
  console.log("Export ICS called");
  let icsFile = null;

  //Fetch data from local storage
  const arr = localStorage.getItem("arrive");
  const depar = localStorage.getItem("depart");
  const picSource = localStorage.getItem("pictureSource");
  const dur = localStorage.getItem("duration");
  const durNights = localStorage.getItem("durationNights");
  const days = localStorage.getItem("daysUntil");
  const loc = localStorage.getItem("location");
  const lon = localStorage.getItem("long");
  const lat = localStorage.getItem("lat");
  const w = localStorage.getItem("temp");
  const opt = JSON.parse(localStorage.getItem("options"));
  const n = opt.notes;
  const air1 = opt.airline1;
  const air2 = opt.airline2;

  let eventDate = {
    start: arr,
    end: depar,
  };

  let summary = `Going to ${loc}!`;

  let description = `More specifically to long: ${lon}/ lat: ${lat} | 
                    Expect the weather to be around ${w} degrees | 
                    Gone for ${dur} day(s) and ${durNights} night(s). 
                    You made this event ${days} before you left. | 
                    Here's an impressive photo of the destination - ${picSource} |`;

  if (n || air1 || air2) {
    if (n) {
      description.concat(" ", n);
    }
    if (air1) {
      let airline1info = `| ${air1} ${opt.flightNum1} ${opt.fDepart1} ${opt.fArrive1} ${opt.airportA1} ${opt.airportB1}`;
      description.concat(" ", airline1info);
    }
    if (air2) {
      let airline2info = `| ${air2} ${opt.flightNum2} ${opt.fDepart2} ${opt.fArrive2} ${opt.airportA2} ${opt.airportB2}`;
      description.concat(" ", airline2info);
    }
  }

  let link = document.getElementById("downloadLink");
  link.href = makeIcsFile(eventDate, summary, description);
  link.setAttribute("download", "mytrip.ics");
  link.classList.remove("d-none");

  function convertDate(date) {
    var event = new Date(date).toISOString();
    event = event.split("T")[0];
    event = event.split("-");
    event = event.join("");
    return event;
  }

  function makeIcsFile(d, s, de) {
    const eventInfo =
      "BEGIN:VCALENDAR\n" +
      "CALSCALE:GREGORIAN\n" +
      "METHOD:PUBLISH\n" +
      "PRODID:-//Test Cal//EN\n" +
      "VERSION:2.0\n" +
      "BEGIN:VEVENT\n" +
      "UID:test-1\n" +
      "DTSTART;VALUE=DATE:" +
      convertDate(d.start) +
      "\n" +
      "DTEND;VALUE=DATE:" +
      convertDate(d.end) +
      "\n" +
      "SUMMARY:" +
      s +
      "\n" +
      "DESCRIPTION:" +
      de +
      "\n" +
      "END:VEVENT\n" +
      "END:VCALENDAR";

    let data = new File([eventInfo], { type: "text" });

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (icsFile !== null) {
      window.URL.revokeObjectURL(icsFile);
    }

    icsFile = window.URL.createObjectURL(data);

    return icsFile;
  }
}

export { exportIcs };
