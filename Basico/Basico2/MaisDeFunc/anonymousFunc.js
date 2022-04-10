console.log(speedUp(99, 1))
/* Se colocarmos:
console.log(doublespeed(40))
dara erro, porque apenas funções tradicionais 
são compiladas antes.
Declarando função em variavel elas seguem a regra
das variaveis
*/

let doublespeed = function(v){
    return v * 2
}

function speedUp(v, a){
    return v+a
}

let newV = doublespeed(40)

console.log(newV)