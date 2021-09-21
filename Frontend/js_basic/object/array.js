/*
 Es una estructura de datos y un objero porque es un valor que va a guardar 
 otros bojetos adentros.

 accedemos a sus datos mediante la variable en la cual guardamos el array.

 cuando hablamos de arrays tambien hablamos de metodos con los cuales 
 podemos modificar nuestro(s) array(s).
*/

//METODOS

var Frutas = ["Manzana", "Banana", "Uva"];

console.log(Frutas[0]);/*Asi puedo pedir un valor individual dentro del 
array padre.*/

console.log(Frutas.length);/*De esta forma puedo ver cuantos datos estan 
guardados en mi array.*/

var masFrutas = Frutas.push("Uvas");/* Con el metodo push puedo agregar un 
elemonto al inicio del array.*/

var removeFrutas = Frutas.pop("Uvas");/* Con el metodo pop elimino el ultimo 
elemento de mi array */

var masFrutas = Frutas.unshift("Melón");/* Con el metodo unshift agrego un 
elemento al principio del array */

var removeFrutas = Frutas.shift("Melón");/* Con el metodo shift eliminas un 
elemento que este al principio del array */

var searchFruta = Frutas.indexOf("Uva");/* Con el metodo indexOf podemos 
buscar un elemento en el array cuando este sea muy extenso */
