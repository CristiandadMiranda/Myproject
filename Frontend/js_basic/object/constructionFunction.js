/* Una forma de crear objetos de manera mas automatizada y eficiente es usando
funciones constructoras */

/* CONSTRUCTION FUNCTION */
function auto (marca, modelo, year) {
    this.modelo = modelo;
    this.marca = marca;
    this.year = year;
}

var cars = [];

var auto1 = new auto("modelo1", "marca1", "year1");/* Con new podemos hacer 
iterar nuestra funcion constructora lo cual hace que creemos un nuevo objeto */

/* EXCERCISE
Realizaremos de forma mas automatica el añadir autos */

for (let i = 0; i < 30; i++) {

    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var year = prompt("Ingresa el año del auto"); 

    cars.push(auto(modelo, marca,year));
    
}

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}