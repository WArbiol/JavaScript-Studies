let i = 0
function enroll(){
    event.preventDefault()
    i+=1
    let housesList = document.querySelector("div#houses")

    let newHouse  = document.createElement("div")
    newHouse.setAttribute("id", "house-" + i)


    let newHouseType   = document.createElement("p")
    let type = document.querySelector("select[name='type']").value
    let newHouseArea   = document.createElement("p")
    let area = document.querySelector("input#area").value
    let newHouseStatus = document.createElement("p")
    let status = document.querySelector("input[name='status']:checked").value

    newHouseType.setAttribute("id", "type-"+ i)
    newHouseType.innerText = "Tipo do imóvel "+ i + ": " + type

    newHouseArea.setAttribute("id", "area-"+ i)
    newHouseArea.innerText = "Área do imóvel "+ i + ": " + area

    newHouseStatus.setAttribute("id", "status-"+ i)
    if(status == "Desalugada"){
        newHouseStatus.innerText = "Desalugado"
    }else{
        newHouseStatus.innerText = "ALUGADO"
        newHouseStatus.style.backgroundColor = "red"
        newHouseStatus.style.color = "white"
    }
    let botaoRemov = document.createElement("button")
    botaoRemov.setAttribute("id", "button-"+i)
    botaoRemov.setAttribute("onclick", "removeHouse(this)")
    botaoRemov.innerText = "Remover Imóvel"

    let newHouseObject = new Imovel(type, area, status)

    newHouse.appendChild(newHouseStatus)
    newHouse.appendChild(newHouseType)
    newHouse.appendChild(newHouseArea)
    newHouse.appendChild(botaoRemov)
    newHouse.appendChild(document.createElement("br")) //Para pular linha
    newHouse.appendChild(document.createElement("br")) //Para pular linha

    housesList.appendChild(newHouse)
}

function removeHouse(button){
    button.parentNode.remove()
}