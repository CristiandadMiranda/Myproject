var articulos = [
    {nombre:"Tv", precio: 800},
    {nombre:"Bicicleta", precio: 400},
    {nombre:"Pc-gamer", precio: 3000},
    {nombre:"Sofa", precio: 300},
    {nombre:"Celular", precio: 1200},
    {nombre:"Moto", precio: 8000},
]

/* FILTER
Filter es un metodo que recorre el array y filtrando nuestro array crea uno nuevo 
con los elementos que necesitamos, nos sirve cuando tenemos que buscar elementos
con ciertas caracteristicas.
*/

var elementosFiltrados = articulos.filter(function(articulo){
    return articulo.precio <= 400 ;
});

console.log(elementosFiltrados);

/* MAP
El map nos ayuda al crear un array despues de mapear nuestro array y nos crea el nuevo 
solo con los elementos que necesitamos.
*/

var nombresElementos = articulos.map(function(elemento){
    return elemento.nombre;
});

console.log(nombresElementos);

/* FIND
Con find lo que hacemos es buscar un elemento no como filter que  pueden ser varios
con este metodo solo se puede un elemento y si le pido varios me va a mandar el
primero que encuentre y va adejar de recorrer el array
*/

var findElement = articulos.find(function(articulo){
    return articulo.nombre === "Sofa";
})

console.log(findElement);

/* FOR EACH
Con este metodo no vamos a crear un nuevo array a diferencia de los otros con este
metodo solo vamos a mostrar lo que necesitamos.
Y al no necesitar nuevo array su sintaxis es algo distinta.
*/

articulos.forEach(function(articulo){
    console.log(articulo.precio);
})

/* SOME
Some es un metodo que crea un nuevo array nos devuelve un true o false segun lo 
que le hayamos preguntado
*/

var articuloBaratos = articulos.some(function(articulo){
    return articulo.precio < 400;
});

console.log(articuloBaratos);

