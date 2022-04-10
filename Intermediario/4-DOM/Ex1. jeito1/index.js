let i = 0
function addHouse(){
    i+=1
    let housesList = document.querySelector("div#houses")

    let newHouse  = document.createElement("div")
    newHouse.setAttribute("id", "house-" + i)


    let newHouseNumero = document.createElement("div")
    let newHouseNumeroLabel = document.createElement("label")
    let newHouseNumeroInput = document.createElement("input")

    let newHouseBairro = document.createElement("div")
    let newHouseBairroLabel = document.createElement("label")
    let newHouseBairroInput = document.createElement("input")

    let newHouseCidade = document.createElement("div")
    let newHouseCidadeLabel = document.createElement("label")
    let newHouseCidadeInput = document.createElement("input")

    let newHouseArea = document.createElement("div")
    let newHouseAreaLabel = document.createElement("label")
    let newHouseAreaInput = document.createElement("input")

    newHouse.setAttribute("id", "house-" + i)

    newHouseNumero.setAttribute("id", "number-"+ i)
    newHouseNumeroLabel.setAttribute("for", "number-" + i)
    newHouseNumeroLabel.innerText = "Número da Casa "+ i + ": "
    newHouseNumeroInput.setAttribute("id", "number-" + i)

    newHouseBairro.setAttribute("id", "district-"+ i)
    newHouseBairroLabel.setAttribute("for", "district-" + i)
    newHouseBairroLabel.innerText = "Bairro da Casa "+ i + ": "
    newHouseBairroInput.setAttribute("id", "districtr-" + i)

    newHouseCidade.setAttribute("id", "city-"+ i)
    newHouseCidadeLabel.setAttribute("for", "city-" + i)
    newHouseCidadeLabel.innerText = "Cidade da Casa "+ i + ": "
    newHouseCidadeInput.setAttribute("id", "city-" + i)

    newHouseArea.setAttribute("id", "area-"+ i)
    newHouseAreaLabel.setAttribute("for", "area-" + i)
    newHouseAreaLabel.innerText = "Área da Casa "+ i + ": "
    newHouseAreaInput.setAttribute("id", "area-" + i)


    newHouseNumero.appendChild(newHouseNumeroLabel)
    newHouseNumero.appendChild(newHouseNumeroInput)

    newHouseBairro.appendChild(newHouseBairroLabel)
    newHouseBairro.appendChild(newHouseBairroInput)

    newHouseCidade.appendChild(newHouseCidadeLabel)
    newHouseCidade.appendChild(newHouseCidadeInput)

    newHouseArea.appendChild(newHouseAreaLabel)
    newHouseArea.appendChild(newHouseAreaInput)


    let botaoRemov = document.createElement("button")
    botaoRemov.setAttribute("id", "button-"+i)
    botaoRemov.setAttribute("onclick", "removerCasa(this)")
    botaoRemov.innerText = "Remover Casa"

    newHouse.appendChild(newHouseNumero)
    newHouse.appendChild(newHouseBairro)
    newHouse.appendChild(newHouseCidade)
    newHouse.appendChild(newHouseArea)
    newHouse.appendChild(botaoRemov)
    newHouse.appendChild(document.createElement("br")) //Para pular linha
    newHouse.appendChild(document.createElement("br")) //Para pular linha

    housesList.appendChild(newHouse)
}

function removerCasa(button){
    button.parentNode.remove()
}