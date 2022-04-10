class Spaceship{
    constructor(theName, maxCrew, maxV){
        this.name = theName
        this.maxCrew = maxCrew
        this.maxV = maxV
        this.v = 0
    }

    speedUp(a){
        this.v += a
        if(this.v > this.maxV){
            console.log("Velocidade da " + this.name + " maior que " + 
            this.maxV + ": "+this.v + ". Diminua a velocidade em pelo menos " + (this.v - this.maxV))
        }
    }
}

class BattleSpaceship extends Spaceship{
    stop(){
        this.v = 0
        console.log(this.name + " recolhendo armas de batalha")
    }
}

class DiscoverySpaceship extends Spaceship{
    stop(){
        this.v = 0
        console.log(this.name + " recolhendo equipamentos de amostras")
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenis", 8, 240)

darwin.speedUp(210)
fenix.speedUp(230)
darwin.stop()
fenix.stop()

//QUANDO DEFINIMOS UMA CLASSE
//ELA HERDA POR PADRÃO O TIPO
//OBJECT