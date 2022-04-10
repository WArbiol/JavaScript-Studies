class Ship {
    static get slowdown(){
        return 0.17
    }
    constructor(name, nTrip){
        this.name = name
        this.nTrip =nTrip
        this.v = 0
    }
    speedUp(a){
        this.v += a*(1 - Ship.slowdown)
    }
}