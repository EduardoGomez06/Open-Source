// PRÁCTICA 3

// Creando una base de datos de Star Wars.
// 1.	Vamos a diseñar una base de datos de Star Wars con MongoDB, utilizando de guía de contenidos la página web https://starwars.fandom.com/es/wiki/Portada  

// 2.	Nos centraremos en la trilogía original. Crearemos una colección de Personajes que incluya los diez que aparecen en la página web. Los atributos que tendrán son los siguientes: 

// Nombre 
// Especie 
// Afiliación 
// Planeta Natal. 
// Nacimiento 

// 3.	La siguiente colección que haremos dentro de nuestra base de datos es de las películas. Incluiremos las tres de la trilogía. Incluirá: 
// Título
// Director 
// Año estreno 
// Presupuesto 
// Cronología 

 //Open mongod & mongo
 mongod
 mongo

db = db.getSiblingDB("Star_wars");
// 4.	Visualiza el resultado con Studio3T.  

// 5.	Ahora vamos a realizar varias consultas. 
db.getCollection("presonajes").find({});
db.personajes.find().pretty()
// a.	Busca todos los humanos. 
db.personajes.find({"especie":"Humano"}).pretty()

// b.	Busca todos los sith.  
db.personajes.find({afiliacion:/Sith/}). pretty()

// c.	Busca los nacidos en Tatooine.     
db.personajes.find({"planeta_natal":"Tatooine"}).pretty()  


// d.	Busca las películas cuyo director es George Lucas.
db.getCollection("Peliculas").find({});
db.Peliculas.find().pretty()
db.Peliculas.find({"Director":"George Lucas"}).pretty()



