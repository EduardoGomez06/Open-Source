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
        imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/950/public/media/image/2017/05/zelda-breath-wild_0.jpg"
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
})





app.listen(process.env.PORT || 3000);