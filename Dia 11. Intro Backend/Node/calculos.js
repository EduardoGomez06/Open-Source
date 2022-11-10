// CREO FUNCIÓN SUMAR/RESTAR EN UN ARCHIVO SEPARADO
function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2){
    return num1 * num2;
}

// AHORA QUE YA ESTÁN CREADAS, LAS EXPORTO("ME LAS LLEVO")
// A OTRO LADO. 
module.exports = sumar;

