let timeoutId = setTimeout( ()=>{
    console.log("Escrevendo após 2 segundos")
}, 2000)
//clearTimeout(timeoutId) para não executar

for(let i = 2; i>0; i--){
    setTimeout( ()=>{
        console.log("Aqui escreve tudo junto de uma vez e antes")
    }, 1000)
}

//setTimeout é o tempo desde o início da compilação

let s = 0 
let intervaltId = setInterval( ()=>{
    console.log("Executando a cada 3 segundos")
    s+=3
    if(s>=9) clearInterval(intervaltId)
}, 3000) 

