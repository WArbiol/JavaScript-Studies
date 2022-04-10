/*
Funções síncronas: executa uma instrução após a 
anterior ter sido executada

Função assíncrona: não aguarda o fim da anterior para executar
*/

/*
setTimeout é assincrona:
*/

console.log("Passo 1")
setTimeout(()=>console.log("Passo 2"), 1000) //não aguarda o fim da execução
console.log("Passo 3")