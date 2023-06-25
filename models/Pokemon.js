const db = require("../database/db.js");

class Pokemon {
  constructor(pokemon) {
    this.name = pokemon.name;
    this.number = pokemon.number;
  }

  static async showAll() {
    try {
      const data = await db.query("SELECT * FROM pokemon;");
      const pokesToSend = data.rows.map((p) => new Pokemon(p));
      return pokesToSend;
    } catch (error) {
      console.log(`Error ${error}`);
      throw new Error("Failed to fetch pokemon");
    }
  }

  static async showPoke(id) {
    try {
      const data = await db.query("SELECT * FROM pokemon WHERE number = $1", [
        id,
      ]);
      const pokesToSend = new Pokemon(data.rows[0]);
      return pokesToSend;
    } catch (error) {
      console.log(`Error ${error}`);
      throw new Error("Failed to fetch pokemon");
    }
  }

  static async createPoke(userData) {
    try {
      const data = await db.query(
        "INSERT INTO pokemon(name, number) VALUES($1, $2)",
        [userData.name, userData.number]
      );

      return new Pokemon(data);
    } catch (error) {
      console.log(`Error ${error}`);
      throw new Error("Failed to fetch pokemon");
    }
  }

  async updatePoke(body) {
    try {
      const update = body;
      const { name = this.name } = body;
      const data = await db.query(
        "UPDATE pokemon SET name = $1 WHERE number = $2",
        [name, this.number]
      );
      return new Pokemon(data);
    } catch (error) {
      console.log(`Error ${error}`);
      throw new Error("Failed to fetch pokemon");
    }
  }

  async destroyPoke(body) {
    try {
      const data = await db.query("DELETE FROM pokemon WHERE number = $1", [
        this.number,
      ]);
      return "successfully deleted";
    } catch (error) {
      console.log(`Error ${error}`);
      throw new Error("Failed to fetch pokemon");
    }
  }
}

module.exports = Pokemon;
