/*
Await 
    -> palavra-chave DENTRO DE UMA ASYNC FUNCTION (TEM DE SER DENTRO DE ASYNC!!)
    -> Aguardar a execução de uma promise
    -> Faz com que a promise retorne o resolve
    -> Podesse eleimar o .then
    -> Com erros pode-se usar o tratamento de exceções
    -> NÃO RETORNA PROMISSE, RETORNA O RETORNOO S2
        -> Por isso não precisa do then
    ->Erros:
        -> Na async que pode dar erro usar o if e retonar a promise.reject
        -> Esse erro vira no catch do try e catch
        -> Dentro do try que esta o await e dentro do catch fica a mensagem de erro
*/
let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

async function adjustPosition(x, y, z) {
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

async function moveAndFire(x, y, z) {
    try {
        let newCoordinates = await adjustPosition(x, y, z)
        console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)
        let fireCoord = await fire(...newCoordinates)
        console.log(`Começando a atirar nas coordenadas (${fireCoord[0]}, ${fireCoord[1]}, ${fireCoord[2]})`)
    } catch(error) {
        console.log(error)
    }
}

moveAndFire(20, 40, 89)
