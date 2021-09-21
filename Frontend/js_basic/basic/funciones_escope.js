//DECLARATIVAS 
function estudents(name) {
    return `Hola ${name}`;
}

//DE EXPRESION
var suma = function (a,b){
    return a + b;
}

//Su diferencia recae el hecho en que las funciones declarativas podemos llamarlas 
//en cualquier parte del codigo aun si no la hemos declarado (mala practica), en 
//cambio las de expresion solo las podemos llamar despues de su declaracion.

//ESCOPE

/* Es el alcance que tiene una variable en nuestro codigo

por ejemplo cuado :

var name = "cristian";

    function fullName (){
        var myLastname = "Miranda";

        return `hola ${name} ${myLastname}`;
    }

fullName();//cristian miranda

name;//cristian

myLastname;//undefined

El scope local puede acceder la local pero el global no puede acceder la local
como lo muestra el ejemplo.

 */