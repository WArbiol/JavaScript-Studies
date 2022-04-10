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
        const newNeo = new Neo(neo["sentryId"], neo["fullname"], neo["year_range_min"], neo["year_range_max"])
        neos.push(newNeo)
    })
    //neos.sort( (a, b) => {
    //    if(a["minY"] < b["minY"]) return 1
    //    if(a["minY"] > b["minY"]) return -1
    //    return 0
    //} )
    console.log(neos)
    //renderNeos(neos)
}

loadNeos()

function renderNeos(neos) {
    const ulElement = document.getElementById("neos-list")
    neos.forEach(neo => {
        const liElement = document.createElement("li")
        const text = `${neo.id} | ${neo.name} | ${neo.minY} | ${neo.maxY}`
        liElement.innerText = text //POR SER "const" NÃO DEVERIA SER CONSANTE?
        ulElement.appendChild(liElement)
    })

}   