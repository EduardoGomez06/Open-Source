// CREO UNA VARIABLE PARA IMPORTAR TODO AQUELLO QUE 
// EXPORTABA EN CALCULOS.JS
const calculo = require("./calculos.js");
const saludo = require("./saludo.js");

console.log("hola mundo desde el index.js");
console.log("esta es la página web principal donde voy a importar las funciones sumar y restar")

console.log(saludo());
console.log(calculo(3, 3));

const yodasay = require('yodasay');
 
console.log(yodasay.say({
  text : 'Hola mundo desde el lado oscuro'
}));