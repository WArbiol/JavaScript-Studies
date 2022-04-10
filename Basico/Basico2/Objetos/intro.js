/*Assim como arrays armaazenam dados
Ao invés de ser por indice é por propriedade
criação de array: []
Criação de objeto: {}
*/

let ship = {
    name: "Fenix",
    quantity: 7,
    type: "Batalha"
}
console.log(ship)
console.log(ship["name"] + " " + ship.quantity + " tripulantes")

//Add propriedade:

ship.isHitched = false
ship["shieldLevel"] = 100

console.log("Estar engatada é " + ship["isHitched"] + " e seu escudo esta em " + ship.shieldLevel +"%")

//Obs.: podemos criar objetos vazios:
let novoObjetoVazio = new Object
let outroObjetoVazio = {}

//PARAMETROS BIZULEUS:
let objetoDiferente = {
    name: "Fox",
    quant: 10,
    "seu apelido": "Estelar",
    true: false,
    2: "Descoberta"
}
//tanto "seu apelido" e 2 só podem ser acessados a partir
//de objeto["..."] e não de objeto.prop (porque um tem 
//espaço e outro é um numero)
//Então não é tão legal usar assim rsrs