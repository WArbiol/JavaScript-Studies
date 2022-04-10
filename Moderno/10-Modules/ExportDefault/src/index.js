import Ship from "./ship.js"
import armamentKind from "./armaments.js"

const spaceship = new Ship("USS Enterprise", "James Kirk", armamentKind.laser[0], armamentKind.explosion[1])
console.log(spaceship)


/*
npm install --save-dev webpack webpack-cli

npx webpack
cd dist
http-server -c-1

npm install --global http-server (não precisa mais)
*/