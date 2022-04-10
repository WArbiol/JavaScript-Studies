//POO: Programação Orientada a Objetos
//class:
class ship {

}

let myship = new ship()

console.log(myship)

//Array e os objetos que estudamos até agora são
//internos à classe
//forEach, filter, findIndex são métodos da classe
//fazer let myArray = [] é equivalemnte a 
//let myArray = new Array()
//string, number, boolean, etc também tem suas 
//classes associadas 

//MÉTODO CONTRUTOR
class SpacialStation{
    constructor(name, quantity){
        this.name = name
        this.quantity = quantity
    }
}

let observatory = new SpacialStation("Observatório", 40)
console.log(observatory)

class Spaceship{
    constructor(theName, type = "Descoberta"){
        this.name = theName
        this.type = type
    }
}

let darwin = new Spaceship("Darwin")
console.log(darwin)