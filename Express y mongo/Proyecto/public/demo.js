mostrarDatos();

function insertar(){

    let nuevo = {
    img: document.getElementById("img").value,
    banda: document.getElementById("Banda").value,
    genero: document.getElementById("Genero").value,
    album: document.getElementById("Album").value,
    anyo: document.getElementById("Año").value

    }

   fetch("/artista", {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(nuevo)
    })
    location.reload();
}

function mostrarDatos(){
    fetch("/artista", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => {
        let tabla = `
        <center>
        <table border="4">
        <tr>
        <th colspan="6">ARTISTAS</th>
        </tr>
        <tr>
        </center>
            <th color="black">IMAGEN</th>
            <th>BANDA</th>
            <th>GENERO</th>
            <th>ALBUM</th>
            <th>AÑO</th>
        </tr>`
        for (let i = 0; i < data.length; i++){
            tabla += `<tr>
            <th><a href="https://www.youtube.com/"><img src="${data[i].img}" alt="Artista" width="100" height="100"></a></th>
            <th>${data[i].banda}</th>
            <th>${data[i].genero}</th>
            <th>${data[i].album}</th>
            <th>${data[i].anyo}</th>
            `
        }
        tabla += `</table>`
        document.getElementById("mostrarBanda").innerHTML = tabla;

    })
}

function editar(){
    let imagen = document.getElementById("editarImg").value
    let banda= document.getElementById("editarBanda").value
    let genero = document.getElementById("editarGenero").value
    let album = document.getElementById("editarAlbum").value
    let anyo = document.getElementById("editarAño").value


    let objeto = {
        imagen,
        banda,
        genero,
        album,
        anyo
     
    };

    fetch("/artista", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        location.reload()
    })

}

function borrar(){
    const artistas = document.getElementById("editarBanda").value

    let borrando = {
        artistas,
    };

    fetch("/artista", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(borrando),
    }).then((res) => res.json())
    .then((data) => {
        console.log(data)
        window.location.reload()
    })

}