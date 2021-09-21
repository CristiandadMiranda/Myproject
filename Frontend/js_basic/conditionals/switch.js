/* 
El switch tambien es una validacion de una condición pero esta en ves de basarse en
if y if else se hace mediante casos.
*/

var stone = "Piedra";
var scissor = "tijera";
var paper = "papel";

var user = stone;
var machine = scissor;

switch (user != machine) {

    case (user === machine):
        console.log("Empataste");
    break;

    case (user == stone && machine == scissor || user == scissor && machine == paper
    || user == paper && machine == stone):
        console.log("Ganaste");
    break;

    case (user == scissor && machine == stone || user == paper && machine == scissor
    || user == stone && machine == paper):
        console.log("Perdiste");
    break;

        default:
            console.log("Acción no valida");

        
}