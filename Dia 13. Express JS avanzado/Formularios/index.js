const express = require("express");
const app = express();

app.use(express.static("public"));

// RUTA FIJA
app.get("/", function (req, res) {
  res.send(`<h1>Ruta raíz</h1>`);
});
// RUTA FIJA + PARÁMETRO
app.get("/parametro/:item", function (req, res) {
    let item = req.params.item;
    res.send(`<h1>Pasamos por parámetros ${item}</h1>`);
  });
// RUTA FIJA + QUERY
app.get("/query", function(req, res){
    let nombre = req.query.nombre;
    let apellido = req.query.apellido;
    let edad = req.query.edad;
    res.send(`<h1>Pasamos por query ${nombre} y ${apellido} y también ${edad}</h1>`);
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/public/form.html')
});

app.listen(3000);
