

const videojuegos = {
    titulo: "World of Warcraft",
    duracionMedia: 75,
    lanzamiento: 2004,
    plataforma: "PC",
    tipo: "MMORPG",
    expansiones: 7,
    empresa: "Blizzard",
    usuariosActivos: 450000,
    pagoMensual: true,
    adaptadoTlf: false,
}

for(let key in videojuegos){
    console.log("********");
    console.log(key + " : ");
    console.log(videojuegos[key]);
}

