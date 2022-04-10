let ships = ["Colossus", "Supernova", "Elemental", "Helmet"]
console.log(ships)

//.PUSH
ships.push("Supernova")
console.log(ships)

//.POP

let elementoRemovido = ships.pop() //sem nenhum paramentro remove o último
console.log(ships)
//A função pop retorna o elemnteo que foi removido
console.log(elementoRemovido)

//.SHIFT (REMOVE O PRIMEIRO ELEMENTO SEM PARAMETROS)

elementoRemovido = ships.shift()
console.log(ships)
console.log(elementoRemovido)

//.UNSHIFT (Faz o oposto, adiciona no inicio:)

ships.unshift("Fenix")
console.log(ships)

//.length

console.log(ships.length)

//.indexOf (a posição de um elemento)

let elementalPos = ships.indexOf("Elemental")
console.log("Posição indexada da elemental é " + elementalPos)

//Caso não existir retorna -1:

let goliasPos = ships.indexOf("Golias")
console.log("Posição indexada  da  golias é " + goliasPos)

//.join  creates and returns a new string by concatenating all of the elements in an array]
console.log("\nFicou na ships:")
console.log(ships.join());
console.log(ships.join(''));
console.log(ships.join(' - '));