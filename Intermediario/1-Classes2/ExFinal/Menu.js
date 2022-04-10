function Menu(){
    let ress = new String()
    do{
        ress = prompt("Você deseja:\n" +
        "1- Acelerar a nave\n" +
        "2- Trocar a nave\n" +
        "3- Imprimir e sair\n"
        )
    }while(ress != 1 && ress != 2 && ress != 3)
    return ress
}

function MenuTipo(){
    let ress = new String()
    do{
        ress = prompt("Qual tipo de nave voce deseja:\n" +
        "1- Transporte\n" +
        "2- Batalha"
        )
    }while(ress!="1" && ress!="2")
    
    return ress
}


function MenuNave(){
    tipo = MenuTipo()
    let newShip = new Ship()
    let nome = new String()
    let nTrip = new String()
    let nSites = new String()
    let nWeapons = new String()
    switch(tipo){
        case "1":
            nome = prompt("Qual o nome da nave?")
            nTrip = prompt("Qual o número de tripulantes da nave?")
            nSites = prompt("Qual o número de lugares que ela comporta?")
            newShip = new Transport(nome, nTrip, nSites)
            break
        case "2":
            nome = prompt("Qual o nome da nave?")
            nTrip = prompt("Qual o número de tripulantes da nave?")
            nWeapons = prompt("Qual o número de armas que ela tem disponível?")
            newShip = new Battle(nome, nTrip, nWeapons)
            break
    }
    return newShip
}
