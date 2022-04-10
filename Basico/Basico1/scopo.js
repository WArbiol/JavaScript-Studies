function setDetails() {
    let v = 50;
    if(v == 50){
        v = 60
        var name = "Elemental"
        let type = "Discovery"
    }
    console.log(v)
    console.log(name)
    console.log(type)
}
console.log(name + " Details:")
setDetails()

//printa 60, "Elemental" e não printa type
//porque type esta no escopo do if e não
//global ou da função
//E declarando com var, se declara no em 
//um escopo acima (mas nunca global)

function setDetails2(){
    console.log(name)
    console.log(type)
    var name = "Elemental"
    let type = "Discovery"
    console.log(name)
    console.log(type)
}

//mesmo que o var esteja na terceira linha da funcção,
//já de cara ele é declarado, entretando como undefined
//o let é na hora mesmo..