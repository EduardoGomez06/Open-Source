/*------------------
1)
En el loop següent, arregla la'expressió de
dins del "do while" per què la consola
s'imprimeixin els números del 0 al 10.
------------------*/
let count = 0;

do {
  console.log(count);
  count++;
}
while (count <= 10);


/*------------------
2)
Crea un loop que compti de 0 fins a 100.

------------------*/


do {
  console.log(count);
  count++;
}
while (count <= 100);



/*------------------
3)
Crea un loop que compti de 100 fins a 0.
------------------*/
let i = 100;

while(i>=0){
 console.log("contando..." + i);
i--;{



/*------------------
4)
Afegeix un console.log dins el loop següent
per què imprimeixi els números de zero a quatre.
------------------*/

const start = 5;
let end = 0;

while (start > end) {
    console.log("dando una vuelta, concretamente es la vuelta nº... " + end);
    end++;
}


/*5)
Afegeix una expressió JavaScript dins el ${}
que imprimeixi la diferència entre la capacitat
i el nombre de persones.
------------------*/

const people = 1;
const capacity = 12;

for (let people = 1; people <= capacity; people++) {
console.log(`There is room for ${people} more guests in the building${capacity}`);
}



/*------------------
6)
Imprimeix tots els números PARELLS entre 0 i 50.
Afegeix un comptador d'iteracions i imprimeix-los
a un console.log al final.*/

do {
  console.log(count);
  count+=2;
}
while (count <= 50);






/*------------------
7)
Ara, crea un loop "for" que imprimeixi a la consola
TOTS els números entre 0 i 50.

Afegeix un "if/else" al cos del loop. Si el número (x)
és parell, imprimeix `The number ${x} is even`. Si el
número és senar, imprimeix `The number ${x} is odd`.
------------------*/


/*------------------
8)
Anem a provar una cosa nova.
Per seleccionar un caràcter dins un "string" fem
servir ".charAt()" i insertem dins el parèntesi
el número del caràcter al què volem accedir.
Per exemple:

"Sofia".charAt(0) és "S"
"Sofia".charAt(2) és "f"

El mètode ".toUpperCase()" converteix una lletra
en majúscula.

Fes UN canvi en el codi següent per què s'imprimeixi
la frase inicial però alternant majúscules i minúscules.

------------------*/

const sentence = "i am shouting";
const numberOfChars = 12;
let result = "";
let i = 0;

while (i <= numberOfChars) {
let letter = sentence.charAt(i);
if (i % 2 === 0) {
letter = letter.toUpperCase();
}
/*if ( letter === " "){
  continue;
}*/
result += letter;
i++;
}

console.log(result);


/*------------------
9)
Escriu un programa que faci servir console.log
per imprimir tots els números de l'1 al 100.

Ara, per tots els números divisibles per 3,
imprimeix "Fizz" en comptes del número.
Per als números divisibles per 5,
imprimeix "Buzz" en comptes del número.
Per als números divisibles tant per 3 com per 5,
imprimeix "FizzBuzz" en comptes del número.

Aquesta és una pregunta típica d'entrevista.
Bona sort!
------------------*/



/*------------------
10)
Crea el triangle de sota escrivint un bucle
que crida cinc cops el console.log.

*
**
***
****
*****
------------------*/

