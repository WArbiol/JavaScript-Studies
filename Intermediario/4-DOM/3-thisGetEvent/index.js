/* MANEIRA QUE FUNCIONA:
function sayMyFirstName(){
    const element = document.getElementsByName("first-name")
    console.log(element[0].value)
}

function sayMyLastName(){
    const element = document.getElementsByName("last-name")
    console.log(element[0].value)
}
*/

/* OUTRA FORMA LEGAL:

let lista = ["", ""]

function sayMyFirstName(element){
    console.log(element.value)
    lista[0]=element.value

    if(lista[1]!=""){
        alert("O nome é:\n" + lista[0] + " " + lista[1])
    }
}

function sayMyLastName(element){
    console.log(element.value)
    lista[1]=element.value

    if(lista[0]!=""){
        alert("O nome é:\n" + lista[0] + " " + lista[1])
    }
}

*/

function sayMyFirstName(element){
    console.log(element.value)
}

//POR EVENTO, ÚLTIMO EVENTO
//.target PEGA O ELEMTO QUE VEIO A CHAMADA DO EVENTO
function sayMyLastName(){
    console.log(event.target.value)
}