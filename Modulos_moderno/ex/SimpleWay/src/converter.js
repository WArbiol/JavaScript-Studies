class Converter {
    static oneAUtoKm(){ 
        return 149587870
    }

    constructor(AU){
        this.AU = Number(AU)
        this.km = this.converting(AU)
        this.info = "Multiplicar cada AU por 149587870"
    }

    converting(AU) {
        return AU*this.oneAUtoKm
    }

    text() {
        return `over ${Math.round(this.AU*149587870, -1)}km of Sun (${this.AU}).\n`
    }
}

module.exports =  Converter