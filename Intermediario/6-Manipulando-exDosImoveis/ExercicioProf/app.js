class App {
    addProperty() {
        event.preventDefault()
        let type = document.querySelector("select[name='type']").value
        let area = document.querySelector("input#area").value
        let status = document.querySelector("input[name='status']:checked").value
        let property = new Property(type, area, status)
        this.addOnList(property)
        this.cleanForm()
    }
    addOnList(property){
        let newPropery  = document.createElement("li")
        let info = "Tipo: " + property.type + " (Área: " + property.area + "m2)"
        console.log(property.status)
        if(property.status == "Alugada"){
            let rentedMark = this.createMark()
            newPropery.appendChild(rentedMark)
        }
        newPropery.innerHTML += info
        let removeButton = this.createButton()
        newPropery.appendChild(removeButton)
        document.getElementById("properties").appendChild(newPropery)
    }

    createMark() {
        let mark = document.createElement("span")
        mark.innerText = "ALUGADO"
        mark.style.backgroundColor = "red"
        mark.style.color = "white"
        return mark
    }

    createButton() {
        let button = document.createElement("button")
        button.innerText = "Remover Imóvel"
        button.setAttribute("onclick", "app.removeProperty(this)")
        return button
    }

    removeProperty(element) {
        element.parentNode.remove()
    }

    cleanForm() {
        document.querySelector("input[id='area']").value=""
        document.querySelector("select[name='type']").value = false
        document.querySelector("input[name='status']").checked = false
    }
}


