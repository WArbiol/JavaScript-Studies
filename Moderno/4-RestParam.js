/*rest param, restante dos paramentros
  MAS TEM QUE SER O ÚLTIMO PARAMETRO DA FUNÇÃO!!!
  Se não da pau! */
function greetCrewSemRest(message, names){
    names.forEach(name => console.log(`${message}, ${name}.`))
}

greetCrewSemRest("Seja bem vindo", ["Arthur", "Jake", "Melissa"])

console.log("-------------------------")
/* com rest param: */
function greetCrewOook(message, ...names){
    names.forEach(name => console.log(`${message}, ${name}.`))
    /* nos traz em forma de array: */
    console.log(names)
}

greetCrewOook("Seja bem vindo", "Arthur", "Jake", "Melissa", "Andre", "Joãozinho", "Zézones")

