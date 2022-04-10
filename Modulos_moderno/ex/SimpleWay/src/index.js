const Planet = require('./planet.js')
const Converter = require("./converter.js")

planets = []
planets.push(
    new Planet("Terra", 1),
    new Planet("Mercurio", 0.39),
    new Planet("Venus", 10.72),
    new Planet("Marte", 1.52),
    new Planet("Júpiter", 5.2),
    new Planet("Sáturno", 9.53),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30)
)

text = ""
planets.forEach(planet => text+=`${planet.name} ` + (new Converter(planet.distance)).text())

alert(text)