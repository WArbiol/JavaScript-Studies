let ships = ["Supernova", "Elemental", "Helmet"]

console.log(ships[0])

let info = ["Colossus", 7, true]
 
console.log(info)

//função new array:

ships = new Array("Supernova", "Elemental", "Helmet", "Colossus")

console.log(ships)

//Olha só:

let numbers = new Array(5) //pensariamos que criaria um array com uma posição com o numero 5
//mas cria array com 5 undefined

console.log(numbers)

/* Usaremos new Array então apenas
para criar empty arrays */ 