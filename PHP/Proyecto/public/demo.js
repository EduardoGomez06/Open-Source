mostrarDatos();

function insertar(){

    let nuevo = {
    banda: document.getElementById("Banda").value,
    genero: document.getElementById("Genero").value,
    album: document.getElementById("Album").value,
    anyo: document.getElementById("Año").value,
    disco: document.getElementById("Disco").value,
    img: document.getElementById("img").value
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
        <table border="2">
        <tr>
        <th colspan="6">ARTISTAS</th>
        </tr>
        <tr>
            <th>BANDA</th>
            <th>GENERO</th>
            <th>ALBUM</th>
            <th>AÑO</th>
            <th>DISCO</th>
            <th>FOTO</th>
        </tr>`
        for (let i = 0; i < data.length; i++){
            tabla += `<tr>
            <th>${data[i].banda}</th>
            <th>${data[i].genero}</th>
            <th>${data[i].album}</th>
            <th>${data[i].anyo}</th>
            <th>${data[i].Disco}</th>
            <th>${data[i].vida}</th>
            <th><img src="${data[i].img}" alt="planeta" width="100" height="100"></th>
            `
        }
        tabla += `</table>`
        document.getElementById("mostrarBanda").innerHTML = tabla;

    })
}

function editar(){
    let banda= document.getElementById("editarBanda").value
    let genero = document.getElementById("editarGenero").value
    let album = document.getElementById("editarAlbum").value
    let anyo = document.getElementById("editarAño").value
    let disco= document.getElementById("editarDisco").value
    let imagen = document.getElementById("editarImg").value

    let objeto = {
        banda,
        genero,
        album,
        anyo,
        disco,
        imagen
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
