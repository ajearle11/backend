const Pokemon = require("../models/Pokemon.js");

async function index(req, res) {
  try {
    const pokemon = await Pokemon.showAll();
    res.send(pokemon);
  } catch (err) {
    res.status(500).send({ error: "Server error" });
  }
}

module.exports = { index };
