//import "core-js"
//import "regenerator-runtime"
import Neo from "./neo.mjs"
import { getNeo } from "./neo_service.mjs"
//npm install core-js@3 regenerator-runtime 
// npm install node-fetch

async function loadNeos() {
    let neos = []
    let neoJSON = await getNeo()    
    neoJSON.forEach(neo => {
        const minDiameter= neo["estimated_diameter"]["meters"]["estimated_diameter_min"]
        const maxDiameter= neo["estimated_diameter"]["meters"]["estimated_diameter_max"]
        const avgDiameter= (minDiameter+maxDiameter)/2
        const newNeo = new Neo(neo["id"], neo["name_limited"], avgDiameter, neo["is_potentially_hazardous_asteroid"])
        neos.push(newNeo)
    })
    console.log(neos)
    
}

loadNeos() //NÃO PRECISA DO AWAIT AQUI PORQUE NÃO TEM RETORNO?

/*
async function dogFact() {
    let fact = await getNeo()
}

await dogFact()
*/