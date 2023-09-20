const express = require("express");
const cors = require("cors");
if (process.env.NODE_ENV != "PRODUCTION") {
  require("dotenv").config();
}

const app = express();

var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
  res.json({ message: "Server is up and running" });
});

app.get("/api", (req, res) => {
  res.json({ message: "hehe" });
});

console.log(process.env.PORT);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
