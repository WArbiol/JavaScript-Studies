function verify() {
  //let selected = document.querySelector("select option:checked")
    let selected = document.querySelector("select").value
    if(selected == "disable"){
        document.querySelector("input[name='some-text']").disabled = true
        let pElement = document.getElementById("message")
        pElement.innerText = "DESABILITADO"
        pElement.style.backgroundColor = "red"
        pElement.style.color = "white"
    }else{
        document.querySelector("input[name='some-text']").disabled = false
        let pElement = document.getElementById("message")
        pElement.innerText = ""
        pElement.style.backgroundColor = "black"
        pElement.style.color = "transparent"
    }
}