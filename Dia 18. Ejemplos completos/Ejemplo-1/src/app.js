//Servidor
const express = require('express');
const app = express();


//Modulos y Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('dotenv/config');


const cors = require('cors');
app.use(cors());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views'); 

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));


//BDD

const mongoose = require('mongoose');

(async () => {
    try {
        const db = await mongoose.connect(process.env.Conexion_DB)
        console.log('Conectado correctamente a db ' + db.connection.name);
    } catch (error) {
        console.log(error)
    }
})();



//Rutas
const Homepage = require('./Routes/Home')
app.use('/', Homepage)

const RutaPersonajes = require('./Routes/Personajes');
app.use('/Personajes', RutaPersonajes);

const RutaPeliculas = require('./Routes/Peliculas')
app.use('/Peliculas', RutaPeliculas)



//Puerto
app.listen(process.env.PORT || 8000, () => {
    console.log('\u001b[' + 32 + 'm' + `Recibiendo solicitudes en http://localhost:${process.env.PORT}` + '\u001b[0m');
});