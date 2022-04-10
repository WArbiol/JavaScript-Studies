// High Order Functions (HOF)
// enviar ou recebe ou retornam outras funções
// enviar funções como parametros ou retorna-las
// geralmente anonimas, mas não necessáriamente
// A função enviada em uma HOF é chamada de callback

function doubleV(v, printer) { //printer é a função de imprimir
    console.log("\nEntrei em doubleVelocity");
    let newV = v * 2;
    printer(newV); //printer é o callback
    return newV;
}


let printV = v => {
    console.log("Nova velocidade: " + v + "km/h")
}

let newV = doubleV(60, printV)
console.log(newV)


//OU FAZER DIRETAMENTE:

let otherV = doubleV(60.5, (v) => console.log("Outra nova velocidade: " + v + "km/h"))
console.log(otherV)

//PODERIAMOS AINDA:

let anotherV = doubleV(61, function(v){console.log("Outra nova velocidade: " + v + "km/h")})
console.log(anotherV)