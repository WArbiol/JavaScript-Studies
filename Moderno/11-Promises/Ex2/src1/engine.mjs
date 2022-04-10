export default class SpaceEngine {
    static start(ship) {
        Promise.all([SpaceEngine.check(ship), SpaceEngine.shieldNorm(ship)]).then(results => {
            ship.shield = results[1]
            console.log(`(${ship.name}) Partida autorizada:\n` + 
            `    Carga em ${results[0]}%\n` + 
            `    Escudo em ${ship.shield}`)
        }).catch(messages => console.log(messages))
    }

    static check(ship) {
        return new Promise((resolve, reject) => {
            let perc = ship.calcperc()
            if (perc > 30){
                resolve(Math.round(perc))
            } else {
                reject(`(${ship.name}) Falha na bateria: ${Math.round(perc)}%`)
            }
        })
    }

    static shieldNorm(ship) {
        return new Promise((resolve, reject) => {
            ship.shield =  SpaceEngine.shieldTest(ship.shield)
            if(ship.shield >= 100 && ship.shield * 0.7 <= 120){
                ship.shield = ship.shield * 0.7
                resolve(ship.shield)
            } else {
                reject(`(${ship.name}) Falha no teste de escudo: ${ship.shield}`)
            }
        })
    }

    static shieldTest(shield){ 
        return 2*shield 
    }
}