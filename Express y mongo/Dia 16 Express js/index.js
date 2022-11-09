const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// ELEMENTOS PARA CONECTAR CON MONGODB
// SIEMPRE IGUALES. 

const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

// CONEXIÓN CON MONGODB

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    if (err != null) {
        console.log(err);
        console.log("No se ha podido conectar con MongoDB");
    } else {
        app.locals.db = client.db("CienciaFiccion");
        console.log("MongoDB conectado correctamente")
    }
});

// AQUÍ LAS RUTAS

app.post('/planetas', function(req, res) {

    let nuevo = {
        nombre: req.body.nombre,
        lore: req.body.lore,
        sistema: req.body.sistema,
        vida: req.body.vida,
        img: req.body.img
    }

    app.locals.db
    .collection('Planetas')
    .insertOne(
        nuevo,
        function (err, respuesta){
        if (err != null){
            console.log(err);
        } else {
            console.log("añadido correctamente", respuesta);
        }}
    )
});

app.listen(process.env.PORT || 3000);