let shipsNames = ["Colossus", "Ártemis", "Fênix"]

 /*    spread representado como "..."     */
/* expande como elemento1, elemento2, ...*/

console.log("Sem spread:", shipsNames)
console.log("Com spread:", ...shipsNames)

//quase como push só que mais direto:
let moreNames = [...shipsNames, "Puller"]
console.log("Mais nomes:", ...moreNames)

function speedUp (v, a){ return v + a }

acceleration = [60, 10]

console.log(`Vfinal = ${speedUp(...acceleration)}`)