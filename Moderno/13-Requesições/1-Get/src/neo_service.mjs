import fetch from "node-fetch";
export async function getNeo() {
    //fetch por definição retorna uma promisse
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    const result = await response.json() //PORQUE PRECISA AWAIT??????convertendo a resposta para json
    //console.log(result["near_earth_objects"])
    return result["near_earth_objects"]
    //const dogAPI = await fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all")
    //const dogJSON = await dogAPI.json()
    //console.log(dogJSON[0][["fact"]])
    //return dogJSON
}