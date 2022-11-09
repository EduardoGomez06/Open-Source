// EMPEZAMOS A CREAR NUESTRO SERVIDOR EXPRESS
const express = require('express');
const servidor = express();

servidor.get(
    '/', //especifico ruta
    function (request, response) {
        response.send('<h1>Hola a la ruta inicial</h1>')
    }

)

servidor.get(
    '/bienvenidos', //especifico ruta
    function (request, response) {
        response.send('<h1>Hola Mundo desde Bienvenidos</h1>')
    }
)

servidor.get('/persona/:nombre/:apellido',
    function (request, response) {
        let nombre = request.params.nombre;
        let apellido = request.params.apellido;
    response.send(`<h1>Hola ${nombre} ${apellido}`)
}
)

servidor.get('/:error', function (request, response) {
    let error = request.params.error;
    response.send(`<h1>La ruta ${error} no existe...</h1>
    <form action="/bienvenidos" method="get" id="volver"></form>
    <button type="submit" form="volver" value="Submit">Volver</button>
    `)
}
)

/*
servidor.get(
    '/objeto', //especifico ruta
    function(request, response) {
        response.send([
            {
                nombre: "Rober",
                estaEstudiando: true
            },
            {
                nombre: "Mario",
                estaEstudiando: true
            },
            {
                nombre: "Laura",
                estaEstudiando: true
            }
        ])
    }
) */

servidor.listen(3000)



