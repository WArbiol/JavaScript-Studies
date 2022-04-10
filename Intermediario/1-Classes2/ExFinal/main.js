let ship = MenuNave()
let ress = new String()
do{
    ress = Menu()
    switch(ress){
        case "1":
            let a = prompt("Qual a aceleração desejada?")
            ship.speedUp(a)
            break

        case "2":
            ship = MenuNave()
            break

        case "3":
            let alerta = new String()
            alerta += ("Nome: " + ship.name +
            "\nQuantidade de tripulantes: " + ship.nTrip +
            "\nVelocidade atual: " + ship.v)
            if(ship.type == "Transport"){
                alerta += ("\nTipo da nave: Transporte"  +
                    "\nNumero de lugares para transporte: " + ship.nSites)
            }else{
                alerta += ("\nTipo da nave: Batalha" +
                "\nNumero de armas que ela tem disponível: " + ship.nWeapons)
            }
            alert(alerta)
    }
}while(ress != 3)