import fetch from "node-fetch"
export async function getNeo() {
    const response = await fetch("​https://api.nasa.gov/neo/rest/v1/neo/sentry?is_active=true&page=0&size=50&api_key=DEMO_KEY")
    const result = await response.json() //PORQUE PRECISA AWAIT??????convertendo a resposta para json
    return result["sentry_objects"]
}