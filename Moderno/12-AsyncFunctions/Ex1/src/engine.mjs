export default class SpaceEngine {
    static async start(ship) {
        try {
            let [carga, escudoD] = await Promise.all([
                SpaceEngine.checkCharge(ship), 
                SpaceEngine.shieldDouble(ship)
            ])

            let escudoNormalizado = await SpaceEngine.shieldNorm(escudoD)
            
            console.log(
                `(${ship.name}) Partida autorizada:\n` + 
                `    Carga em ${carga}%\n` + 
                `    Escudo em ${escudoNormalizado}`
            )
    
        } catch(errors) {
            console.log(errors)
        }
    }

    static async checkCharge(ship) {
        let perc = ship.calcperc()
        if (perc > 30){
            return(Math.round(perc))
        } else {
            return Promise.reject(`(${ship.name}) Falha na bateria: ${Math.round(perc)}%`)
        }
    }

    static async shieldNorm(shield) {
        if(shield * 0.7 <= 120){
            return(shield * 0.7)
        } else {
            return Promise.reject(`(${ship.name}) Falha no teste de escudo (normalização): ${ship.shield} * 0.7 = ${ship.shield * 0.7}  > 120`)
        }
    }

    static async shieldDouble(ship){ 
        if(ship.shield * 2 >= 100){
           ship.shield = 2* ship.shield
           return(ship.shield)
        } else {
            return Promise.reject(`(${ship.name}) Falha no teste de escudo (dobra): 2*${ship.shield} = ${2*ship.shield} < 100`)
        }
    }
}