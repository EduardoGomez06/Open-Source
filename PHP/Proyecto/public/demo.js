mostrar()

function insertar() {

    let banda = document.getElementById("artista").value
    let genero = document.getElementById("tipo").value
    let album = document.getElementById("album").value
    let anyo = document.getElementById("año").value
    let disco = document.getElementById("cd").value
    let imagen = document.getElementById("img").value

    let nuevo = {
        banda: banda,
        genero: genero,
        album: album,
        anyo: anyo,
        disco: disco,
        imagen: imagen,
    };

        fetch("/artista", {
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

function editar() {
    let banda = document.getElementById("editarArtista").value
    let genero = document.getElementById("editarTipo").value
    let album = document.getElementById("editarAlbum").value
    let anyo = document.getElementById("editarAño").value
    let disco = document.getElementById("editarCd").value
    let imagen = document.getElementById("editarImg").value

    let nuevo1 = {
        banda: banda,
        genero: genero,
        album: album,
        anyo: anyo,
        disco: disco,
        imagen: imagen,
    };
    fetch("/artista", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevo1),
    })
        .then(function (respuesta) {
            return respuesta.json();
        }).
        then(function (datos) {
            mostrar();
        });
}


function borrar() {
    let banda = document.getElementById("bandaBorrar").value
    let nuevo2 = {
        banda: banda,
    };

    fetch("/artista", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevo2),
    })
        .then(function (respuesta) {
            return respuesta.json()
        }).
        then(function (datos) {
            mostrar();
        });
}

function mostrar() {
    fetch("/artista", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(function (respuesta) {
            return respuesta.json()
        }).
        then(function (datos) {
            let mostrarBanda = "";
            for (let i = 0; i < datos.length; i++) {
                mostrarBanda += `
            <div class="ficha" style="text-align: center; display: flex; flex-direction: column; background-color: rgb(212, 184, 168); border: 2px black solid; margin: 2px; padding: 2px">
            <h3>${datos[i].banda}</h3>
            <p> ${datos[i].genero}</p>
            <p> ${datos[i].album}</p>
            <p> ${datos[i].anyo}</p>
            <p> ${datos[i].disco}</p>
            <img src="${datos[i].imagen}" alt="imagen" width="500" height="600"> 
            </div>
            `
            }
            document.getElementById("melomano").innerHTML = mostrarBanda
        })
}