class App {
    constructor() {
        this.ship = null
    }

    start() {
        this.enrollShip()
        let chosenOption
        do{
            chosenOption = this.showInitialMenu()
            this.redirectFeature(chosenOption)
        } while(chosenOption != "3")
        this.printAndExit()
    }

    enrollShip() {
        let name = prompt("Nome da nave?")
        let crew = prompt("Qual a tripulação?")
        let type = this.askType()
        if( type == 1 ) {
            let nWeapons = prompt("Quantas armas a nave possui?")
            this.ship = new Battle(name, crew, nWeapons)
        } else {
            let sitsQuant = prompt("Quantas lugares a nave possui?")
            this.ship = new Transport(name, crew, sitsQuant)
        }
    }

    askType() {
        let chosenOption
        while(!["1", "2"].includes(chosenOption)){
            chosenOption = prompt("Qual o tipo da nave?\n1- Batalha\n2- Transporte")
        }
        return chosenOption
    }

    showInitialMenu() {
        let ress
        while(!["1", "2", "3"].includes(ress)){
            ress = prompt("Você deseja:\n" +
            "1- Acelerar a nave\n" +
            "2- Trocar a nave\n" +
            "3- Imprimir e sair\n"
            )
        }
        return ress
    }

    redirectFeature(option) {
        switch(option) {
            case "1":
                this.accelerateShip()
                break
            case "2":
                this.enrollShip()
                break
            case "3":

        }
    }

    accelerateShip() {
        let a = Number(prompt("Desaja acelerar a nave em quanto?"))
        this.ship.speedUp(a)
    }

    printAndExit() {
        let alerta = "Nome: " + this.ship.name +
                 "\nQuantidade de tripulantes: " + this.ship.nTrip +
                 "\nVelocidade atual: " + this.ship.v
        alert(alerta)
    }
}