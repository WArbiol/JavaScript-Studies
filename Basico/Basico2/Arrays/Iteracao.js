//As funções de iteração são HOF -> enviamos callback
//Callback para cada elemento do array
/* 
array.funcaoDeIterar(funnction(elementoAtual, indice, array){
    <corpo da função>
})
*/

let ships = ["Elemental", "Darwin", "Supernova", "Fenix", "Puller"]
//.forEach percorre o array e pra cada elemento chama a função
ships.forEach(function(currentNave, indexDela){
    console.log("Nome: " + currentNave + ", index:" + indexDela)
})
//.map percorre o array e altera os elementos (pelo retorno callBack) sem alterar o array original

let upcasedShips = ships.map(function(currentNave, indexDela){
    let upcased = currentNave.toUpperCase() //Retorna tudo maiusculo
    return upcased
})
console.log(upcasedShips)

//.filter retorna o booleano para saber se o elemto passou no filter ou não, se sim adiciona

let with7orMore = ships.filter(element => element.length >= 7) //poderiamos escrever  => {return element.length >= 7})
console.log("Com 7 o mais caracteres: " + with7orMore)

//.find retorna o elemto em si, não o elemto dentro de um arary, logo retorna só um:

let firstWith7orMore = ships.find(element => element.length >= 7)
console.log("Primeiro com 7 o mais caracteres: " + firstWith7orMore)

//.findIndex igual só que retorna o index