const Pokemon = require("../models/Pokemon");

async function index (req, res) {
    try {
        const quotes = await Pokemon.showAll();
        res.send(quotes);
    } catch (err) {
        res.status(500).send({ error: "Server error" });
    }
};

export {index}