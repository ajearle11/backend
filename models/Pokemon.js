const db = require("../database/db.js");

class Pokemon {
  constructor(pokemon) {
    this.text = pokemon.name;
    this.author = pokemon.number;
  }

  static async showAll() {
    const data = await db.query("SELECT * FROM pokemon");
    return data.map((p) => new Pokemon(p));
  }
}

module.exports = Pokemon;
