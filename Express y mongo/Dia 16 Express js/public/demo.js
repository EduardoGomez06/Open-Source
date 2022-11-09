function insertar(){

    let nuevo = {
    nombre: document.getElementById("nombre").value,
    lore: document.getElementById("lore").value,
    sistema: document.getElementById("sistema").value,
    vida: document.getElementById("vida").value,
    img: document.getElementById("img").value
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