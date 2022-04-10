let vel = 81;
console.log('\n');
switch(vel){
    case 40:
        console.log("- Sua velocidade é de 40km/h");
        break;
    case 80:
        console.log("- Sua velocidade é de 80km/h");
        break;
    case 100:
        console.log("- Sua velocidade é de 100km/h");
        break;
    default:
        console.log("- Sua velocidade não foi identificada");
}
//node Basico1/switch.js
let ship = "Enterprise"

switch(ship){
    case "Golias":
        console.log("- Nave mais resistente");
        break;
    case "Raptor":
        console.log("- Nave mais rápida");
        break;
    case "Enterprise":
        console.log("- Nave da frota estelar");
        break;
    default:
        console.log("- Sua nave não foi identificada");
}

console.log('\n');

/*A partir que le encontra o primeiro case ele 
executa todos os switchs até encontrar o break */

console.log("Agora escrevendo os numeros de x até 1 (10>=x>=1)")
let x = 8;
console.log("x == " + x)

switch(x){
    case 10:
        console.log("10");
    case 9:
        console.log("9");
    case 8:
        console.log("8");
    case 7:
        console.log("7");
    case 6:
        console.log("6");
    case 5:
        console.log("5");
    case 4:
        console.log("4");
    case 3:
        console.log("3");
    case 2:
        console.log("2");
    case 1:
        console.log("1");
    default:
        console.log("\n");
        break;
}