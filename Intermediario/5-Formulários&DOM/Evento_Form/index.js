function save() {
    event.preventDefault()
    //é usado para não ter o comportamento padrão de atualizar a págian 
    //assim de se clicar em um botão que está dentro de um formulário
    //AÍ NÃO RECARREGA COMO NORMALMENTE
    let name = document.querySelector("input[name='name']").value
    let language = document.querySelector("select[name='programing-lang']").value
    /* o código acima é o mesmo que:
    let language = document.querySelector("select[name='programing-lang'] option:checked") */
    alert("Nome: " + name + "\nLinguagem: " + language)
}