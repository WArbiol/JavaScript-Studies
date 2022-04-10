nome = prompt("qual nome quer substitituir caracter?")
ci = prompt("Qual caracter deseja substituir?")
cf = prompt("Por qual caracter deseja substituir")
nomef=''

for(let i = 0; i < nome.length; i++){
    if(nome[i]==ci) {nomef+=cf;}
    else{nomef+=nome[i]}
}

alert("O nome ficou: " + nomef)