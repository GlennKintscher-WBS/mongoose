const pokedex = require("./pokedex.json");

const bulbasaur = pokedex.find((pokemon) => pokemon.name.english === "Bulbasaur");
console.log(bulbasaur);