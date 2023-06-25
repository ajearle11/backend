const Pokemon = require("../models/Pokemon.js");

const index = async (req, res) => {
  try {
    const pokemon = await Pokemon.showAll();

    res.send(pokemon);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server error" });
  }
};

const show = async (req, res) => {
  const id = req.params.id;
  try {
    const pokemon = await Pokemon.showPoke(id);

    res.send(pokemon);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server error" });
  }
};

const create = async (req, res) => {
  const userInput = req.body;
  try {
    await Pokemon.createPoke(userInput);
    res.send(`successfully created ${userInput.name}`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server error" });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const userInput = req.body;
  try {
    const pokemonToUpdate = await Pokemon.showPoke(id);
    await pokemonToUpdate.updatePoke(userInput);
    res.send(`successfully updated ${userInput.name}`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "Server error" });
  }
};

module.exports = { index, show, create, update };
