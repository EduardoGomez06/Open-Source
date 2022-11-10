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

    let datosRecibidos = {
        nombre: req.body.nombre,
        lore: req.body.lore,
        sistema: req.body.sistema,
        vida: req.body.vida,
        img: req.body.img
    }

    app.locals.db
    .collection('Planetas')
    .insertOne(
        datosRecibidos,
        function (err, respuesta){
        if (err != null){
            console.log(err);
        } else {
            console.log("añadido correctamente", respuesta);
        }}
    )
});

app.get("/planetas", function (req, res){
    app.locals.db
    .collection('Planetas')
    .find()
    .toArray(
        function (err, datos){
            if (err != null){
                console.log(err);
            } else {
                console.log(datos);
                res.send(datos);
            }
        }
    )
}
)

app.put("/planetas", function (req, res){
    let modificacion = {
        nombre: req.body.nombre,
        lore: req.body.lore,
        sistema: req.body.sistema,
        vida: req.body.vida,
        imagen: req.body.imagen,
    }

    app.locals.db
    .collection('Planetas')
    .updateOne({  nombre: modificacion.nombre },
        {
            $set: {
               lore: modificacion.lore,
               sistema: modificacion.sistema,
               vida: modificacion.vida,
               img: modificacion.imagen, 
            },
        },
        function (err, datos) {
            if (err != null ){
                res.send(err);
            } else {
                res.send(datos);
            }
        }
    )
}
)

app.delete("/planetas", function (req, res){
    app.locals.db
    .collection("Planetas")
    .deleteMany({ nombre: req.body.planeta }), function (err, data){
        if (err != null){
        console.log(err);
        res.send(err);
        } else {
        console.log(data);
        res.send(data);
        }
    }
}
)

app.listen(process.env.PORT || 3000);


