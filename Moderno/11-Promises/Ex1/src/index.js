import Ship from "./spaceship.js"
import Engine from "./engine.js"

Engine.start(new Ship("Sophia", 10, 5))
Engine.start(new Ship("Amsterdã", 14,  10))
Engine.start(new Ship("Estrela-Anã", 20, 4))
/*
let sophia = new Ship("Sophia", 10, 5)    
let amsterdã = new Ship("Amsterdã", 14,  10) 
let estrela = new Ship("Estrela-Anã", 20, 4)

new Engine(sophia).start()
new Engine(amsterdã).start()
new Engine(estrela).start()
/*
npm install --save-dev webpack webpack-cli

npx webpack
cd dist
http-server -c-1

npm install --global http-server (não precisa mais)
*/