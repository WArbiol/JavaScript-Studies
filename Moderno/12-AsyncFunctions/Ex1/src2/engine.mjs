export default class SpaceEngine {
    constructor(ship){
        this.ship = ship
    }

    async start() {
        try {
            let [carga, escudoD] = await Promise.all([
                this.checkCharge(this.ship), 
                this.shieldDouble(this.ship)
            ])
            
            let escudoNormalizado = await this.shieldNorm(escudoD)
            
            console.log(
                `(${this.ship.name}) Partida autorizada:\n` + 
                `    Carga em ${carga}%\n` + 
                `    Escudo em ${escudoNormalizado}`
            )
    
        } catch(errors) {
            console.log(errors)
        }
    }

    async checkCharge(ship) {
        let perc = ship.calcperc()
        if (perc > 30){
            return(Math.round(perc))
        } else {
            return Promise.reject(`(${ship.name}) Falha na bateria: ${Math.round(perc)}%`)
        }
    }

    async shieldNorm(shield) {
        if(shield * 0.7 <= 120){
            return(shield * 0.7)
        } else {
            return Promise.reject(`(${ship.name}) Falha no teste de escudo (normalização): ${ship.shield} * 0.7 = ${ship.shield * 0.7}  > 120`)
        }
    }

    async shieldDouble(ship){ 
        if(ship.shield * 2 >= 100){
           ship.shield = 2* ship.shield
           return(ship.shield)
        } else {
            return Promise.reject(`(${ship.name}) Falha no teste de escudo (dobra): 2*${ship.shield} = ${2*ship.shield} < 100`)
        }
    }
}