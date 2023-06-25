const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const pokemon = require("./routers/pokemon.js");

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/pokemon", pokemon);

app.use("/", (req, res) => {
  res.send("Yo");
});

module.exports = app;
