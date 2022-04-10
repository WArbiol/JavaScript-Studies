//Listas em objeto:
let ship = {
    name: "Fox",
    type: "Batalha",
    crew: ["José de Alencar", "Ana Julia", "Michael Jackson"]
}

ship.crew.push("Manuel Bandeira")

console.log(ship)
console.log(ship.crew[3])

//Objetos em lista
let ships =[
    { name: "Elemental", crewQuant: 10},
    { name: "Colossus", crewQuant: 8},
    { name: "Helmet", crewQuant: 15}
]

console.log(ships)
console.log(ships[0].name)

ships.forEach(ship => console.log(
    ship.name + " tem " + ship.crewQuant + " tripulantes")
)

//Objetos em objetos:

let newShip = {
    name: "Golias",
    maxcrew: 10,
    captain: {
        name: "Minalba Agua Mineral",
        age: 31
    }
}

console.log(newShip.captain.name)