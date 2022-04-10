class Battle extends Ship{
    constructor(name, nTrip, nWeapons){
        super(name, nTrip)
        this.type = "Battle"
        this.nWeapons = nWeapons
    }
}