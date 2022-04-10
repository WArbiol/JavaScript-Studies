import Ship from "./spaceship.mjs"
import Engine from "./engine.mjs"

let sophia = new Ship("Sophia", 10, 5, 70)
let amsterda = new Ship("Amsterdã", 14,  10, 40)
let estrela = new Ship("Estrela-Anã", 20, 4, 80)

let sophiaEngine = new Engine(sophia)
let amsterdaEngine = new Engine(amsterda)
let estrelaEngine = new Engine(estrela)

sophiaEngine.start()
amsterdaEngine.start()
estrelaEngine.start()