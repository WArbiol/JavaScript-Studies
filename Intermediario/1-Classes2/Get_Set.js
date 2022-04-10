//set blabla:
//cria um método com notação de 
//variavel, com condições ou ações
//"Quando setar "blabla" faça isso:

//É uma função de um parametro que é chamada como
//uma variavel

class Ship { //SET SÓ TEM UM PARAMETRO
    constructor(name){
        this.name = name
        this.v = 0
    }
    set velocity(newV){
        if(newV > 130){
            this.v = 130
        }else{
            this.v = newV
        }
    }
}

let myship = new Ship("AeroNave")
myship.velocity = 1000
console.log(myship)

//GET:
//É uma variavel "escondida, só aparece quando chamada"
//E que fica atualizada, porque ela roda um metodo para 
//defini-la
class Processadora{
    constructor(name, porMes){
        this.name=name
        this.porMes=porMes
    }

    get porSemana(){
        return this.porMes/4
    }
}

let minhaProcessadora = new Processadora("Gaia", 1000)
console.log(minhaProcessadora.porSemana)
console.log("minhaProcessadora.porMes = 1200")
minhaProcessadora.porMes = 1200
console.log("Agora o minhaProcessadora.porSemana = " + minhaProcessadora.porSemana)