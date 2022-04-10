let i=1
function addElement(){
    i+=1
    var novaDiv = document.createElement("div")
    var conteudo = document.createTextNode("Texto Dinâmico")
    novaDiv.appendChild(conteudo)
    novaDiv.setAttribute("id", "div"+i)

    novaDiv.setAttribute("onmouseover", "removeAll(this)")
    

    var divAnterior = document.getElementById("div" + (i-1))
    document.body.insertBefore(novaDiv, divAnterior)
}

function removeAll(element){
    if(element.getAttribute("id").split("v")[1] == i && i > 2){
        element.remove()
        i-=1
    }
}

function removeElement(){
    if(i != 1){
        var element = document.querySelector("div#div"+i)
        element.remove()
        i-=1
    }
}