class Transport extends Ship{
    constructor(name, nTrip, nSites){
        super(name, nTrip)
        this.type = "Transport"
        this.nSites = nSites
    }
}