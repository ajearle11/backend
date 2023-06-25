require("dotenv").config();
const fs = require("fs");
const db = require("./db.js");

const sql = fs.readFileSync("database/setup.sql").toString();
db.query(sql)
  .then((data) => console.log("setup complete"))
  .catch((error) => console.log(error));
