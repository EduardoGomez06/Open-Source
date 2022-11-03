


const saludar = require("./name")


console.log("hello world");
console.log(saludar());


const exactMath = require("exact-math");


console.log(exactMath.add(789, 34, 250443)); 
console.log(exactMath.sub(2059, 79)); 
console.log(exactMath.mul(3.24, 97.856)); 
console.log(exactMath.div(1205, 12.002)); 

const other = require("./operation");

console.log(other);




function saludo(){
    return"hola Eduardo";
}

module.exports = saludo;