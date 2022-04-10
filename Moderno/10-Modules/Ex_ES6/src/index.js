import {Planet} from "./planet.js"
import operation from "./operations.js"

let planets = [
    new Planet("Mercúrio", 0.39),
    new Planet("Vênus", 0.72),
    new Planet("Terra", 1)
]

let text = ""

planets.forEach(planet => {
    let distance = operation.convert(planet.AU)
    text+=`De ${planet.name} para o Sol são ${Math.round(distance)}km\n`
})

alert(text)
/*
npm install --save-dev webpack webpack-cli

npx webpack
na dista dist:
http-server -c-1

npm install --global http-server (não precisa mais)
*/