mostrar();

function insertar(){
    // GUARDAMOS INFORMACIÓN QUE EL USUARIO ESCRIBE EN EL FORMULARIO
    let especie = document.getElementById("especie").value;
    let juego = document.getElementById("juego").value;
    let imagen = document.getElementById("img").value;

    let nuevo = {
        especie: especie,
        juego: juego,
        imagen: imagen,
    };

    //necesito mandar esta información qyue he grabado en este demo.js de la carpeta public (ficheros estáticos) a la ruta
    // "/personajes" del método POST (diferente a get, porque añadimos esa inf). 
    // ESTA INFORMACIÓN LA PASO VÍA EL BODY (la forma que tenemos de enviar info de manera segura)
    // utilizaremos la estructura fetch()

    fetch("/personajes", {
        method: "POST", // método por donde pasaremos... Delete, put...
        headers: {
            "Content-Type": "application/json", // especificamos que utilizaremos JSON
        },
        body: JSON.stringify(nuevo), // elementos que transporto por el body.
        // en este caso, además, lo convertimos a JSON con el JSON.stringify
    })
    .then(function (respuesta) {
        return respuesta.json();
    }).
    then (function (datos){
        mostrar();
    });
}

function editar(){
    let especie = document.getElementById("especieEditar").value;
    let juego = document.getElementById("juegoEditar").value;
    let imagen = document.getElementById("imgEditar").value;

    let nuevo = {
        especie: especie,
        juego: juego,
        imagen: imagen,
    };

    fetch("/personajes", {
        method: "PUT", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevo), 
    })
    .then(function (respuesta) {
        return respuesta.json();
    }).
    then (function (datos){
        mostrar();
    });
}


function borrar(){
    let especie = document.getElementById("especieBorrar").value;
    let nuevo = {
        especie: especie,
    };

    fetch("/personajes", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json", // especificamos que utilizaremos JSON
        },
        body: JSON.stringify(nuevo), 
    })
    .then(function (respuesta) {
        return respuesta.json();
    }).
    then (function (datos){
        mostrar();
    });
}

function mostrar(){
    fetch("/personajes", {
        method: "GET", // método por donde pasaremos... Delete, put...
        headers: {
            "Content-Type": "application/json", // especificamos que utilizaremos JSON
        }
    })
    .then(function (respuesta) {
        return respuesta.json();
    }).
    then (function (datos){
        let mostrarPersonajes = "";
        for (let i = 0; i < datos.length; i++){
            mostrarPersonajes += `
            <div class="ficha" style="text-align: center; display: flex; flex-direction: column; background-color: rgb(212, 184, 168); border: 2px black solid; margin: 2px; padding: 2px">
            <h3>${datos[i].especie}</h3>
            <p> ${datos[i].juego}</p>
            <img src="${datos[i].imagen}" alt="imagen" width="500" height="600"> 
            </div>
            `
        }
        document.getElementById("especies").innerHTML = mostrarPersonajes;
    });
}
