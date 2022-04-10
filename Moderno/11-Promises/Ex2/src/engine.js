export default class SpaceEngine {
    static start(ship) {
        Promise.all([
            SpaceEngine.checkCharge(ship), 
            SpaceEngine.shieldDouble(ship)
        ]).then(([carga, escudoD]) => {
            
            SpaceEngine.shieldNorm(escudoD)
                .then(escudoNormalizado => {
                    console.log(
                        `(${ship.name}) Partida autorizada:\n` + 
                        `    Carga em ${carga}%\n` + 
                        `    Escudo em ${escudoNormalizado}`
                    )
                })

        }).catch(messages => console.log(messages))
    }

    static checkCharge(ship) {
        return new Promise((resolve, reject) => {
            let perc = ship.calcperc()
            if (perc > 30){
                resolve(Math.round(perc))
            } else {
                reject(`(${ship.name}) Falha na bateria: ${Math.round(perc)}%`)
            }
        })
    }

    static shieldNorm(shield) {
        return new Promise((resolve, reject) => {
            if(shield * 0.7 <= 120){
                resolve(shield * 0.7)
            } else {
                reject(`(${ship.name}) Falha no teste de escudo (normalização): ${ship.shield} * 0.7 = ${ship.shield * 0.7}  > 120`)
            }
        })
    }

    static shieldDouble(ship){ 
        return new Promise(((resolve, reject) =>  { 
             if(ship.shield * 2 >= 100){
                ship.shield = 2* ship.shield
                resolve(ship.shield)
             } else {
                 reject(`(${ship.name}) Falha no teste de escudo (dobra): 2*${ship.shield} = ${2*ship.shield} < 100`)
             }
        }))
    }
}