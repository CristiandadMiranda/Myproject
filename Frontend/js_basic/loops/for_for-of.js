/* LOOPS
Los loops son bloques de codigos que se van a iterar varias veces mientras 
ciertos parametros se cumplan
*/

/* FOR 
Mientras los parametros del for se cumplan los cuales estan dentro del parentesis
se va a seguir iterando el ciclo for */

var students = ["Cristian1", "Cristian2", "Cristian3", "Cristian4"];

function saludarStudents (students) {
    console.log("Hola estudiante " + students);
}

for (i=0; i < students.length; i++ ) {
    saludarStudents(students[i]);
}


/* FOR OF 
Aqui lo que hacemos es decir que vamos a realizar un array (student) que me va
a leer todos los valores incividualmente de students asi que mientras existan elementos
dentro de nuestro array original este ciclo se va a seguir iterando */

for(var student of students){
    saludarStudents(student);
}