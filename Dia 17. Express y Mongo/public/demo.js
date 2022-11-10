mostrarDatos();

function insertar(){

    let nuevo = {
    nombre: document.getElementById("nombre").value,
    lore: document.getElementById("lore").value,
    sistema: document.getElementById("sistema").value,
    vida: document.getElementById("vida").value,
    img: document.getElementById("img").value
    }

    if (nuevo.vida === "si" || nuevo.vida === "sí" || nuevo.vida === "SI" || nuevo.vida === "SÍ"){
        nuevo.vida = true;
    } else {
        nuevo.vida = false
    }

    fetch("/planetas", {
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        body: JSON.stringify(nuevo)
    })
    location.reload();
}

function mostrarDatos(){
    fetch("/planetas", {
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
        <th colspan="6">PLANETAS</th>
        </tr>
        <tr>
            <th>NOMBRE</th>
            <th>LORE</th>
            <th>SISTEMA</th>
            <th>VIDA</th>
            <th>FOTO</th>
        </tr>`
        for (let i = 0; i < data.length; i++){
            tabla += `<tr>
            <th>${data[i].nombre}</th>
            <th>${data[i].lore}</th>
            <th>${data[i].sistema}</th>
            <th>${data[i].vida}</th>
            <th><img src="${data[i].img}" alt="planeta" width="100" height="100"></th>
            `
        }
        tabla += `</table>`
        document.getElementById("mostrarPlanetas").innerHTML = tabla;

    })
}

function editar(){
    let nombre = document.getElementById("editarPlaneta").value;
    let lore = document.getElementById("editarLore").value;
    let sistema = document.getElementById("editarSistema").value;
    let vida = document.getElementById("editarVida").value;
    if (vida === "si" || vida === "sí" || vida === "SI" || vida === "SÍ"){
        vida = true;
    } else {
        vida = false
    }
    let imagen = document.getElementById("editarImg").value;

    let objeto = {
        nombre,
        lore,
        sistema,
        vida,
        imagen
    };

    fetch("/planetas", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        location.reload();
    })

}

function borrar(){
    const planeta = document.getElementById("editarPlaneta").value;

    let borrando = {
        planeta,
    };

    fetch("/planetas", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(borrando),
    }).then((res) => res.json())
    .then((data) => {
        console.log(data);
        window.location.reload();
    })



    // FETCH
}