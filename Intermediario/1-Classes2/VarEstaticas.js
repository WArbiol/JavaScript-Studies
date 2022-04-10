//São variaveis atreladas ao nome da classe
class Spaceship{  
    static get desaceleracao() {
        return 0.15
    } //Spaceship.desaceleração = 15
    constructor(theName, maxV){
        this.name = theName
        this.maxV = maxV
        this.v = 0
    } 

    speedUp(a){
        this.v += a - a*Spaceship.desaceleracao
        if(this.v > this.maxV){
            console.log("Velocidade da " + this.name + 
            " maior que " + this.maxV + ": "+this.v + 
            "m/s. Diminua a velocidade em pelo menos " + 
            (this.v - this.maxV) + "m/s")
        }else{
            console.log("Velocidade da " + this.name + 
            " é de " + this.v +  "m/s.")
        }
    }
}

let myShipe = new Spaceship("AeroNave", 200)
myShipe.speedUp(200)