const express = require("express");
const app = express();
let cesta = [];
let almacen = require("./almacen");

// DEFINIREMOS LAS DIFERENTES RUTAS

app.get("/ropa", function (req, res) {
  let contenidoTabla = "";

  for (let i = 0; i < almacen[0].productos.length; i++) {
    contenidoTabla += `
            <tr>
                <td>${almacen[0].productos[i].nombre}</td>
                <td>${almacen[0].productos[i].precio}</td>
                <td>${almacen[0].productos[i].stock}</td>
            </tr>
        `;
  }
  let mostrarAlmacen = `
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                ${contenidoTabla}
            </tbody>
        </table>
    `;
  res.send(mostrarAlmacen);
});

app.get("/comprar/:producto/:unidades", function (req, res) {
  let item = req.params.producto;
  let unidades = req.params.unidades;
  let catalogo = false;
  let stock = false;

  for (let i = 0; i < almacen[0].productos.length; i++) {
    if (item === almacen[0].productos[i].nombre) {
      catalogo = true;
      if (almacen[0].productos[i].stock >= unidades){
        stock = true
        // HAY STOCK Y COMPRAS. 
      } 
      break;
    }
  }
  res.send(pintar(catalogo, stock));

});





function pintar(parametro1, parametro2){
    let catalogo = parametro1;
    let stock = parametro2

    if (catalogo == false) {
        return `<h1>No hay este producto en el catálogo</h1>`
      } else if (catalogo && stock)  {
        return `<h1>Tenemos este producto en el catálogo y stock</h1>`
      } else if (catalogo) {
        return `<h1>Tenemos este producto en el catálogo PERO SIN stock</h1>`
      }
}
app.listen(3000);
