const express = require("express");
const router = express.Router();
const pokemon = require("../controllers/pokemon.js");

router.get("/", pokemon.index);

router.get("/:id", pokemon.show);

router.post("/", pokemon.create);

router.patch("/:id", pokemon.update);

router.delete("/:id", pokemon.destroy);

module.exports = router;
