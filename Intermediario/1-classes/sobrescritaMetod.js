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

class TransportSpaceship extends Spaceship{
    speedUp() {
        console.log("Naves de transporte aumentam velocidade "+
                    "em apenas 1m/s, v = " + this.v + "m/s")
        this.v += 1
        
        if(this.v > this.maxV){
            console.log("Velocidade da " + this.name + " maior que " + 
            this.maxV + ": " + this.v + "m/s. Diminua a velocidade em pelo menos " + (this.v - this.maxV) + "m/s")
        }
    }
}
let transportShip = new TransportSpaceship("Transport", 4, 100)
for(let i=1; i<=101; i++){ transportShip.speedUp() }
