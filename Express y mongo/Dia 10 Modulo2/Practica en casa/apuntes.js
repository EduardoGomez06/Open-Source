/*



TIPOS DE VARIABLES
STRING : todo contenido que va entrecomillas  "ejemplo de string"
NUMBER : 2; "NUMBER al final lo terminamos con punto i coma ";"
Boleano : "true" || (estas barras || <== significan or) false 
Casos especiales de datos : Undefined , Null , Nan.

Tenemos 3 formas de declarar  variables 
Var , let , const
var = es una variable para "toda la app o pagina web"

Let = let es la variable con menos alcanse 


const = Variable que  nunca va a cambiar.
ademas const  siempre se  tiene  que declarar  no puedes declar  la variable sin declararla,
*/
/*

Declarar variables 

Podemos declarar variables Var y Let sin asignarlas
La cariable CONST si o si tienemos que asignarla si no nos dara  error

podemos declarar 2 variables en la misma fila 

let numero = 23 , numero1 = 3 , numero2 (no hace falta poner "let" o "var" cada vez se sobrentiende, eso si hay que  poner "," para que entienda  que es otra  variable)

*/
let nombre = prompt("dime tu nombre") // el prompt pide  un valor y lo almacenara en la variable nombre

let numero = null //la declaramos aposta para que  no tenga ningun valor  
 frase = 'escribir texto en html para que aparezcan las ("") podemos escrbir  ambas  pero fijandonos con cual abrimos el string y con esa la ceramos'
/*
Hoisting: En java script se ejecuta de arriba-abajo (cuando )

let numero;                     let numero = 3

alert(numero);                  alert(numero)

numero = 3;
/*
nos dara errro                  funcionara

pero esto puede cambiar  cuando utilicemos funciones () "pero el codigo de la fnciones lo solemos dejar al final"

--------------------------------------------------------------
OPERADORES de asignacion

operadores de asignacion = "X=Y"      significado = " X + Y"

asignacion de adicion = "X += Y"        significado = "X = X + Y"

asignacion de sustraccion  = "X+=y"    significado ="X = X - Y"

asignacion de multiplicacion = "X -= Y"  significado ="X = X * Y"

asignacion de division =   "x/=Y"        significado = "X = X / Y"

asignacion de resto = "X %= Y"            significado = "x = X % Y"

asignacion de exponenciacion = "X **= Y"  SIGNIFICADO ="X =  X** Y"

Asignacion de desplacaimient = X >> Y     significado "x= x>>y "
a la derecha

Asignacion de desplacaimient = X << Y     significado "x= x>>y "
a la izquierda

  -------------------------------------------------

  Operadores de comparacion 

  Igualdad (==): devolvera "TRUE" si ambos operadores son iguales 

  3 == var1
  "3" == var1
  3 == "3"


  Desiguldad (!=): devuelve "TRUE" si ambos NO son iguales

  var1 != 4 
  var2 != "3"
  
  Estricatamente iguales (===) Devolvera true si ambas variables son exactametne iguales
  Teniendo en cuenta  el tipo (string o number,etc)
 
let num1 = 3

num1 === 3

Estrictamente desiaguales (!==) Te devolvera TRUE si los operadores  no son iguales o del mismo tipo

var1 !== "3"
3 !== "3"     En este caso nos devolveria true porque uno es  number  y otro "string"


Mayor que (>):Devolvera true si el operador de la izqueirda es mayor que el de la derecha

var2 > var1
12 > 2        Devolvera TRUE



Menor que (<):Devolvera true si el operador de la izqueirda es menor que el de la derecha
var3 < var4
3 < 20          Devolvera TRUE


Menos o igual que (<=): devolvera tu si el operador de la izquierda es menor o igual 

var5 <= var6
var6 <= 5

----------------------------------------------------------------

Operadores Logios

Operador AND (&&)shift + 6 : si las 2 condiciones se  cumplen te dara  true

num1 = 12;
num2 = 24;

afirmacion1= num1 < num2;
afirmacion2= num1 != num2;

Document.write(afirmacion1 && afirmacion2)

Operador OR (||):ALTGR + 1 =|: si UNA de las condiciones se cumple te dara TRUE 
num1 = 12;
num2 = 24;

afirmacion1= num1 < num2;
afirmacion2= num1 != num2;

Document.write(afirmacion1 || afirmacion2)
Not logic (!) =te devolvera  folse  si es  true y viceversa
  
  
  let valor = true
let valor1 = true;

let resultado = valor && valor1;

let resultado2 = valor || valor1;

let resultado3 = !valor;

document.write(resultado3)
  
  
  
  
  
  
  
  
  */
