let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
}
async function adjustPosition(x, y, z) {
    if(z > 90){ //Se z>90 entrega erro
        return Promise.reject(`z invalido, z = ${z} > 90.`)
    }
    laserGun.currentPosition = [x, y, z]
    return([x, y, z])
}

async function fire(x, y, z) {
    laserGun.firing = true
    return([x, y, z])
}

function loadAmmo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Arma carregada")
        }, 2000)
        resolve()
    })
}

async function moveAndFire(x, y, z) {
    try {
        const adjustPositionPromise = adjustPosition(x, y, z)
        const loadAmmoPromise = loadAmmo()
        //Executar de forma atomica (ou as duas dão certo ou da erro)
        let promiseResult = await Promise.all([
            adjustPositionPromise, 
            loadAmmoPromise
        ]) //usando o await não precisa usar o then
        console.log("AQUI NÃO ESTA INDO PRO TERMINAL")
        let newCoordinates = promiseResult[0]
        console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)
        let fireCoord = await fire(...newCoordinates)
        console.log(`Começando a atirar nas coordenadas (${fireCoord[0]}, ${fireCoord[1]}, ${fireCoord[2]})`)
    } catch(error) {
        console.log(error)
    }
}
moveAndFire(20, 40, 89)
