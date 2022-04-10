class App {
    enrollProperty() {
        event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='status']").checked
        let newProperty = new Property(kind, area, rented)
        this.addToList(newProperty)
        this.cleanForm()
    }

    addToList(newProperty){
        let list = document.querySelector("ul#properties")
        let propertItem = document.createElement("li")
        let info = newProperty.kind + " (Área: " + newProperty.area + "m2)"
        if(newProperty.rented){
            let mark = this.setMark()
            propertItem.appendChild(mark)
        }
        let button = this.removeButton()
        propertItem.innerHTML += info //if dont worl .innerHTM += info
        propertItem.appendChild(button)
        list.appendChild(propertItem)
    }

    setMark() {
        let mark = document.createElement("span")
        mark.innerText = "ALUGADO"
        mark.style.color= "white"
        mark.style.backgroundColor = "red"
        return mark
    }

    removeButton() {
        let button = document.createElement("button")
        button.innerHTML = "Remover imóvel" //se não der certo colocar innerText
        button.setAttribute("onclick", "app.removeProperty(this)")
        return button
    }

    removeProperty(button) {
        button.parentNode.remove()
    }

    cleanForm() {
        document.querySelector("select[name='kind']").value = false
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='status']").checked = false
    }
}