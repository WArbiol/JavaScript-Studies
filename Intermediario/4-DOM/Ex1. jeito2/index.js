let i = 1
function addHouse(){
    i+=1
    let housesList = document.querySelector("div#houses")

    let newHouse = housesList.children[0].cloneNode(true)
    newHouse.setAttribute("id", "house-"+i)

    newHouse.querySelector("div#number label").innerText = "Número da casa "+ i + ": "
    newHouse.querySelector("div#district label").innerText = "Bairro da casa "+ i + ": "
    newHouse.querySelector("div#city label").innerText = "Cidade da casa "+ i + ": "
    newHouse.querySelector("div#area label").innerText = "Area da casa "+ i + ": "

    newHouse.querySelector("div#number input").setAttribute("id", "number-"+ i) 
    newHouse.querySelector("div#district input").setAttribute("id", "district-"+ i) 
    newHouse.querySelector("div#city input").setAttribute("id", "city-"+ i) 
    newHouse.querySelector("div#area input").setAttribute("id", "area-"+ i) 

    newHouse.querySelector("div#number input").value = "" 
    newHouse.querySelector("div#district input").value = "" 
    newHouse.querySelector("div#city input").value = "" 
    newHouse.querySelector("div#area input").value = "" 

    console.log(newHouse)
    housesList.appendChild(newHouse)
}

function removerCasa(button){
    let houseIndex = button.getAttribute("id").split("-")[1]
    let house = document.querySelector("div#house-"+houseIndex)
    house.remove()
}