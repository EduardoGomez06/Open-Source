const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PeliculasSchema = new Schema({
    Título: String,
    Director: String,
    Año_estreno: Number,
    Presupuesto: String,
    Cronología: String,
    Grupo: String
});


let Pelicula = mongoose.model('Pelicula', PeliculasSchema, 'Peliculas');
module.exports = Pelicula