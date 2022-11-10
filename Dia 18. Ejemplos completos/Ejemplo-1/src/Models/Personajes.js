const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PersonajesSchema = new Schema({
    Nombre: String, 
    Especie: String,
    Afiliacion: Array,
    Planeta_Natal: String,
    Nacimiento: String
});


let Personaje = mongoose.model('Personaje', PersonajesSchema, 'Personajes');
module.exports = Personaje