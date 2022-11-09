
/*PAC 1. ENTREGAR VÍA SHAREPOINT.Un programaque te pregunta la temperatura que hace donde estás y te sugiere qué hacer dependiendo de ella. Las recomendaciones son:

a.Si hace más de 40 grados, vete a otro sitio.
b.Entre 30 y 40 grados, enciende el aire acondicionado.
c.Entre 30 y 20 grados, no hagas nada.
d.Entre 10 y 20 grados, enciende la calefacción.
e.Si hace menos de 10 grados, vete a otro sitio
*/

let temp = parseInt (prompt("que temperatura hace"));



if (temp >= 40) {
    alert("vete a otro sitio, te vas a asfixiar")
  } else if (temp < 40 && temp > 30) {
    alert("enciende el aire acondicionado");
  } else if (temp <= 30 && temp > 20) {
    alert("no hagas nada");
  } else if (temp <= 20 && temp > 10) {
      alert("enciende la calefacción, que mas da la el precio de la luz");
    } else if (temp <= 10) {
      alert("vete a otro sitio, te vas a resfriar");
    } 

