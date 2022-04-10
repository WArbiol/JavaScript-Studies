export default class SpaceEngine {
    static start(ship) {
        Promise.all([SpaceEngine.check(ship), SpaceEngine.shieldDouble(ship)]).then(results => {
            SpaceEngine.shieldNorm(ship)
            return results[0]
        }).then(carga => { //Depois de resolver as promisses de carga e double shield ele fez o de normalize
            console.log(`(${ship.name}) Partida autorizada:\n` + 
            `    Carga em ${carga}%\n` + 
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
            SpaceEngine.shieldDouble(ship)
            if(ship.shield * 0.7 <= 120){
                ship.shield = ship.shield * 0.7
                resolve(ship.shield)
            } else {
                reject(`(${ship.name}) Falha no teste de escudo (normalização): ${ship.shield} * 0.7 = ${ship.shield * 0.7}  < 120`)
            }
        })
    }

    static shieldDouble(ship){ 
        return new Promise(((resolve, reject) =>  { 
             if(ship.shield * 2 >= 100){
                ship.shield = 2* ship.shield
                resolve(ship.shield)
             } else {
                 reject(`(${ship.name}) Falha no teste de escudo (dobra): 2*${ship.shield} = ${2*ship.shield}  < 100`)
             }
        }))
    }
}