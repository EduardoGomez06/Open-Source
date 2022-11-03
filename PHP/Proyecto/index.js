const express = require("express");
const app = express();

app.use(express.static("public")); 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let artista = [
    {
    banda: "Nirvana",
    genero: "Rock (grunge)",
    album: "Nevermind",
    anyo: "1991",
    disco: "https://www.foxmusica.uno/rock/nirvana",
    imagen:"https://m.media-amazon.com/images/I/51V8DXLd72L.jpg"
       
    },
   
]

app.get("/artista", (req, res) => {
    res.send(artista)
});

app.post("/artista", (req, res) => {
    let  nuevoArtista= {
        banda: req.body.banda,
        genero: req.body.genero,
        album: req.body.album,
        anyo: req.body.anyo,
        disco: req.body.disco,
        imagen: req.body.imagen,
    };
    artista.push(nuevoArtista);
    res.send(artista);
});

app.put("/artista", (req, res) => {
    let banda = req.body.banda
    let genero = req.body.genero
    let album = req.body.album
    let anyo = req.body.anyo
    let disco = req.body.imagen
    let imagen = req.body.imagen
    let coincidencia = false

    for (let i = 0; i < artista.length; i++){
        if (banda == artista[i].banda) {
            artista[i].genero = genero
            artista[i].album = album
            artista[i].anyo = anyo
            artista[i].disco = disco
            artista[i].imagen = imagen
            i = artista.length;
            coincidencia = true;
            // break;
        }
    }

    if (coincidencia){
            res.send({ mensaje: "Se ha editado correctamente"})
    } else {
        res.send({ mensaje: "Error al editar"})
    }
})

app.delete("/artista", (req, res) => {
    let banda = req.body.banda
    let coincidencia = false

    for (let i = 0; i < artista.length; i++){
        if (banda == artista[i].banda){
            artista.splice(i, 1)
            coincidencia = true
            i = artista.length
        }
    }

    coincidencia
    ? res.send(artista)
    : res.send({ mensaje: "No existe este artista"})

})

app.listen(process.env.PORT || 3000);