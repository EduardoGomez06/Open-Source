/*ejercicio 1*/
let number1 = parseInt(prompt("dime un numero del 1 al 100"));
let number2 = parseInt(prompt("segundo numero"));

alert("este es tu resultado SUMA" + (number1 + number2));
alert("este es tu resultado RESTA" + (number1 - number2));
alert("este es tu resultado DIVISION" + (number1 / number2));
alert("este es tu resultado MULTIPLICACION" + (number1 * number2));
alert("este es tu resultado MEDIA" + (number1 * number2) / 2);

//correccion

console.log("SUMA****" + (number1 + number2))
console.log("RESTA****" + (number1 - number2))
console.log("DIVISION****" + (number1 / number2))
console.log("MULTIPLICACION****" + (number1 * number2))
console.log("MEDIA****" + (number1 + number2) / 2)

if (number1 > number2) {
    console.log("MAS GRANDE**** NUM1");
} else if (number1 == number2) {
    console.log("NO HAY MAS GRANDE NI MAS PEQUEÑO")
} else {
    console.log("MAS GRANDE****  NUM2")
}

//documento html sobrescrito

document.getElementById("print").innerHTML += `
<h3>Suma ${num1 + num2}</h3>
<h3>Resta ${num1 - num2}</h3>
<h3>Mult ${num1 * num2}</h3>
<h3>Div ${num1 / num2}</h3>
<h3>Media ${(num1 + num2) / 2}</h3>
`;

/*ejercicio 2*/

let edad = parseint(prompt("que edad tienes"));

if (edad >= 8) {
    console.log("demasiado major");
} else if (edad < 8) {
    console.log("pasa por tobogan")
}

/*ejercicio3*/


let x = parseInt(prompt("CODIGO:primer numero"));
let y = parseInt(prompt("CODIGO:segundo numero"));
let a = parseInt(prompt("CODIGO:tercero numero") + (x + y));

documuent.getElementById(print).
    innerHTML = <P>primer numero, cuyo valor es ${x},
        mas segundo numero, cuyo valor es $(y), es igual al
        tercer numero ${a} </P>

if (x + y == a) {
    alert("x mas y es iagual a y");
} else {
    alert("y no es la suma de los dos anteriores");
}

/*ejercicio 4*/

let nu1 = parseInt(prompt("dime num1"));
let nu2 = parseInt(prompt("dime num2"));
let nu3 = parseInt(prompt("dime num3"));



/*ejercicio 5*/

let dia = (prompt("Que dia es hoy"))

if (dia == "lunes") {
    alert("Dia de la semana")
} else if (dia == "martes") {
    alert("Dia de la semana")
} else if (dia == "miercoles") {
    alert("Dia de la semana")
} else if (dia == "jueves") {
    alert("Dia de la semana")
} else if (dia == "viernes") {
    alert("Dia de la semana")
} else if (dia == "sabado") {
    alert("es fin de semana")
} if (dia == "domingo") {
    alert("es fin de semana")
}

/*correccion
if (dia == "lunes" 
|| dia == "martes" 
|| dia == "miércoles"
|| dia == "jueves" 
|| dia == "viernes") {
console.log("es " + dia);
} else if (dia == "sábado" 
|| dia == "domingo") {
console.log("es finde, concretamente es " + dia);
} else {
console.log("error en la información obtenida");
} 
 
switch (dia){
case "lunes":
case "martes":
case "miércoles":
case "jueves":
case "viernes": console.log("es laborable, concretamente es " + dia);
break;
case "sábado": 
case "domingo": console.log("es fin de la semana, concretamente es " + dia);
break;
default: console.log("error");
}*/

/*ejercicio 6



let n1 = parseInt(prompt("dime un numero"))

if ("al cuardrado" == (n1 * 2)) {
    alert(" no se muestra")
} else if ("si el numero es"(n1 * 3)) {
alert("su resultado es") 
} else  ("si el numero es"(n1 - 1)); {
alert("su resultado es") 
}*/



/*ejercicio 7 */


let x1 = parseInt(prompt("dime un numero"))
let y1 = parseInt(prompt("dime otro numero"))

alert("este es el resultado dividido" + " " + ( x1 / y1 ));

if (x1 == 0 || y1 == 0){
    alert("No se puede dividir por cero");
}

/*ejercicio 8 


let x2 = parseInt(prompt("Dime un numero"));
let y2 = parseInt(prompt("Dime otro numero"));


if ("si es mayor" == (x2 > y2) ){
    alert("es mayor que" == (x2 > y2));
} else ("es menor que" == (x2 < y2)); {
    alert("es menor que" == (x2 < y2));
}*/

/*ejercicio 9*/



/*ejemplo n00000
let puesto = parseInt(prompt("Ingresar puesto: "));
/*
if(isNaN(puesto)) {
  alert("No es un número lo que has ingresado!!!");
} else if(puesto < 1) {
  alert("Debe ser mayor a 0!!!");
} else {
  if(puesto == 1){
    alert("Ganaste!!!");
  } else {
    alert("Lo importante es participar");
  }
  if(puesto == 1){
    alert("Medalla de Oro");
  } else if(puesto == 2){
    alert("Medalla de Plata");
  } else if(puesto == 3){
    alert("Medalla de Bronce");
  } else {
    alert("Sin medallas, lo importante es participar");
  }
}

 
if(isNaN(puesto)) {
    alert("No es un número lo que has ingresado!!!");
  } else if(puesto < 0) {
    alert("Debe ser mayor a 0!!!");
  } else {
    switch(puesto){
      case 1:
        alert("Medalla de Oro\nSube al podium");
        break;
      case 2:
        alert("Medalla de Plata\nSube al podium");
        break;
      case 3:
        alert("Medalla de Bronce\nSube al podium");
        break;
      default:
        alert("Lo importante es participar");
    }
  }*/
