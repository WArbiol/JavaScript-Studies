/*
function desacelarar(printer){
    printer(v)
    v-=20
    if(v < 0){
        v = 0
    }
}

let v = 150

do{
    desacelarar((v)=>console.log("Velocidade atual: "+v))
}while(v > 0)

console.log("A nave esta parada e as comportas podem ser abertas")
*/
function desacelarar(v, printer){
    while(v > 0){
        printer(v)
        v-=20
    }
    alert("A nave esta parada e as comportas podem ser abertas")
}

desacelarar(150, (v)=>console.log("Velocidade atual: "+v))