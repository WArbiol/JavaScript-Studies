export default class Ship {
    constructor(name, captain, armaments = [], defenses =[]) {
        this.name = name 
        this.captain = captain 
        this.armaments = armaments 
        this.defenses = defenses
    }
}
/*
class Ship {
    constructor(name, captain, armaments = [], defenses =[]) {
        this.name = name 
        this.captain = captain 
        this.armaments = armaments 
        this.defenses = defenses
    }
}

export default Ship
*/