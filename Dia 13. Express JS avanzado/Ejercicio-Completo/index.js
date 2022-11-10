const express = require("express");
const servidor = express();

let lista = [
  {
    modelo: "UT447",
    descripción: "Cercanias",
    velocidadMaxima: 120,
    anyo: 1991,
    imagen: "https://irvia.es/wp-content/uploads/2018/10/s447.jpg",
    companyia: "RENFE"
  },
  {
    modelo: "UT448",
    descripción: "REGIONAL",
    velocidadMaxima: 140,
    anyo: 1982,
    imagen: "https://www.trenscat.com/renfe/images/trens/448/P071218069.jpg",
    companyia: "RENFE"
  },
  {
    modelo: "UT450",
    descripción: "Cercanias",
    velocidadMaxima: 120,
    anyo: 1980,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/9/94/Serie_450.jpg",
    companyia: "RENFE"
  },
  {
    modelo: "UT470",
    descripción: "REGIONAL",
    velocidadMaxima: 140,
    anyo: 1980,
    imagen: "https://treneando.files.wordpress.com/2019/05/serie-470-renfe.jpg",
    companyia: "RENFE"
  }
];

// Ruta raíz que muestra el contenido del array
servidor.get("/", (req, res) => {
  let mostrarTrenes = "";

  for (let i = 0; i < lista.length; i++) {
    mostrarTrenes += `
        <div style="background-color: rgb(146, 115, 115); width: fit-content; 
        border: 2px solid black;
        margin-bottom: 5px";
        margin-left: inherit;
        display: inline-block>
        <h3>Modelo: ${lista[i].modelo}</h3>
        <p>Descripción: ${lista[i].descripción}</p>
        <p>Año: ${lista[i].anyo}</p>
        <img src="${lista[i].imagen}" alt="train" width= "300px" height="300px">
        </div>`;
  }

  res.send(
    mostrarTrenes +
      `
  <form action="/form"><button type="submit">Añadir tren</button></form>
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
    <input placeholder="año" type="text" name="anyo">
    <input placeholder="imagen" type="text" name="img">
    <button type="submit">Enviar</button>
    </form>
    `;
  res.send(formulario);
});

servidor.get("/sumar", (req, res) => {
  let name = req.query.nombre;
  let description = req.query.descripcion;
  let age = req.query.anyo;
  let photo = req.query.img;

  let tren = {
    modelo: name,
    descripción: description,
    anyo: age,
    imagen: photo
  };

  lista.push(tren);
  res.send(`La ficha del tren ha sido creada correctamente
    <form action="/">
    <button type="submit">Volver</button>
    </form>`);
});

servidor.get("/form-borrar", (req, res) => {
  let formulario = `
      <form action="/borrar">
      <input placeholder="modelo" type="text" name="nombre">
      <button type="submit">Borrar</button>
      </form>
      `;
  res.send(formulario);
});

servidor.get("/borrar", (req, res) => {

  let name = req.query.nombre;
  let borradorCorrecto = false;

    for (let i = 0; i < lista.length; i++){
        if (name == lista[i].modelo){
            lista.splice(i, 1);
            res.send(`El tren se ha borrado de la lista.
            <form action="/">
        <button type="submit">Volver</button>
        </form>`);
            borradorCorrecto = true;
            break;
        }
    }

    if (borradorCorrecto == false){
        res.send(`El tren NO se ha borrado de la lista. No existe en el array
        <form action="/">
        <button type="submit">Volver</button>
        </form>`);
    }

});

servidor.listen(3000);
