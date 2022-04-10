function show() {
    let nomeDoUsuario = document.getElementById("name")
    console.log(nomeDoUsuario, nomeDoUsuario.value)
    
    let telefonesDoUsuario = document.getElementsByName("phone")
    console.log(telefonesDoUsuario, telefonesDoUsuario[0].value)

    //Por query: selecionand a div que tem id phones
    //e dentro dela queremos inputs com tag name='phone'
    let elements = document.querySelectorAll("div#phones input[name='phone']")
    console.log(elements, "Por query")
}