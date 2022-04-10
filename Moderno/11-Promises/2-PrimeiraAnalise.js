/*
Promises possuem 4 estágios:
1 - Pendente: Criada e ainda não executada
2 - Realizada: Sucesso na operação
3 - Recusada: Falha na operação (oposto da 
    realizada)
4 - Esabelecida: Criada e já realizada ou 
    recusada (oposto da Pendente)
*/

let ship = {
    v: 80,
    a: 10
}

//promise no construtor recebe uma função (anonima, ou não):
const vAfter2s = (v, a) => {
    new Promise(function(resolve, reject){

        setTimeout(() => {

            if (a > 0) {
                v += a*2
                console.log(`Velocidade após 2 segundos: ${v}`)
                resolve(v) 
            } else {
                console.log("Aceleração inválida")
                reject('Não possui aceleração válida')
            }
        
        }, 2000)

    })
}

vAfter2s(ship.v, ship.a)
console.log("Execução de promises")
console.log("Velocidade inicial: " + String(ship.v))