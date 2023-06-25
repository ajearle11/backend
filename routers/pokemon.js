const express = require("express");
const router = express.Router();
const pokemon = require("../controllers/pokemon.js");

router.get("/", pokemon.index);

module.exports = router;
