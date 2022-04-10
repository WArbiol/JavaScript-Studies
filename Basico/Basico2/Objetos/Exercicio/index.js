let nome = prompt("Nome da nave: ")
let tipo = prompt("Tipo da nave: ")
let vmax = prompt("Velocidade máxima da nave: ")
function desejofunc(){
    let desej = prompt("Deseja: \n1-Acelerar\n2-Parar")
    while(desej != 1 && desej != 2){
        desej = prompt("Informe 1 ou 2: \n1-Acelerar\n2-Parar")
    }
    return desej
}
let desejo = desejofunc()

ship = {
    name: nome,
    type: tipo,
    max: vmax,
    v: 0,
    acelerate: function(a){ this.v+=Number(a) }
}




while(desejo == 1){
    a = prompt("Em quanto deseja acelerar?")
    ship.acelerate(a)
    if(ship.v > vmax){
        alert("Cuidado, velocidade acima da permitida ("+ship.max+"): "+ship.v)
    }
    desejo = desejofunc()
}

alert(
    "Nave " + ship.name + " do tipo " + ship.type +
    " está em " + ship.v + " e iniciará pouso."
)