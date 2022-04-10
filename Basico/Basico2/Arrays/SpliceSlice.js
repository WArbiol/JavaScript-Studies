//SPLICE:
//Emendar ou costurar do inglês
//substitui array

let ships = ["Elemental", "Darwin", "Artemis", "Supernova"]
console.log(ships)
// Remover o segundo e o tereiro elemento e acrescentar outros 3 no lugar

//splice(apartir do elemento i , quantos elementos , os novos elementos)
let elementosExcluidos = ships.splice(1, 2, "Deméter", "Puller", "Golias")
console.log(ships)
console.log("Elementos excluidos: "+elementosExcluidos)

//Apenas para excluir no meio (apartir da terceira posicção e dois elemtentos):
console.log("Excluindos dois elementos a partir da terceira posição:")
ships.splice(2, 2)
console.log(ships)

//SLICE array.slice(begin, end) não inclui o end, mas inclui o end-1
console.log("\nAGORA SOBRE SLICE:\n")
ships = ["Elemental", "Darwin", "Artemis", "Supernova", "Deméter", "Puller", "Golias"]
let someShips = ships.slice(1, 3) //elementos de index 1 e 2
console.log(someShips)
