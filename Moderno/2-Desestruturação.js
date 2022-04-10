let spaceShipe = {
    name: "Colossus",
    crew: 10,
    isHitched: false
}

let { name: spaceShipeName, crew: crewShip} = spaceShipe

console.log(spaceShipeName, crewShip)

//se usarmos variaveis com o mesmo nome das propriedades:

let { name, crew } = spaceShipe
console.log(name, crew)

/* Para Arrays: */
let shipsNames = ["Colossus", "Ártemis", "Fênix"]

let [nome1, nome2] = shipsNames
console.log(nome1, nome2)

let [nome1deNovo, nome2deNovo, nome3, nome4] = shipsNames
console.log(nome1deNovo, nome2deNovo, nome3, nome4)

function printNames([name1, name2, name3, name4]){
    console.log(name1, name2, name3, name4)
}
let nomes = ["Joãozinho", "Aninha", "Zézinho dessa Ladeira"]

printNames(nomes)