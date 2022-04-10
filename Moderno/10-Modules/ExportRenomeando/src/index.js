import Ship from "./ship.js"
import armamentKind from "./armaments.js"
//tem que ter o MESMO NOME E PODE NÃO CHAMAR O QUE NÃO PRECISA
import { laser } from "./defensesNomeado.js" 
import basicDefense from "./defensesNomeado.js"

const spaceship = new Ship("USS Enterprise", "James Kirk", armamentKind.laser, laser)
console.log(spaceship)
const spaceship2= new Ship("Nave Básica", "Astronauta", [], basicDefense)
console.log(spaceship2)


/*
npm install --save-dev webpack webpack-cli

npx webpack
cd dist
http-server -c-1

npm install --global http-server (não precisa mais)
*/