let estudiantes = parseInt(prompt("Que edad tienes"))

if (estudiantes <= 2 ){
    alert("Guarderia");
} else if (estudiantes >= 3 && estudiantes < 7){
    alert("educacion infantil");
 } else if (estudiantes >= 7 && estudiantes < 12){
        alert("educacion primaria");
     }    else if (estudiantes >= 12 && estudiantes < 17){
            alert("educacion secundaria");
     } else if (estudiantes >= 17 && estudiantes <= 100){
        alert("Ya estas mayorcito/a")
     }


     

let box1 =  parseInt(prompt("Primer numero"));
let box2 =  parseInt(prompt("Segundo numero"));

if ( "SUMA" + (box1 + box2)) {
    alert("El resultado de la SUMA es" + ( box1 + box2));
} if ( "RESTA" + (box1 - box2)) {
    alert("El resultado de la SUMA es" + ( box1 - box2));
} if ( "MULTIPLICACION" + (box1 * box2)) {
    alert("El resultado de la RESTA es" + ( box1 * box2));
} if ( "DIVISION" + (box1 / box2)) {
    alert("El resultado de la DIVISION es" + ( box1 / box2));
} if ( "PORCENTAJE" + (box1 * box2)%100) {
    alert("El resultado de la PORCENTAJE es" + ( box1 * box2) %100);
}
