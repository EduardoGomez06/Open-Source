//creo funcio sumar en un archivo separado

function sumar(num1,num2){
   return num1+num2
} 
function restar (num1,num2){
    return num1-num2
}

//ahora que estan creadas, las exporto"me las  llevo"
//al otro archivo "index.js"

module.exports = sumar, restar;