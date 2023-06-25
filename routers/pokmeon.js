import express from "express"
const router = express.Router();
import pokemon from "../controllers/pokemon.js"

router.get("/", pokemon.index)

export {router}