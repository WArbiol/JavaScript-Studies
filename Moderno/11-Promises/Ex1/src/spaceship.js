export default class Spaceship {
    constructor(name, capac, carga){
        this.name = name
        this.capac = capac
        this.carga = carga
        }

    calcperc(){
        return this.carga*100/this.capac
    }
}