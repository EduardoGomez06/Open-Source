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
        let mostrarPersonajes = "";
        for (let i = 0; i < datos.length; i++){
            mostrarPersonajes += `
            <h3>${datos[i].especie} ${datos[i].juego}</h3>
            <img src="${datos[i].imagen}" alt="imagen" width="500" height="600"> 
            `
        }
        document.getElementById("especies").innerHTML = mostrarPersonajes;
    });

}