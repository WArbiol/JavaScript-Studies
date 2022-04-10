const ships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let ships9 = ships.filter(element => element[1] > 9).map(element => element[0])       //retorna apenas os nomes
let plataformaPendente = ships.findIndex(element => !element[2]) + 1
let uppercaseShips = ships.map(element => element[0].toUpperCase())

alert(
    "Naves com mais de 9 tripulantes: " + ships9.join(", ") +
    "\n\nA plataforma com a primiera nave pendente é " + plataformaPendente +
    "\n\nOs nomes das naves em maisculo:\n" + uppercaseShips.join(", ")
)