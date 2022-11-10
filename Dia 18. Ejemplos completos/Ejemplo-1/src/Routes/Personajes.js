const express = require('express');
const router = express.Router();
const {ListaPersonajes, CrearPersonaje, Encontrar, Editar, Borrar, Humanos, Sith, Tatooine }  = require('../Controllers/Controller.Personajes')


//Todos los personajes
router.get('/', ListaPersonajes);


//Crear
router.post('/', CrearPersonaje);



//Editar
    //Utilizamos get+post porque los formularios y links solo funcionan con esos metodos

router.get('/Editar/:id', Encontrar);

router.post('/Editar/:id', Editar);


//Borrar
router.get('/Eliminar/:id', Borrar)


//Sith
router.get('/Sith', Sith);

//Humanos
router.get('/Humanos', Humanos);

//Tatooine
router.get('/Tatooine', Tatooine);

module.exports = router