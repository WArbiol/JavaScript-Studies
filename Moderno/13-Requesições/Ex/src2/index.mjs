import getSentries from "./sentry_service.mjs"
import Sentry from "./sentry.mjs"
import { async } from "regenerator-runtime"

async function getSentriesConsole(){
    let sentries = []
    const sJson = await getSentries()
    sJson.forEach( sentry => {
        sentries.push( 
            new Sentry(
                sentry["sentryId"], 
                sentry["fullname"], 
                sentry["year_range_min"], 
                sentry["year_range_max"]
            ))
    })
    //console.log(`Primeira Sentry: \n` +
    //            `   id: ${sJson[0]["sentryId"]}\n` +
    //            `   name: ${sJson[0]["fullname"]}\n` +
    //            `   minY: ${sJson[0]["year_range_min"]}\n` +
    //            `   MaxY: ${sJson[0]["year_range_max"]}`
    //)
    
    console.log(sentries)
}

getSentriesConsole()