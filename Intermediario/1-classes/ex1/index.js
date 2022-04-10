class ship {
    constructor(name, nTrip){
        this.name = name
        this.n = nTrip
        this.engatada = false
        this.portasAbertas = false
    }
    engatar(){
        this.engatada = true
        this.portasAbertas = true
    }
}

ships = []
alertText = new String()
let resposta

do{
    resposta = prompt(
"Deseja:\n"+
"1- Realizar engate\n"+  
"2- Imprimir as naves\n"+  
"3- Sair do programa"  
    )
    switch(resposta){
        case "1":
            let name = prompt("Qual o nome da nave:")
            let nTrip = prompt("Quantos tripulantes tem a nave?")
            ships.push(new  ship(name, nTrip))
            ships[ships.length - 1].engatar()
            break
        case "2":
            ships.map(element => {
                if(element.engatada == true && element.portasAbertas == true){
                    alertText += (element.name + " com " + element.n +
                        " tripulantes, engatada e portas abertas\n")
                }
            })
            alert(alertText)
            break
    }
}while(resposta != 3)