function showinfo() {
    let name = document.querySelector("input[name='name']").value
    //Para option selecido usamos "option:checked"
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    //para o radio, o input deve estar checked
    let likePrograming = document.querySelector("input[name='like-programming']:checked").value
    //tem de ser querySelectorAll pois pode ser mais que um
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")

    let optionsValue = []
    developerOptions.forEach(element => optionsValue.push(element.value))

    alert("Nome: " + name +
          "\nCor favorita: " + favoriteColor +
          "\nGosta de programar: " + likePrograming +
          "\nConhecimentos de progração: " + optionsValue.join(", "))
}