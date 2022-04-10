export default class SpaceEngine {
    static start(ship) {
        SpaceEngine.check(ship).then(perc => 
            console.log(`(${ship.name}) Partida autorizada: carga atual em ${perc}%`)).catch(perc => 
                console.log(`(${ship.name}) Partida não autorizada: carga atual em ${perc}%`))
    }

    static check(ship) {
        return new Promise((resolve, reject) => {
            let perc = ship.calcperc()
            if (perc > 30){
                resolve(Math.round(perc))
            } else {
                reject(Math.round(perc))
            }
        })
    }
}