
//express avanzado//

const express = require("express")
const app = express()

app.use(express.static("public"))
 
// RUTA FIJA
app.get("/", function (req, res) {
  res.send(`<h1>Ruta raíz</h1>`)
});
// RUTA FIJA + PARÁMETRO
app.get("/parametro/:item", function (req, res) {
    let item = req.params.item
    res.send(`<h1>Pasamos por parámetros ${item}</h1>`)
  });
// RUTA FIJA + QUERY
app.get("/query", function(req, res){
    let nombre = req.query.nombre
    let apellido = req.query.apellido
    let edad = req.query.q
    res.send(`<h1>Pasamos por query ${nombre} y ${apellido} y también ${edad}</h1>`)
})
 
app.listen(3000)

const express = require("express");
const servidor = express();

let lista = [
  {
    nombre: "Agen Kolar",
    descripción: "Maestro Jedi Zabrak",
    edad: 46,
  },
  { nombre: "Aurra Sing", descripción: "infame cazarrecompensas", edad: 50 },
  {
    nombre: "Gasgano",
    descripción: "hábil corredor de vainas",
    edad: 15,
  },
];

// Ruta raíz que muestra el contenido del array
servidor.get("/", (req, res) => {
  let mostrarPersonajes = "";

  for (let i = 0; i < lista.length; i++) {
    mostrarPersonajes += `
        <h3>Nombre: ${lista[i].nombre}</h3>
        <p>Descripción: ${lista[i].descripción}</p>
        <p>Edad: ${lista[i].edad}</p>
        `;
  }

  res.send(
    mostrarPersonajes +
      `
  <form action="/form"><button type="submit">Añadir personaje</button></form>
  <form action="/form-borrar"><button type="submit">Borrar</button></form>
  `
  );
});

// Ruta que nos abra la web que permita añadir personajes
servidor.get("/form", (req, res) => {
  let formulario = `
    <form action="/sumar">
    <input placeholder="nombre" type="text" name="nombre">
    <input placeholder="descripción" type="text" name="descripcion">
    <input placeholder="edad" type="text" name="edad">
    <button type="submit">Enviar</button>
    </form>
    `;
  res.send(formulario);
});

servidor.get("/sumar", (req, res) => {
  let name = req.query.nombre;
  let description = req.query.descripcion;
  let age = req.query.edad;

  let personaje = {
    nombre: name,
    descripción: description,
    edad: age,
  };

  lista.push(personaje);
  res.send(`El personaje ha sido añadido correctamente
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

    for (let i = 0; i < lista.length; i++){
        if (name == lista[i].nombre){
            lista.splice(i, 1);
            res.send(`El personaje se ha borrado de la lista.
            <form action="/">
        <button type="submit">Volver</button>
        </form>`);
            borradorCorrecto = true;
            break;
        }
    }

    if (borradorCorrecto == false){
        res.send(`El personaje NO se ha borrado de la lista. No existe en el array
        <form action="/">
        <button type="submit">Volver</button>
        </form>`);
    }

});

servidor.listen(3000);