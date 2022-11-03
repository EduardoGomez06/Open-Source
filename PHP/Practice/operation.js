//creo funcion sumar en un archivo separado

function dif1(num1, num2) {
    return num1 >= num2;
} function dif2(num1, num2) {
    return num1 <= num2;
} function dif3(num1, num2) {
    return num1 === num2;
}



module.exports = dif1;
module.exports = dif2;
module.exports = dif3;


console.log(`es mayor que ${dif1}`);
console.log(`es mayor que ${dif2}`);
console.log(`es igual ${dif3}`);