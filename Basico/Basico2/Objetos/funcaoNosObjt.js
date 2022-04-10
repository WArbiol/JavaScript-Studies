let ship = {
    name: "Golias", //CHAMAREMOS ESSES PARAMETROS DE *ATRIBUTOS*
    type: "Extração",
    maxcrew: 20,
    turnOn: () =>{ //CHAMAREMOS ESSA FUNÇÃO DE *MÉTODO*
        console.log("Preparando propulsão")
        console.log("Ligando computador de bordo")
    }
}

ship.velocity = 0
ship.speedUp = (shipToSpeedUp, a) => shipToSpeedUp.velocity += a

console.log(ship)

ship.speedUp(ship, 10)
console.log(ship)

//PERCEBEU COMO FICA MACARRONICO A FUNÇÃO sppedUp 
//por chamr o mesmo objeto dentro do objeto
//temos um método para conscertar isso: this

ship.speedUp = function(a){this.velocity += a}
//ship.speedUp = (a) => this.velocity += a
/* ARROW FUNCTIONS DON'T HAVE ARGUMENTS OBJETC -> DON'T SUPPORTS THIS. */

ship.speedUp(20)
console.log(ship)