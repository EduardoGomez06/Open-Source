const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personajesSchema = new Schema({
  nombre: String,
  especie: String,
  afiliacion: String,
  planeta_natal: String,
  nacimiento: String,
});

// Crear el modelo
const personajes = mongoose.model("personajes", personajesSchema);

module.exports = personajes;
