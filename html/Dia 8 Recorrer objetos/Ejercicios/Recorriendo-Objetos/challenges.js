/*------------------
1)
El següent loop imprimeix les keys de l'objecte "person".
Modifica'l per què n'imprimeixi els valors. 
------------------*/
const person = {
  name: "Sofia",
  age: 30,
  location: "Barcelona",
  hairColor: "brown",
  coder: true,
};

for (let features in person) {
  console.log(features);
}

/*------------------
2)
Escriu un loop que imprimeixi tots els valors
de "pet": ("Spot", 2, "dog", "brown").
------------------*/

const pet = {
  name: "Spot",
  age: 2,
  animal: "dog",
  color: "brown",
};


for (let key in pet) {
  console.log(key + " ")
  console.log(pet[key]);
}
/*------------------
3)
Afegeix un mínim de QUATRE propietats (features)
a l'objecte "car".

Després crea un loop que imprimeixi els valors
de l'objecte "car" a la consola.
------------------*/

const car = {
  modelo: 2013,
  motor: 295,
  llantas: 18,
  Seguro: "en vigor",
}


for (let key in car) {
  console.log(key + " ")
  console.log(car[key]);
}

/*------------------
4)
Ara imprimirem totes les propietats (features) de 
l'objecte "car" de l'exercici anterior en  UN sol string
en comptes de cadascun per separat.
Fes servir un loop per afegir cada valor a
l'string "carFeatures". 

Bonus #1: afegeix una coma entre cada feature per
què el resultat sembli una frase real.

Bonus #2: assegura't de què cada feature està separada
per una coma però que la frase acabi amb un ".".
Per exemple: 'white, citroen, c1, 2016.'

Pista - Al Bonus #2 hauràs de comprovar si el loop
es troba a l'última key i, si és així, tractar-la
diferent de com ho hem fet al Bonus #1.
------------------*/

const car = {
  modelo: 2013,
  motor: 295,
  color: "gris",
  Seguro: "en vigor",
}

let features = ". "

if("seguro" === x);


for (let key in car) {
  console.log(key + " ")
  console.log(car[key] + ", " + x);
}

// el teu loop aquí

console.log(carFeatures);

/*------------------
5)
Crea un loop que afegeixi cada valor de l'objecte "address"
a l'string de "fullAddress".

Hauria d'imprimir: "Carrer de França, 55, Barcelona, Spain."
Les comes i els punts són bonus, així que també està bé:
"Carrer de França, 55, Barcelona Spain."
------------------*/

const address = {
  line1: "Carrer de França",
  line2: 55,
  city: "Barcelona",
  country: "Spain",
};

let fullAddress = "";


// el teu codi aquí

console.log(fullAddress);

/*------------------
6)
Escriu un loop que actualitzi tots els valors de l'objecte "address"
que siguin strings a majúscules.

El resultat hauria de ser: "CARRER DE FRANÇA 55 BARCELONA SPAIN".

FES SERVIR UN LOOP, és més senzill fer-ho sense un loop, però
la pràctica et farà millorar!

Pista: fes servir "typeof" per determinar si el valor és un string
i fes servir ".toUpperCase()" per commutar tot un string a majúscules.
------------------*/

/*------------------
7)
Escriu un loop que afegeixi un any a les edats de totes les persones.
Hauria d'imprimir: {
  pedro: 31,
  sofia: 39,
  mia: 41,
  lucy: 28,
}
------------------*/

const friendsAges = {
  pedro: 30,
  sofia: 38,
  mia: 40,
  lucy: 27,
};

console.log(friendsAges);

/*------------------
8)
Ara farem el mateix però aquest cop hauràs d'accedir
a la key "age" de cada objecte. 

Ja hem començat l'exercici per tu.
Pista: fes servir "typeof" per determinar si una key
és un número. Si ho és, incrementa el seu valor per 1.
------------------*/

const groupOfFriends = {
  a: {
    name: "Pedro",
    relationship: "school",
    age: 30,
  },
  b: {
    name: "Sofia",
    relationship: "work",
    age: 38,
  },
  c: {
    name: "Mia",
    relationship: "school",
    age: 40,
  },
  d: {
    name: "Lucy",
    relationship: "work",
    age: 27,
  },
};

for (let friend in groupOfFriends) {
  for (let features in groupOfFriends[friend]) {
    console.log(groupOfFriends[friend][features]);
  }
}

/*------------------
9)
Quines són les amistats de la feina i quines les de l'escola?
Crea un loop que introdueixi els noms a l'string corresponent.
------------------*/

let workFriends = "";
let schoolFriends = "";

console.log(
  `The person's work friends are ${workFriends} and school friends are ${schoolFriends}.`
);

/*------------------
10)
Recorre l'objecte "chores" i afegeix cada tasca de la llar (chore)
a l'string del dia corresponent.
Quan hagis acabat, imprimeix "mondayChores" i "wednesdayChores"
a la consola.

Procura que la frase imprimida sigui el més natural possible.
Per exemple: "Monday's chores are: tidying, vacuuming, bills."
------------------*/

let chores = {
  tidying: "Monday",
  vaccuuming: "Monday",
  dishes: "Wednesday",
  laundry: "Wednesday",
  bills: "Monday",
};

let mondayChores = "";
let wednesdayChores = "";
