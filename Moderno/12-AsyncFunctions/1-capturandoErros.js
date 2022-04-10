let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

async function adjustPosition(x, y, z) {
    //se z>90 queremos que retorne um erro
    // RETURN PROMISSE.REJECT //
    if(z > 90){
        return Promise.reject(`z invalido, z = ${z} > 90.`)
    }
    laserGun.currentPosition = [x, y, z]
    return([x, y, z])
}

async function fire(x, y, z) {
    laserGun.firing = true
    return([x, y, z])
}

function moveAndFire(x, y, z) {
    adjustPosition(x, y, z).then(coord => {
        console.log(`Arma ajustada para as coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
        return fire(...coord)
    }).then(coord => {
        console.log(`Começando a atirar nas coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
    }).catch(error => {
        console.log(error)
    })
}

moveAndFire(20, 40, 91)
