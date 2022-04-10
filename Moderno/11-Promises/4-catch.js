//se ress manda para o then
//o  reject  manda para o catch
//o then e o catch é tipo o try e catch
let ship = {
    v: 80,
    a: -1 //-1, caíra no reject
}

//promise no construtor recebe uma função (anonima, ou não):
const vAfter2s = (v, a) => {
    //É PRECISO RETORNAR A FUNÇÃO!!
    return new Promise(function(ress, reject){

        setTimeout(() => {

            if (a > 0) {
                v += a*2
                //console.log(`Velocidade após 2 segundos: ${v}`)
                ress(v) //O VALOR QUE SE PASSA PARA O ress ELE PASSA PARA O THEN
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
}).catch(message => console.log("Erro: " + message))
console.log("Execução de promises")
console.log("Velocidade inicial: " + String(ship.v)) 