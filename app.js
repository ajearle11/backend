import express from "express";
const app = express();
import cors from "cors";
import logger from "morgan"
import {pokemon} from "./routers/pokemon"

app.use(logger('dev'))
app.use(cors());
app.use(express.json());

app.use("/pokemon", pokemon)

app.use("/", (req, res) => {
    res.send("Yo")
});

export { app };
