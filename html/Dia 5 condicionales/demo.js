console.log("hola")

let box1 = "bienvenidos"

let respuesta = prompt("¿hace buem tiempo")

if (respuesta == "si") {
    alert ("genial,salgamos fuera");

}

alert ("estoyfuera del condicional")

// EJEMPLO TIEMPO CON IF ELSE IF... /*

// el usuario responderá y en base a esa respuesta
// vamos a mostrar por pantalla una cosa u otra

let answer = prompt("¿Hace buen tiempo?");
 
if (answer == "si") {
  alert("genial, salgamos fuera");
} else if (answer == "no") {
  alert("lástima, nos quedamos aquí");
} else if (answer = "no lo sé") {
  alert("pues mira por la ventana, si tienes");
} else {
  alert("no entiendo lo que dices");
}
// EJEMPLO TIEMPO CON IF ELSE IF...
 

// el usuario responderá y en base a esa respuesta
// vamos a mostrar por pantalla una cosa u otra
let respuesta = prompt("¿Hace buen tiempo?");
 
respuesta = respuesta.toLowerCase().trim();
 
if (respuesta == "si" || 
  respuesta == "sí") {
  alert("genial, salgamos fuera");
} else if (respuesta == "no") {
  alert("lástima, nos quedamos aquí");
} else if (respuesta = "no lo sé") {
  alert("pues mira por la ventana, si tienes");
} else {
  alert("no entiendo lo que dices");
}
 
// EJEMPLO IF ELSE IF ANIDADO
/*
let edad = parseInt(prompt("dime tu edad"));
 
if (edad >= 18) {
  alert("eres mayor de edad");
  let respuesta = prompt("tienes carnet?");
 
  if (respuesta == "si") {
    alert("enhorabuena puedes alquiler un coche");
  } else {
    alert("mira de sacártelo cuando puedas");
  }
} else if (edad < 18) {
  alert("eres menor de edad...");
}
*/
 
let mascota = prompt("¿Qué mascota tienes?");
let propiedad = prompt("¿La mascota es de tu propiedad?");
 
// OR -> ALT GR + 1 ||
// AND -> SHIFT 6, && 
if (mascota == "perro" && propiedad == "si") {
  alert("puedes dejarlo en la residencia canina unos dias...");
}
        
let nota = parseInt(prompt("qué nota tienes"));
 
switch (nota) {
  case 1:
  case 2:
  case 3:
  case 4: alert("estás suspendido");
  break;
  case 5: alert("tienes un suficiente");
  break;
  case 6: alert("tienes un bien");
  break;
  case 7:
  case 8: alert("tienes un notable");
  break;
  case 9:
  case 10: alert("tienes un excelente");
  }
   




