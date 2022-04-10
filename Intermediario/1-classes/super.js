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
            console.log("Velocidade da " + this.name + 
            " maior que " + this.maxV + ": "+this.v + 
            "m/s. Diminua a velocidade em pelo menos " + 
            (this.v - this.maxV) + "m/s")
        }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(theName, maxCrew, maxV, maxLoad){
        //SUPER CHAMA O CONSTRUTOR HERDADO!
        super(theName, maxCrew, maxV)
        this.maxLoad = maxLoad
    }

    speedUp(a){
        a /= 2
        console.log("Incrementando a velocidade em " + a + 
        "m/s")
        //AQUI O SUPER CHAMANDO METODOS:
        super.speedUp(a)
    }
}

let transportShip = new TransportSpaceship("Transport", 4, 100)

transportShip.speedUp(220)







class Spaceship {

    constructor(name, maxCrew, maxRecommendedVelocity) {
   
     this.name = name
   
     this.maxCrew = maxCrew
   
     this.maxRecommendedVelocity = maxRecommendedVelocity
   
     this.velocity = 0
   
    }
   
      
   
    calculateVelocity(acceleration) {
   
     this.velocity + acceleration
   
    }
   
   }
   
   
   
   
   
   class TransportSpaceship extends Spaceship {
   
   constructor(name, maxCrew, maxRecommendedVelocity) {
   
     super(name, maxCrew, maxRecommendedVelocity)
   
    }
   
      
   
    speedUp(acceleration) {
   
     this.velocity = this.calculateVelocity(acceleration)
   
    }
   
     
   
    calculateVelocity(acceleration) {
   
     let newVelocity = ________
   
     return newVelocity
   
    }
   
   }