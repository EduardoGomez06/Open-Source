const express = require("express");
const app = express();

app.use(express.static("public")); 
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // vamos a estar transformando javascript
// a JSON y viceversa

let personajes = [
    {
        especie: "Argonian",
        juego: "Elder Scrolls",
        imagen: "https://images.uesp.net/c/ce/LO-race-Argonian.png"
    },
    {
        especie: "Asari",
        juego: "Mass Effect",
        imagen: "https://upload.wikimedia.org/wikipedia/en/0/09/AsariConcept.png"
    },
    {
        especie: "Gerudo",
        juego: "Zelda",
        imagen: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda-ocarina-of-time-3d/4/49/243175-nabooru_large.jpeg"
    },
    {
        especie: "Qunari",
        juego: "Dragon Age",
        imagen: "https://static.wikia.nocookie.net/dragonage/images/9/96/Vashoth_Cards.jpg"
    },
    {
        especie: "Chao",
        juego: "Sonic",
        imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Sonic_chao.png/330px-Sonic_chao.png"
    },
]

app.get("/personajes", (req, res) => {
    res.send(personajes)
});

app.post("/personajes", (req, res) => {
    let nuevoPersonaje = {
        especie: req.body.especie,
        juego: req.body.juego,
        imagen: req.body.imagen,
    };
    personajes.push(nuevoPersonaje);
    res.send(personajes);
});

app.put("/personajes", (req, res) => {
    let especie = req.body.especie;
    let juego = req.body.juego;
    let imagen = req.body.imagen;
    let coincidencia = false;

    for (let i = 0; i < personajes.length; i++){
        if (especie == personajes[i].especie) {
            personajes[i].juego = juego;
            personajes[i].imagen = imagen;
            i = personajes.length;
            coincidencia = true;
            // break;
        }
    }

    if (coincidencia){
            res.send({ mensaje: "Se ha editado correctamente"});
    } else {
        res.send({ mensaje: "Error al editar"});
    }
})

app.delete("/personajes", (req, res) => {
    let especie = req.body.especie;
    let coincidencia = false;

    for (let i = 0; i < personajes.length; i++){
        if (especie == personajes[i].especie){
            personajes.splice(i, 1);
            coincidencia = true;
            i = personajes.length;
        }
    }

    coincidencia
    ? res.send(personajes)
    : res.send({ mensaje: "No existe este personajes"});

});

app.listen(process.env.PORT || 3000);