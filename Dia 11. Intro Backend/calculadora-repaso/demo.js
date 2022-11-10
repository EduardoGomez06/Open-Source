let num1;
let num2;
setTimeout(preguntar, 1500);

function preguntar() {
  num1 = parseInt(prompt("Dime primer número"));
  num2 = parseInt(prompt("Dime segundo número"));
  let respuesta = parseInt(prompt("qué operación quieres realizar"));
  operaciones(respuesta);
}

function operaciones(eleccion) {
  switch (eleccion) {
    case 1: document.getElementById("print").innerHTML = `<h3>la suma es ${num1 + num2}</h3>`
    setTimeout(preguntar, 1000);
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 7: document.getElementById("print").innerHTML = `<h3>Operaciones finalizadas</h3>
    <button onclick="preguntar()">Volver a encender la calculadora</button>`
        break;
  }
}

function preguntarNumeros(){
    let num = parseInt(prompt("dime un número"));
    return num;
}
