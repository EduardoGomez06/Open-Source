/*
1)
Crea una funció anomenada "triple" que rebi
un paràmetre, "x", i que retorni el valor
de "x" multiplicat per tres.
et number1 =parseInt(prompt("dime un numero"));
let triple = 3;



if (number1 * triple) {
  alert("este es tu resultado" + " " + (number1 * triple));
}​​​​​​​​
/*
2)
Crea una funció anomenada "subtract" que
rebi dos paràmetres i que retorni el resultat
de la resta del primer menys el segon.
*/
let num1 = parseInt(prompt("dime un numero"));
let num2 = parseInt(prompt("dime otro numero"));

console.log("sustraccion"+ " " + (num1 - num2))
alert("sustraccion"+ " " + (num1 - num2))


/*
3)
Crea una funció anomenada "createArray" que
rebi tres arguments i retorni tots tres
arguments dins un array.

Test case:
console.log(createArray(3, "a", true)); // [3, "a", true]
*/

/*
4)
Crea una funció anomenada "greetPerson" que rebi
un string com a argument i retorni aquest mateix
string dins una frase de salutació.
Si la funció rep un argument que no és un string,
la funció ha de retornar "Please provide a name."

Test cases:
console.log(greetPerson("Sofia")); // "Hello, Sofia!"
console.log(greetPerson(42)); // "Please provide a name."
*/

/*
5)
Crea una funció anomenada "addTogether" que rebi un array
de números com a argument i que retorni la suma de tots
els números.

Test case:
console.log(addTogether([1, 2, 3, 4, 5])); // 15
*/

/*
6)
Crea una funció anomenada "getIndex". Ha de rebre dos
arguments: un array i un valor. La funció ha de retornar
l'índex en què es troba el valor donat. Si el valor no
es troba a l'array, ha de retornar -1.

NO facis servir el mètode d'arrays indexOf a la teva resposta.
Pista: crea un loop!

Test cases:
console.log(getIndex([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(getIndex([1, 2, 3, 4, 5, 6], 7)); // -1
*/

/*
7)
Crea una funció anomenada "includesValue". Ha de retornar
un boolean si "x" (un valor) es troba a "arr" (un array).

Per fer aquest exercici fes servir la funció "getIndex"
que has creat a la pregunta anterior. Crida la funció
"getIndex" des de dins de la funció "includesValue".

Test cases:
console.log(includesValue([1, 2, 3, 4, 5, 6], 4)); // true
console.log(includesValue([1, 2, 3, 4, 5, 6], 7)); // false
*/

/*
8) Nested Objects
Crea una funció anomenada "createObject" que rebi un array
com a argument. Ha de retornar un objecte que classifiqui
els valors de l'array per data type.
Fes servir la variable "result" que et proporcionem a
continuació per construir l'objecte a retornar.

let result = {
  numbers: [],
  booleans: [],
  strings: []
}

Test case:
console.log(createObject([3, "a", true, false, 2, true])); // { numbers: [3, 2], booleans: [true, false, true], strings: ["a"] }
*/

/*
9)
Crea una funció anomenada "removeSpaces" que elimini tots
els espais d'un string.

Test case:
console.log(removeSpaces("He went to the store.")); // "Hewenttothestore"
*/

/*
10)
Crea una funció anomenada "titleCase" que rebi un string
com a argument. La funció ha de retornar el string però
amb la primera lletra de cada paraula en majúscula.
No cal que et preocupis de la primera lletra de la frase -
pots assumir que ja és majúscula.

Pista: l'índex de cada lletra que hem de passar a majúscula
és 1 valor més gran que l'índex dels espais del teu string.

Test case:
console.log(titleCase("He went to the store.")); // "He Went To The Store"
*/
