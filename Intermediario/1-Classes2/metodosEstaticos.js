//É uma função (método) que se pode chamar
//mesmo sem instaciar o objeto, mesmo sem criar um objeto
//E NÃO SE CHAMA DIRETO DO OBJETO


class Processadora {
    constructor(name, porMes) {
        this.name=name
        this.porMes=porMes
    }

    static processadoPorXHoras(porMes, hours) {
        return porMes / (30*24) * hours
    }
}

let totalProcessado12h = Processadora.processadoPorXHoras(3000, 12)
console.log("\nO total processado em 12h foi " + totalProcessado12h + " toneladas.\n")