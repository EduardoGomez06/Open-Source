// CORRECCIONES EXPRESS JS

const express = require('express');
const app = express();

let listaPokemon=["Ditto","Pikachu","Raichu","Machop","Dragonitte"];
 
app.get(
    '/familia',
    function (request,response) {
        response.send(`<h1>${listaPokemon}</h1>`)
    }
)
 
app.get(
    '/familia/:pokemon',
    function (request,response) {

        let seleccion = request.params.pokemon; //esta variable graba lo que el usuario está escribiendo
        let estaEnElArray = false;
        
        for (let i = 0; i < listaPokemon.length; i++){

            if (listaPokemon[i] == seleccion){
                 response.send(`<h1>El pokémon seleccionado es:${seleccion}</h1>`)
                 estaEnElArray = true;
                 break;
            }
         
        }

        // SALGO AQUÍ CON MI COINCIDENCIA...
        if (estaEnElArray == false){
            response.send(`<h1>No existe este pokémon en el array</h1>`)
        }
    }
)

app.listen(3000);