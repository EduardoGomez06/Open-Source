


letpuesto = parseInt(prompt("Ingresar puesto: "));
/*
if(isNaN(puesto)) {​​​​​​​​
  alert("No es un número lo que has ingresado!!!");
}​​​​​​​​ else if(puesto < 1) {​​​​​​​​
  alert("Debe ser mayor a 0!!!");
}​​​​​​​​ else {​​​​​​​​
  if(puesto == 1){​​​​​​​​
    alert("Ganaste!!!");
  }​​​​​​​​ else {​​​​​​​​
    alert("Lo importante es participar");
  }​​​​​​​​
  if(puesto == 1){​​​​​​​​
    alert("Medalla de Oro");
  }​​​​​​​​ else if(puesto == 2){​​​​​​​​
    alert("Medalla de Plata");
  }​​​​​​​​ else if(puesto == 3){​​​​​​​​
    alert("Medalla de Bronce");
  }​​​​​​​​ else {​​​​​​​​
    alert("Sin medallas, lo importante es participar");
  }​​​​​​​​
}​​​​​​​​
*/

if (isNaN(puesto)) {
    alert("No es un número lo que has ingresado!!!");
} elseif(puesto < 0) {
    alert("Debe ser mayor a 0!!!");
}​​​​​​​​ else {
    switch (puesto) {​​​​​​​​
    case1:
    alert("Medalla de Oro\nSube al podium");
    break;
    case2:
    alert("Medalla de Plata\nSube al podium");
    break;
    case3:
    alert("Medalla de Bronce\nSube al podium");
    break;
default:
    alert("Lo importante es participar");
}​​​​​​​​
}



// NOTAS

let notaWalter = 10;
let notaEduardo = 7;
let notaFran = 9;
let notaRoberto = 3;
let notaLaura = 3;
let notaCristina = 4;
let notaPablo = 5;
let notaNatalia = 3;
let notaCarlos = 8;
let notaMario = 3;
//         0    1
let notasEstudiantes = [10, 7, 9, 3, 3, 4, 5, 3, 8, 3, 3]

console.log(notasEstudiantes[0]);
console.log(notasEstudiantes[9]);

let estudiantes = ["Rober", "Pablo"];

console.log("la nota de " + estudiantes[0] + " es..." + notasEstudiantes[11]);

let EduardoArray = ["Eduardo...", 10, false, true]
