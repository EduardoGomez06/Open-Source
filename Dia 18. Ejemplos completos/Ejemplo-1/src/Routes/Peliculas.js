const express = require('express');
const router = express.Router();
const {ListaPeliculas, CrearPelicula, Eliminar, Encontrar, Editar, Lucas, Precuelas, Secuelas, Original} = require ('../controllers/Controller.Peliculas')


//Todas las peliculas
router.get('/', ListaPeliculas);

//Crear
router.post('/', CrearPelicula);


//Editar
    //Utilizamos get+post porque los formularios y links solo funcionan con esos metodos

    router.get('/Editar/:id', Encontrar);

    router.post('/Editar/:id', Editar);


//Eliminar

router.get('/Eliminar/:id', Eliminar)


//Busquedas especificas
router.get('/Lucas', Lucas);

router.get('/Original', Original);

router.get('/Precuelas', Precuelas);

router.get('/Secuelas', Secuelas);


module.exports = router