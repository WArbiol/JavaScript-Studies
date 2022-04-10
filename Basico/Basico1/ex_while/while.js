let resposta = prompt(
`Deseja entrar em dobra espacial?
1- Sim
2- Não`
);

var dobras = 0;

if(resposta == "1"){dobras+=1;} 

while(resposta == "1"){
    resposta = prompt(
`Deseja realizar a próxima dobra?
1- Sim
2- Não`);
    if(resposta == "1"){dobras+=1;} 
}

switch(dobras){
    case 0:
        alert("Nenhuma dobra realizada!");
        break;
    case 1:
        alert("Apenas 1 dobra realizada.");
        break;
    default:
        alert(dobras + " dobras realizadas!");
}