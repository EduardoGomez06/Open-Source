const express = require('express');
const servidor = express();



/*servidor.get(
    '/Bienvenido',
    function (request, response) {
        response.send('<h1>Hello world</h1>')
    }

)

servidor.get(
    '/numb',
    function (request, response) {
        response.send('<h1>Hello world</h1>')
    }

)*/



/*servidor.get(
    '/number',
    function (request, response) {
let number = Math.random() * 10
        response.send(`<h1>numbers ${number}</h1>`)
    })*/

    /*let persona = ["Cristian", "Eva", "Lucia", "jose", "Hernan"]

servidor.get(
    '/persona',
    function (request, response) {
         response.send(`<h1>Lista programadores ${persona}</h1>`)
    }

)

servidor.get(
    '/persona/:parametro',
    function (request, response) {
        let seleccion= request.params.parametro;
        let estaEnElArray = false

        for (let i = 0; i < parametro.length; i++){

            if(parametro[i] == seleccion){
                response.send(`<h1>El/la Seleccionado/a es: ${seleccion}</h1>`)
                estaEnElArray = true
                breack;
            }
        }
        if(estaEnElArray == false)
        response.send(`<h1>No existe este progrmador</h1>`)
    }

)

/*servidor.get(
    '/persona/:parametro',
    function (request, response) {
        
let parametro = {
    pro1 : "cristian",
    pro2 : "eva",
    pro3 : "lucia",
    pro4 : "jose",
    pro5 : "hernan"
      }
        
        response.send(`<h1>programador/a ${parametro}</h1>`)
    }

)*/


servidor.get(
    '/saludo',
    function (request, response) {
        let hola = require("./saludo.js")
        response.send(`<h1>Now ${hola}`)
    }

)




servidor.listen(3000)