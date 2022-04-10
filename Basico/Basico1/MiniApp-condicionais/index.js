let dataparti = prompt("Qual a data de partida? (DD/MM/YYYY)");

let dataok = moment(dataparti, "DD/MM/YYYY");

let today = moment();

let datediff = dataok - today;

let opcao = prompt(`Como gostaria de exibir o tempo de partida?
1- Segundos \n2- Minutos\n3- horas\n 4- dias"`);

if(opcao == 1) {
    let segundos = Math.round(datediff / 1000);
    alert("Tempo de vôo: " + segundos + " segundos");
} else if(opcao == 2) {
    let minutos = Math.round(datediff / 1000 / 60);
    alert("Tempo de vôo: " + minutos + " minutos");
}else if(opcao == 3) {
    let horas = Math.round(datediff / 1000 / 60 / 60);
    alert("Tempo de vôo: " + horas + " horas");
}else if(opcao == 4) {
    let dias = Math.round(datediff / 1000 / 60 / 60 / 24);
    alert("Tempo de vôo: " + dias + " dias");
}