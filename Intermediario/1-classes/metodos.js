class Spaceship{
    constructor(theName, type = "Descoberta"){
        this.name = theName
        this.type = type
        this.v = 0
    }
    //método:
    speedUp(a){
        this.v += a
    }
}

//instanciando a classe:

let artemis = new Spaceship("Artemis")
console.log(artemis)

artemis.speedUp(200)
artemis.speedUp( 20)
artemis.speedUp(  2)
console.log(artemis)