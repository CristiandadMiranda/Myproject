/*var edad = 18;
var usuario = 17;

if (usuario > edad) {
     console.log("Puedes votar ");
} else if (usuario < edad) {
    console.log("No puedes votar");
} else {
    console.log("Datos no concluyentes");
}*/

condition ? true : false;
//forma sencilla de una condicional.

//EXCERCISE

var stone = "Piedra";
var scissor = "tijera";
var paper = "papel";

var user = stone;
var machine = scissor;

var resultado = function (user,machine) {
    if (user != machine) {
        if (user === stone && machine === scissor){
            console.log("ganaste");
        } else if (user === scissor && machine === paper) {
            console.log("ganaste");
        } else if (user === paper && machine === stone) {
            console.log("ganaste");
        } else {
            console.log("Perdiste");
        }
    } else {
        console.log("empataste");
    }
}

console.log(resultado(user, machine));