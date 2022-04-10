import "core-js"
import "regenerator-runtime"
import Neo from "./neo.js"
import { getNeo } from "./neo_service.js"
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
    renderNeos(neos)
}

loadNeos()

function renderNeos(neos) {
    const ulElement = document.getElementById("neos-list")
    neos.forEach(neo => {
        const liElement = document.createElement("li")
        const isSentry = neo.isSentry ? "Perigo de Colisão!" : "Sem perigo de colisão"
        const text = `${neo.id} | ${neo.name} | ${Math.round(neo.averageEstimatedDiameter)}m | ${isSentry}`
        liElement.innerText = text //POR SER "const" NÃO DEVERIA SER CONSANTE?
        ulElement.appendChild(liElement)
    })

}   