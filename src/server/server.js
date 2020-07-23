const express = require("express");
const app = express();
const path = require("path");

// Bring in middleware
const cors = require("cors");
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

// Cors for cross origin allowance

app.use(cors());

// Setup Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}!`));

//Get Routes

app.get("/test", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

//Export app to be used by Jest
module.exports = app;
