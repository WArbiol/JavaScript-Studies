let ship = {
    v: 80,
    a: 10
}

//promise no construtor recebe uma função (anonima, ou não):
const vAfter2s = (v, a) => {
    //É PRECISO RETORNAR A FUNÇÃO!!
    return new Promise(function(resolve, reject){

        setTimeout(() => {

            if (a > 0) {
                v += a*2
                //console.log(`Velocidade após 2 segundos: ${v}`)
                resolve(v) //O VALOR QUE SE PASSA PARA O RESOLVE ELE PASSA PARA O THEN
            } else {
                console.log("Aceleração inválida")
                reject('Não possui aceleração válida')
            }
        
        }, 2000)

    })
}
//THEN TAMBÉM RECEBE UMA FUNÇÃO ANONIMA
vAfter2s(ship.v, ship.a).then(vel => {
    ship.v = vel
    console.log(`Depois de acelerar: ${ship.v}`)
})
console.log("Execução de promises")
console.log("Velocidade inicial: " + String(ship.v))