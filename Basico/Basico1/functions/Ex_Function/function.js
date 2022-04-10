ship = prompt("Qual o nome da nave?")

v = 0

a = 5

function options(){
    option = prompt("Selecione uma opção:\n" +
                    "1- Acelerar a nave em 5km/h\n" +
                    "2- Desacelerar a nave em 5km/h\n" +
                    "3- Imprimir dados de bordo\n" +
                    "4- Sair do programa");
    return option;
}

function acao(option){
    switch(option){
        case "1":
            v+=a;
            break;
        case "2":
            v-=a;
            break;
        case "3":
            alert(ship + " em " + v + "m/s.")
            break;
    }
}

do{
    option = options()
    acao(option);
}while(option != 4);