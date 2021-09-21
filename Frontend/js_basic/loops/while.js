var students = ["Cristian1", "Cristian2", "Cristian3", "Cristian4"];

function greetStudents (students) {
    console.log("Hola estudiante " + students);
}

/* WHILE 
El while es muy similar al for a diferencia que este no va a realizar una acción 
como tal si no repetir el bloque de codigo dentro de las llaves mientras solo
un parametro se siga cumpliendo.
*/

while(students.length > 0){
    var student = students.shift();
    greetStudents(student); 
}