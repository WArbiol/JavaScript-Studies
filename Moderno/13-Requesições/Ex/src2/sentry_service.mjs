import fetch from "node-fetch"
export default async function getSentries(){
    const data = await fetch("https://api.nasa.gov/neo/rest/v1/neo/sentry?is_active=true&page=0&size=50&api_key=DEMO_KEY")
    const sentriesjson = await data.json()
    return sentriesjson["sentry_objects"]
}