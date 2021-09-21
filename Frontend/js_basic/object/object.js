/* OBJECTS
Un objeto en programación es una representación abstracta de un objeto 
en la vida real, sin embargo también puede entenderse como un contenedor de datos.
*/

var miAuto = {
    marca : "Marca1",
    modelo : "Modelo1",
    annio : "annio2",
    detailsCar : function(){ /* Estos son metodos por los cuales usando el this. 
    podemos algo asi como concatenar varios valores del objeto en este solo metodo
        
    (this. hace referencia al objeto global o padre en este caso es mi Auto)*/
        `Los detalles del auto son:
        marca: ${this.marca}
        modelo: ${this.modelo}
        annio: ${this.annio}`
    }
}

