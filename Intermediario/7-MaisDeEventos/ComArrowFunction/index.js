testingArrow = {
    name: "ITA",
    normalFunction: function() {
        console.log(this.name)
    },
    arrowFunction: () => {
        console.log(this.name)
    }
}

testingArrow.arrowFunction() //da "undefined"

/*
Arrow function segue a lógica de onde ela é 
chamada, assim não está definido this.name 
fora do objeto.

Já normal function segue a lógica de onde ela
foi definida
*/