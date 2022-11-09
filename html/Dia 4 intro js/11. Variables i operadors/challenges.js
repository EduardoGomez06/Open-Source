/*
1)
console.log imprimirà qualsevol cosa que
hi hagi entre els parèntesis a la teva consola.

Canvia la frase a imprimir de sota, desa el fitxer,
i veuràs els canvis al teu navegador.

Després de confirmar que funciona, comenta"l.
*/

console.log("now work");

//R1

/*
2)
Fent servir tant l'operador (+) com l'operador (*),
multiplica i afegeix qualsevol combinació de números
per aconseguir imprimir el número 10.
*/

let number1 = 5;
let number2 = 3;
let number3 = 2;

console.log(number1 + number2 + number3);
console.log(number1 * number3);
console.log((number1 + number2) * number3);

//R2

/*
3)
Sovint fem servir console.log per fer `debug` (depurar errors).
Pots afegir diversos arguments a dins del parèntesi del
console.log (separant-los amb comes).
Afegeix el següent dins el console.log!

3 + 4, " should equal 7"
*/

console.log((3 + 4, 4 + 3, 4 + 2 + 1, 3 + 3 + 1), "shoul equal 7")

//R3

/*
4)
Afegeix dos `strings` per imprimir
el teu nom i cognom conjuntament!
*/

let name1 = "Eduardo";

let lastname1 = "Gomez";
let lastname2 = "Gonzalez";

console.log("NOMBRE:", (name1 + " " + lastname1 + " " + lastname2))

//R4

/*
5)
L'operador `modulo` (%) ens retorna la resta
d'una divisió. Si dividim qualsevol número entre 2
podrem saber si és parell o senar. Prova-ho!
*/

let num1 = 4;
let num2 = 3;
let num3 = 2;

console.log(num1 % num2)
console.log(num3 % num1)
console.log(num2 % num3)

let numero1 = prompt("dime un numero")
let numero2 = prompt("dime otro numero")




//R5

/*
6)
Canvia la ubicació de Mia reassignant la variable
"currentLocation" amb un nou string!
Per fer-ho, hauràs d"afegir una nova línia de codi
(no eliminis cap de les línies de codi).
Nota: també hauràs de "descomentar" el console.log
per imprimir la localització.
*/

const names = "Camil";
let currentLocation = "school";
currentLocation = "job"

console.log(names, " is currently at ", currentLocation);

//R6

/*
7)
Crea variables per que el missatge s'imprimeixi
correctament a la consola!
*/

let person = "Carla";
let place = "restaurant";
let food = "beicon and eggs";

console.log(person, " went to the " + place + " to eat " + food + ".");

//R7

/*
8)
Ara, reassigna totes les variables anteriors per
imprimir un nou missatge a la consola!
*/


person = "Sandra"
place = "Market"
food = "rice with Meat balls"


console.log(person, " went to the " + place + " to eat " + food + ".");

//R8

/*
9)
Existeixen tres formes d'incrementar
el número emmagatzemat a la variable "count".
Tot i així, hi ha un problema amb la forma en què
aquesta variable ha estat declarada. Corregeix-la!
*/

let count = 0;
count = count + 1;
count += 1;
count++;

console.log(count, "should be 3");

//R9

/*
10)
Hora de permutar! Al codi de sota volem intercanviar
els valors emmagatzemats a "a" i "b".

El codi no funciona correctament. Per assolir aquesta
tasca hauràs de crear una variable adicional
(pots anomenar-la "temp") per desar "a" o "b" mentre
fas la permuta. Fes-te un esquema si ho necessites!
*/

let a = 1;
let b = 2;
let temp = 3;

console.log("BEFORE > a is: ", a, " - and b is: ", b);


a = b;
b = a;
temp > a, b

console.log("AFTER > a is: ", b, " - and b is: ", temp);

/*example

let a = 1;
let b = 2;
let c = 3;

console.log("BEFORE > a is: ", a, " - and b is: ", b);


a = b;
b = a;
c = c;

console.log("AFTER > a is: ", b, " - and b is: ", temp);*/

//R10

/*
11)
Fes que la següent afirmació resulti "true"!
*/


console.log(3 < 4);

//R11

/*
12)
Fes que la següent afirmació resulti "false".
*/

let x = 10;
let y = x--;

console.log(x >= y);

//R12

/*
13)
Soluciona l'operador de comparació per què
l'afirmació següent resulti "false".
*/

console.log(3 === "3");

//R12

/*
14)
Modifica l'expressió de sota per què
no resulti "false".
*/

const sunny = true;
const warm = true;

console.log(sunny == warm);

/*
15)
Practica tot el que has après!

Inventa 10 expressions que facin servir el que
has après fins ara.
  - Fer servir els següents data types: `string`, `number`, `boolean`, `undefined` i `null`.
  - Fer servir els següents operadors: (+) (-) (\*) (/) (%).
  - Fer servir les paraules clau: var, const, let.
  - Fer servir els operadors: (=) (+=) (-=) (*=)(++) (- -).
  - Fer servir els operadors: (>) (<) (>=) (<=) (== vs ===) (!==).
*/


//`string`, `number`, `boolean`

let nick1 = 10;
let nick2 = 15;
let nick3 = 20;
let nick4 = 25;

console.log(nick1 < nick4, nick3 < nick2, nick2 != nick1)
console.log(nick1 + nick4, nick3 - nick2, nick2 % nick1)

nick1 = 10;
nick2 = undefined;
nick3 = 20;
nick4 = null;


console.log(nic1 < nic4, nic3 < nic2, nic2 != nic1)



