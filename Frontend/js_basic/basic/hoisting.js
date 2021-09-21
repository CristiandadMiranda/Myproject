
42
/*¿Qué es Hoisting?
En JavaScript, las declaraciones (por ejemplo, de variables o funciones) se mueven al
principio de su scope o ámbito. Este comportamiento se conoce como hoisting y es 
muy importante tenerlo en cuenta a la hora de programar para prevenir posibles errores.

Las funciones siempre se mueven arriba del scope. Por lo tanto, 
podemos elegir donde declararlas y usarlas.

La declaración de las variables se mueven arriba del scope, 
pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla.

pero esto solo sucede con versiones anteriores de ecmascript 5, por la llegada de las 
variables let y const

*/
var students;

console.log(students);

students = "Cristian"; // cristian

//Esto es muy diferete a el siguiente ejemplo donde si se produce le hoisting

console.log(students);

var students = "Cristian";// students undefined

//por debajo el motor de js hace lo siguiente

var students = undefined;
console.log(students); //students undefined
students = "Cristian"// muy tarde por que ya se mostro el valor undefined.


//COERCIÓN  

/*Coerción es la forma en la que podemos cambiar un tipo de valor a otro, 
existen dos tipos de coerción: Coerción implícita = es cuando el lenguaje
nos ayuda a cambiar el tipo de valor.Coerción explicita = es cuando 
obligamos a que cambie el tipo de valor.
*/

