/*------------------
1)
Crea un "array" anomenat "numbers" i inclou
els números del zero al cinc.

El següent console.log comprova que
el teu codi sigui correcte.
------------------*/

/*let numbers = [0, 1, 2, 3, 4, 5.];
console.log(estudiantes[3]);
numbers[1]=10

// el teu codi aquí

/*------------------
2)
Imprimeix l'edat de la Sofia a la consola.
------------------*/


/*const friends = ["Pedro", "school", 30, "Sofia", "work", 38]
console.log("sofia tiene ... " + friends[5] + " años");

/*------------------
3)
"Tuesday" està en el lloc equivocat.
Extreu-lo fent servir el mètode .splice
i torna a afegir-lo al seu lloc fent servir
novament el mètode .splice.

Pista: quan facis aquesta operació no hauries
de tornar a picar "Tuesday". El pots desar a
una variable quan l'extreguis i així afegir-lo
novament des de la variable.
------------------*/

/*const weekDays = ["Sunday", "Tuesday", "Monday", "Wednesday"];

weekDays.splice(1,1);
weekDays.splice(2, 0, "Tuesday");

console.log(weekDays);



/*------------------
4)
Afegeix la resta de dies de la setmana a l'array "weekDays"
fent servir el mètode .push.
------------------*/

/*weekDays.push("thursday")

console.log(weekDays);


/*------------------
5)
Imprimeix tots els elements de l'array "weekDays"
com a "string" amb cadascun dels elements separats
amb una coma.

Pista: Per fer-ho hauràs de fer servir un mètode
que encara no coneixem. Esbrina-ho amb una cerca
a Internet com "create comma separated string from
array javascript". NO FACIS SERVIR LOOPS.
------------------*/

const listOfWeekDays = ["sunday","tuesday","Monday","wednesday"];

console.log(`The days in the week are ${listOfWeekDays}.`);

const listOfWeekDays = week.toString();


/*------------------
6)
Canvia l'array per què comenci per "Monday"
i acabi amb "Sunday". Per fer-ho, fes servir
dos mètodes de la següent llista:
.push
.pop
.shift
.unshift

Pista: quan eliminis "Sunday" del principi
de l'array, assigna'l a una variable per no
haver-lo de picar un altre cop.
NO FACIS SERVIR LOOPS.
------------------*/


const listOfWeekDays = ["sunday","tuesday","Monday","wednesday"];

listOfWeekDays.splice(1,1);
listOfWeekDays.splice(3, 0, "Tuesday");

console.log(listOfWeekDays);

listOfWeekDays.shift("sunday")
listOfWeekDays.push("thursday", "friday",  "sathurday", "sunday")




/*------------------
7)
Ara, fent servir algun dels mètodes
de la pregunta anterior, crea un nou array 
amb l'ordre dels elements invertit.

Pista: esbrina com fer una còpia de l'array "weekDays".
Després, fes servir algun dels mètodes que hem après
per eliminar elements de la còpia i afegeix-los a
"reversedWeekDays". NO FACIS SERVIR LOOPS.
------------------*/

/*const weekDays  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const myCopy = weekDays
//let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(weekDays) //array original
console.log(myCopy) //array copia de weekDays
let myCopy1 = weekDays.shift("Sunday")
console.log(myCopy) //array copia sense el sunday
let weekDaysInvested = ["Saturday","Friday", "Thursday", "Wednesday", "Tuesday", "Monday", "Sunday"];
console.log(weekDaysInvested)//array invertida (normal)
myCopy1 = weekDaysInvested.push("Sunday")
console.log(weekDaysInvested) //
array invertida + Sunday 
"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
console.log("Pregunta #7 ", weekDaysInvested[6] === "Lunes" ? "es correcto" : "es incorrecto");


//reversedWeekDays = WeekDays.reverse()


/*------------------
8)
Anem a repetir el mateix. Aquesta vegada, inverteix
l'ordre de "writtenNumbers" - però fes-ho en UNA sola
línia de codi.

Pista: existeix un mètode per invertit els elements
d'un array. Fes una cerca a Internet o explora la
documentació MDN per esbrinar-ho.
------------------*/

const writtenNumbers = ["one", "two", "three", "four", "five"];

/*------------------
9)
Extreu cada element de l'inici de l'array "num",
multiplica'l per 7 i afegeix-lo a l'array
"numTimesSeven". NO FACIS SERVIR LOOPS.
------------------*/

const num = [1, 2, 3];

const numTimesSeven = [];

// console.log("Question #9 ", num.length === 0 && numTimesSeven[1] === 14 ? "is correct." : "is incorrect.");

/*------------------
10)
Comprova si la id "1x3v6umb0i9p" existeix dins
l'array "listOfIDs". Pots fer-ho en una sola línia
de codi (assigna la resposta "true" o "false" a una
variable anomenada "includesID")

Pista: pots esbrinar com fer-ho fàcilment a la
documentació MDN - o inclou "ES6" a la teva cerca a
Internet (el mètode d'array per a aquest exercici
va ser afegit en versions recents de JavaScript).
------------------*/

// const listOfIDs = ["1x31irevblzm", "1x3wznfkvkov", "1x3x9s82j3go", "1x3of9nx54kk", "1x3jqe3jmhre", "1x3r0cai8s3b", "1x3j687gtvh9", "1x3q9mtup3vd", "1x3tfs237azl", "1x3w5de6iw8x", "1x36yim09v32", "1x3jxnv2o1fa", "1x31erunsrgz", "1x3u8p6k9dzb", "1x35hav9qdwq", "1x3dgvjrjtst", "1x3qhvzf10cv", "1x3lbhfb5xrp", "1x3kogvzbda7", "1x3dbpw3h8cc", "1x3z1zqtzk5w", "1x3o3sp1ngii", "1x367bviy1hp", "1x3d52x8jwvm", "1x36j7e79d9i", "1x3vmccrc4b6", "1x3jji9iqwuq", "1x37ddh7st7v", "1x33ywwl8mih", "1x33jagi36k2", "1x3eyiin802x", "1x304vrzymap", "1x3tlbecxpu4", "1x3b1bwgyrry", "1x35r0iyqz77", "1x30n9uuqgyk", "1x33cybkioeq", "1x3qgywv1pux", "1x3s2ordohci", "1x38oyqc006h", "1x3sysj3ww2q", "1x3bp13ddk35", "1x3awsoimdlb", "1x3wv3wpzqlg", "1x3k2e2j409g", "1x3j4d0f461s", "1x3r2mxhh2bq", "1x37lv6wzc9z", "1x3pjpzmt1wl", "1x3gxle96pxn", "1x374m6eygc9", "1x37x7pt1hk9", "1x3v3vev0o13", "1x39l4kt4j59", "1x35ensw5w0p", "1x30608784ic", "1x3v752xl3jf", "1x3v6umb0i9p", "1x3tw0clitve", "1x3a5l11tp4t", "1x34rap4j837", "1x3rih3to6vb", "1x3pcyktai2m", "1x35didmxlsk", "1x3n4w7iexkz", "1x3x4lpybvob", "1x3f2gev8iyb", "1x3ej7ol6nnk", "1x3vvjfrsqm1", "1x3lg1a87is2", "1x3ttgy57mb9", "1x3d0mcx5p8u", "1x3pbwlh9ctw", "1x340wsd87qj", "1x3hm9qwdk99", "1x317dqa5zeu", "1x35f2jutupe", "1x3savd9you1", "1x3j8w48vik9", "1x3ifbp1qw0b", "1x3xr587wcmd", "1x3nklesqedo", "1x3k74k8akkh", "1x34cvkuc9uh", "1x39svc04ns0", "1x38pp43vbse", "1x30882m8i3q", "1x3hgr2bm5r3", "1x3jkmtlf6rg", "1x3n1alvxms1", "1x39hlgfq9hl", "1x3fexwb5ss3", "1x3po4d4ra1h", "1x3d8nc0xxjn", "1x3rgloaon5h", "1x3w90ezibm6", "1x3oy70uoi19", "1x3ea2b4gnbd", "1x3um89s3wha", "1x3qb4bqt2cl"];

// console.log("Question #10 ", includesID ? "is correct." : "is incorrect.");

/*------------------
11)
Imprimeix a la consola la darrera ID de la
llista de IDs. Per fer-ho, hauràs de saber
l'index en què es troba l'última ID.
Pots fer això amb un càlcul que inclogui
la llargada de l'array.

Pista: com sempre, si no estàs segura...
fes una cerca a internet :)
------------------*/

// let lastID = el teu codi aquí

// console.log("Question #11 ", listOfIDs.length === 100 && lastID === "1x3qb4bqt2cl" ? "is correct." : "is incorrect.");
