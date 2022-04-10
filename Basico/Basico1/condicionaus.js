let vel = prompt("Qual a velocidade?");

if(vel < 40) {
    alert("Vel baixa!");
}else{
    if(vel < 100) {
        alert("estamos em vel aceitavel");
    } else {
        alert("Entrando em vel de risco");
    }
}


(vel > 100) ? console.log("Vel maior que 100") : console.log("Vel menor que 100") 