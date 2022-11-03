const express = require("express");
const servidor = express();

let animals = [
  {
    nombre: "Lipotes vexillifer",
    descripción: "El baiji, también llamado delfín chino de río, es una especie extinta de cetáceo odontoceto de la familia Iniidae. Era un delfín de río endémico del río Yangtsé. Apodado (la diosa del Yangtze)en China, se declaró extinto a finales del 2006 después de que una expedición no pudiera encontrar ejemplares en el río.",
    tipo:"piscívoros",
    imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Qiqi%2C_a_Chinese_River_Dolphin_%28Baiji%29_26.jpg/640px-Qiqi%2C_a_Chinese_River_Dolphin_%28Baiji%29_26.jpg",
  },
  { nombre: "Incilius periglenes", 
  descripción: "El sapo dorado o sapo de Monteverde es una especie extinta de anfibio anuro que vivió en unos pocos lugares en el bosque de Monteverde, en Costa Rica, en América Central. Está clasificado por la UICN como extinto, ​ pues desde 1989 no se ha visto un solo ejemplar", 
  tipo:"insectívoro", 
  imagen:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Bufo_periglenes1-corrected.jpg",
},
  {
    nombre: "Thylacinus cynocephalus",
    descripción: "El lobo de Tasmania o tilacino, también conocido como lobo marsupial, tigre de Tasmania o tilacín, es una especie extinta del género Thylacinidae, fue un marsupial carnívoro originado en el Holoceno. Era nativo de Australia, Tasmania y Nueva Guinea y se cree que se extinguió en el siglo XX",
    tipo:"carnivoro" ,
imagen:"https://static.wikia.nocookie.net/prehistrico/images/e/ec/Thylacinus_cynocephalus.png/revision/latest?cb=20130227175744&path-prefix=es",
  },
  {
    nombre: "alcelaphus buselaphus buselaphus",
    descripción: "Traducción del inglés-El bubal hartebeest, también conocido como hartebeest del norte o antílope bubal o simplemente bubal es la subespecie nominal extinta de hartebeest. Anteriormente se encontraba al norte del desierto del Sahara.",
    tipo:"herbivoro" ,
    imagen:"https://1.bp.blogspot.com/-DSO0PM3OFKg/V95szflX6aI/AAAAAAAAJlI/BfR0z6TQIi49S09GAh5yOtXi901ACID3wCLcB/s1600/el-Dodo.jpg",
  },
];

// Ruta raíz que muestra el contenido del array
servidor.get("/", (req, res) => {
  let mostrarAnimales = "";

  for (let i = 0; i < animals.length; i++) {
    mostrarAnimales += `
        <h3>Nombre: ${animals[i].nombre}</h3>
        <p>Descripción: ${animals[i].descripción}</p>
        <p>Edad: ${animals[i].tipo}</p>
        <img src=${animals[i].imagen} </img>
        `;
  }

  res.send(
    mostrarAnimales +
      `
  <form action="/form"><button type="submit">Añadir animal</button></form>
  <form action="/form-borrar"><button type="submit">Borrar</button></form>
  `
  );
});

// Ruta que nos abra la web que permita añadir animales
servidor.get("/form", (req, res) => {
  let formulario = `
    <form action="/sumar">
    <input placeholder="nombre" type="text" name="nombre">
    <input placeholder="descripción" type="text" name="descripcion">
    <input placeholder="tipo" type="text" typ="tipo">
    <input placeholder="imagen" type="text" name="imagen">
    <button type="submit">Enviar</button>
    
    </form>
    `;
  res.send(formulario);
});

servidor.get("/sumar", (req, res) => {
  let name = req.query.nombre;
  let description = req.query.descripcion;
  let type = req.query.tipo;

  let animal = {
    nombre: name,
    descripción: description,
    tipo: type,
  };

  animals.push(animal);
  res.send(`Este animal ha sido añadido correctamente
    <form action="/">
    <button type="submit">Volver</button>
    </form>`);
});

servidor.get("/form-borrar", (req, res) => {
  let formulario = `
      <form action="/borrar">
      <input placeholder="nombre" type="text" name="nombre">
      <button type="submit">Borrar</button>
      </form>
      `;
  res.send(formulario);
});

servidor.get("/borrar", (req, res) => {

  let name = req.query.nombre;
  let borradorCorrecto = false;

    for (let i = 0; i < animals.length; i++){
        if (name == animals[i].nombre){
            animals.splice(i, 1);
            res.send(`Este animal ha borrado de la lista.
            <form action="/">
        <button type="submit">Volver</button>
        </form>`);
            borradorCorrecto = true;
            break;
        }
    }

    if (borradorCorrecto == false){
        res.send(`Este animal NO se ha borrado de la lista. No existe en el array
        <form action="/">
        <button type="submit">Volver</button>
        </form>`);
    }

});

servidor.listen(3000);
