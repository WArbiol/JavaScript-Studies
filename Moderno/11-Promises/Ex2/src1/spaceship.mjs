export default class Spaceship {
    constructor(name, capac, carga, shield){
        this.name = name
        this.capac = capac
        this.carga = carga
        this.shield = shield
        }

    calcperc(){
        return this.carga*100/this.capac
    }
}