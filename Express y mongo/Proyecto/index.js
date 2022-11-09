const express = require("express")
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())


const mongodb = require("mongodb")
let MongoClient = mongodb.MongoClient


MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    if (err != null) {
        console.log(err)
        console.log("No se ha podido conectar con MongoDB")
    } else {
        app.locals.db = client.db("melomano")
        console.log("MongoDB conectado correctamente")
    }
});


app.post('/artista', function(req, res) {

    let datosRecibidos = {
        img: req.body.img,
        banda: req.body.banda,
        genero: req.body.genero,
        album: req.body.album,
        anyo: req.body.anyo,
}

    app.locals.db
    .collection('artista')
    .insertOne(
        datosRecibidos,
        function (err, respuesta){
        if (err != null){
            console.log(err);
        } else {
            console.log("añadido correctamente", respuesta)
        }}
    )
});

app.get("/artista", function (req, res){
    app.locals.db
    .collection('artista')
    .find()
    .toArray(
        function (err, datos){
            if (err != null){
                console.log(err)
            } else {
                console.log(datos)
                res.send(datos)
            }
        }
    )
}
)

app.put("/artista", function (req, res){
    let modificacion = {
        imagen: req.body.imagen,
        banda: req.body.banda,
        genero: req.body.genero,
        album: req.body.album,
        anyo: req.body.anyo,
       }

    app.locals.db
    .collection('artista')
    .updateOne({  banda: modificacion.banda },
        {
            $set: {
               genero: modificacion.genero,
               album: modificacion.album,
               anyo: modificacion.anyo,
               img: modificacion.imagen, 
            },
        },
        function (err, datos) {
            if (err != null ){
                res.send(err)
            } else {
                res.send(datos)
            }
        }
    )
}
)

app.delete("/artista", function (req, res){
    app.locals.db
    .collection("artista")
    .deleteMany({ banda: req.body.artistas }), function (err, data){
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

app.listen(process.env.PORT || 3000)