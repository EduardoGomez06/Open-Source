const path = require('path');

// Schema Mongoose & db Name

const personajes = require('../routes/models/peliculas');
const peliculas = require('../routes/models/peliculas');

let db = "Star_Wars";

// RUTAS Enseñar toda la coleccón
const getAll = (path.join(__dirname, "../views/pages/getAll"));
const getAll2 = (path.join(__dirname, "../views/pages/getAll2"));

// RUTA Añdari
const add = (path.join(__dirname, "../views/pages/add"));
const add2 = (path.join(__dirname, "../views/pages/add2"));

// Ruta Editar
const OnePeli = (path.join(__dirname, "../views/pages/OnePeli"));
const OnePersonajes = (path.join(__dirname, "../views/pages/OnePersonajes"));

// Mostar todas la colección Peliculas
const MostrarPelis = async (req, res) => {
  try {
    let arrayPeliculasDB = await peliculas.find();
    res.render(getAll, {
      arrayPeliculas: arrayPeliculasDB,
    });
  } catch (error) {
    console.log(error);
  }
};

// Mostrar todas los Personajes
const MostraPersonajes = async (req, res) => {
  try {
    let arrayPersonajesDB = await personajes.find();
    res.render(getAll2, {
      arrayPersonajes: arrayPersonajesDB,
    });
  } catch (error) {
    console.log(error);
  }
};

// Ejercicio 1
const Ejercicio1 = async (req, res) => {
  try {
    let arrayPersonajesDB = await personajes.find({ especie: "Humano" });
    res.render(getAll2, {
      arrayPersonajes: arrayPersonajesDB,
    });
  } catch (error) {
    console.log(error);
  }
};

//  Ejercicio 2.
const Ejercicio2 = async (req, res) => {
  try {
    const arrayPersonajesDB = await personajes.find({ afiliacion: /Sith/ });
    res.render(getAll2, {
      arrayPersonajes: arrayPersonajesDB,
    });
  } catch (error) {
    console.log(error);
  }
};

//  Ejercicio 3.
const Ejercicio3 = async (req, res) => {
  try {
    const arrayPersonajesDB = await personajes.find({
      planeta_natal: "Tatooine",
    });
    res.render(getAll2, {
      arrayPersonajes: arrayPersonajesDB,
    });
  } catch (error) {
    console.log(error);
  }
};

// Ejercicio 4
const Ejercicio4 = async (req, res) => {
  try {
    const arrayPeliculasDB = await peliculas.find({ Director: "George Lucas" });
    res.render(getAll, {
      arrayPeliculas: arrayPeliculasDB,
    });
  } catch (error) {
    console.log(error);
  }
};

const AñadirPelicula = async (req, res) => {
  const body = req.body;
  res.redirect("/API/getAll");
  try {
    await peliculas.create(body);
  } catch (error) {
    console.log("error", error);
  }
};

const AñadirPersonaje = async (req, res) => {
  const body = req.body;
  res.redirect("/API/getAll2");
  try {
    await personajes.create(body);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = Ejercicio1, Ejercicio2, Ejercicio3, Ejercicio4, MostrarPelis; MostraPersonajes, AñadirPelicula, AñadirPersonaje;
